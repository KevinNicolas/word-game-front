import { useEffect, useState } from "react"

import { WordLetterCard, WaterfallLoading, KeyboardKey } from "@components"
import { useBackend, useKeyListener } from "@hooks"
import { parseWord } from "@utils"
import { HomeStyles } from "./home-styles"
import { LetterData } from "@types"
import { KeyboardLetterStatusProps } from './home-definitions'
import { Keyboard } from "./page-components"

const keyboardLetters: string[][] = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm']
]



export const Home = () => {
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
    setkeyboardLettersStatus({
      correct: [...new Set([...keyboardLettersStatus.correct, ...parsedWords.map(({ letter, status }) => status === 'correct' ? letter : '')])],
      unexist: [...new Set([...keyboardLettersStatus.unexist, ...parsedWords.map(({ letter, status }) => status === 'unexist' ? letter : '')])]
    })
    setdisplayLetters(parsedWords)
    if (isComplete !== wordIsComplete) setwordIsComplete(isComplete)
  }

  const [word, setword] = useState<string>('')
  const [typedWord, settypedWord] = useKeyListener(handleEnterEvent)
  const [displayLetters, setdisplayLetters] = useState<LetterData[]>([])
  const [wordIsComplete, setwordIsComplete] = useState<boolean>(false)
  const [keyboardLettersStatus, setkeyboardLettersStatus] = useState<KeyboardLetterStatusProps>({
    correct: [],
    unexist: []
  })

  
  const getWord = () => {
    setword('')
    useBackend.get$<{ word: string }>({ endpoint: '/word' }).subscribe({
      next: ({ word }) => { setword(word.split(' ')[0].toLowerCase()); settypedWord({ ...typedWord, lenght: word.length }); console.info(`Word: ${word}`) },
      error: ({ error }) => { console.error(error) }
    })
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

  useEffect(() => {
    getWord()
  }, [])

  useEffect(() => { processDisplayLetters() }, [typedWord, word])

  return (
    <HomeStyles wordIsComplete={wordIsComplete}>
      <div className="page-container">
        <div className="header-container full">
          <h1>Word-Game</h1>
        </div>
        <div className="body-container full">
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
          <div className="full">
            <Keyboard keyboardLettersStatus={keyboardLettersStatus} />
          </div>
        </div>
      </div>
    </HomeStyles>
  )
}
