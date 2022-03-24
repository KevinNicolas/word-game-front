import { useEffect, useState } from "react"

import { WaterfallLoading, WordLetterCard } from "@components"
import { useBackend, useKeyListener } from "@hooks"
import { LetterData } from "@types"
import { parseWord } from "@utils"

import { LetterScreenStyles } from "./letters-screen-styles"

interface Props {
  updateKeyboardLetterStatus: ({ correct, unexist }: { correct: string[], unexist: string[] }) => void
}

export const LetterScreen = ({ updateKeyboardLetterStatus }: Props) => {
  const handleEnterEvent = () => {
    const { lettersData: parsedWords, wordIsComplete: isComplete } = parseWord({ wordToGuess: word, enteredWord: typedWord.value })
    const correct: string[] = []
    const unexist: string[] = []
    for (const { letter, status } of parsedWords) {
      switch (status) {
        case 'correct': correct.push(letter); break;
        case 'unexist': unexist.push(letter); break;
      }
    }

    updateKeyboardLetterStatus({ correct, unexist })
    setdisplayLetters(parsedWords)
    if (isComplete !== wordIsComplete) setwordIsComplete(isComplete)
  }

  const processDisplayLetters = () => {
    if (typedWord.value.length <= word.length) {
      let letters = typedWord.value
      for (let i = 0; i < (word.length - typedWord.value.length); i++) letters += ' '
      const lettersToDisplay: LetterData[] = letters.split('').map((letter: string, index: number): LetterData => ({
        index,
        letter,
        status: 'normal'
      }))
      setdisplayLetters(lettersToDisplay)
    }
  }

  const getWord = () => {
    setword('')
    useBackend.get$<{ word: string }>({ endpoint: '/word' }).subscribe({
      next: ({ word }) => { setword(word.split(' ')[0].toLowerCase()); settypedWord({ ...typedWord, lenght: word.length }); console.info(`Word: ${word}`) },
      error: ({ error }) => { console.error(error) }
    })
  }

  const [word, setword] = useState<string>('')
  const [displayLetters, setdisplayLetters] = useState<LetterData[]>([])
  const [wordIsComplete, setwordIsComplete] = useState<boolean>(false)
  const [typedWord, settypedWord] = useKeyListener(handleEnterEvent)

  useEffect(() => {
    getWord()
  }, [])

  useEffect(() => { processDisplayLetters() }, [typedWord, word])

  return (
    <LetterScreenStyles wordIsComplete={wordIsComplete}>
      <div className="word-container full center">
        {
          word === ''
            ? <WaterfallLoading />
            : displayLetters.map(({ letter, status }: LetterData, index: number) => 
              <WordLetterCard
                key={index}
                letter={letter}
                status={status}
                wordIsComplete={wordIsComplete}
              />)
        }
      </div>
    </LetterScreenStyles>
  )
}
