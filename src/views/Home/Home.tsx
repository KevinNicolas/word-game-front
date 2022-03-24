import { useEffect, useState } from "react"

import { WordLetterCard, WaterfallLoading, KeyboardKey } from "@components"
import { useBackend, useKeyListener } from "@hooks"
import { parseWord } from "@utils"
import { HomeStyles } from "./home-styles"
import { LetterData } from "@types"

const keyboardLetters: string[][] = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm']
]

export const Home = () => {
  const handleEnterEvent = () => {
    const parsedWords: LetterData[] = parseWord({ wordToGuess: word, enteredWord: typedWord.value })
    setunexistedLetters([...new Set([...unexistedLetters, ...parsedWords.map(({ letter, status }) => status === 'unexist' ? letter : '')])])
    setdisplayLetters(parsedWords)
  }

  const [word, setword] = useState<string>('')
  const [typedWord, settypedWord] = useKeyListener(handleEnterEvent)
  const [displayLetters, setdisplayLetters] = useState<LetterData[]>([])
  const [unexistedLetters, setunexistedLetters] = useState<string[]>([])

  
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
    <HomeStyles>
      <div className="page-container">
        <div className="header-container full">
          <h1>Word-Game</h1>
        </div>
        <div className="body-container full">
          <div className="word-container full center">
            {
              word === ''
                ? <WaterfallLoading />
                : displayLetters.map(({ letter, status }: LetterData, index: number) => <WordLetterCard key={index} letter={letter} status={status} />)
            }
          </div>
          <div className="letters-container full">
            {
              keyboardLetters.map((row: string[], index: number) => (
                <div key={index} className="row-container">
                  {
                    row.map((letter: string, letterIndex: number) => (
                      <KeyboardKey letter={letter} key={letterIndex} pressed={unexistedLetters.includes(letter)} />
                    ))
                  }
                </div>
              ))
            }
            <span>{ displayLetters.map(({ status }) => `${status}-`) }</span>
          </div>
        </div>
      </div>
    </HomeStyles>
  )
}
