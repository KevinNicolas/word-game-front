import { MutableRefObject, useEffect, useImperativeHandle, useState } from "react"

import { WaterfallLoading, WordLetterCard } from "@components"
import { useBackend, useKeyListener } from "@hooks"
import { LetterData } from "@types"
import { parseWord } from "@utils"

import { LetterScreenStyles } from "./letters-screen-styles"
import { LetterScreenRefFunction } from "views/Home/home-definitions"

interface Props {
  updateKeyboardLetterStatus: ({ correct, unexist }: { correct: string[], unexist: string[] }, reset?: boolean) => void
  setcorrectLetters: (letters: LetterData[]) => void
  reference: MutableRefObject<LetterScreenRefFunction | undefined>
}

export const LetterScreen = ({ reference, updateKeyboardLetterStatus, setcorrectLetters }: Props) => {

  useImperativeHandle(reference, (): LetterScreenRefFunction => ({
    refreshWord: () => getWord()
  }))

  const handleEnterEvent = () => {
    if (wordStatus.alreadyAnalyzed) return
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
    setwordStatus({ isComplete, alreadyAnalyzed: true })
    setcorrectLetters(parsedWords)
  }

  const processDisplayLetters = ({ reset = false }: { reset?: boolean }) => {
    if (reset) {
      setwordStatus({ isComplete: false, alreadyAnalyzed: false })
      settypedWord({ value: '', lenght: word.length })
      updateKeyboardLetterStatus({ correct: [], unexist: [] }, true)
      setcorrectLetters(word.split('').map(({}, index: number) => ({ letter: '_', index, status: 'normal' })))
    }
    
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

  const clearTypedWord = () => { 
    if (wordStatus.isComplete) return getWord()
    if (wordStatus.alreadyAnalyzed) {
      setwordStatus({ ...wordStatus, alreadyAnalyzed: false })
      return settypedWord({ ...typedWord, value: '' })
    }
    settypedWord(({ value }) => ({ ...typedWord, value: value.substring(0, value.length - 1)}))
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
  const [wordStatus, setwordStatus] = useState<{ isComplete: boolean, alreadyAnalyzed: boolean }>({ isComplete: false, alreadyAnalyzed: false })
  const [typedWord, settypedWord] = useKeyListener(handleEnterEvent, clearTypedWord)

  useEffect(() => {
    getWord()
  }, [])

  useEffect(() => { processDisplayLetters({ reset: false }) }, [typedWord])
  useEffect(() => { processDisplayLetters({ reset: true }) }, [word])

  return (
    <LetterScreenStyles wordIsComplete={wordStatus.isComplete}>
      <div className="word-container full center">
        {
          word === ''
            ? <WaterfallLoading />
            : displayLetters.map(({ letter, status }: LetterData, index: number) => 
              <WordLetterCard
                key={index}
                letter={letter}
                status={status}
                wordIsComplete={wordStatus.isComplete}
              />)
        }
      </div>
    </LetterScreenStyles>
  )
}
