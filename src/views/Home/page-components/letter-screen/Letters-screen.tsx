import { MutableRefObject, useEffect, useImperativeHandle, useState } from "react"

import { WaterfallLoading, WordLetterCard } from "@components"
import { useBackend, useKeyListener, useWordDataContext } from "@hooks"
import { LetterData, NewLetterData, NewLetterStatus } from "@types"
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


  const getWord = () => {
    setwordData({ guessWord: '', enteredWord: '', enteredLetterStatus: {}, isAnalyzed: false, gameOver: false })
    useBackend.get$<{ word: string }>({ endpoint: '/word' }).subscribe({
      next: ({ word }) => {
        const parsedWord = word.split(' ')[0].toLowerCase()
        settypedWord({ ...typedWord, lenght: parsedWord.length });
        setwordData((newWordData) => ({ ...newWordData, guessWord: parsedWord }))
      },
      error: ({ error }) => { console.error(error) }
    })
  }
  const processScreenLetters = () => {
    if (wordData.enteredWord.length <= wordData.guessWord.length && wordData.guessWord.length !== 0) {
      const lettersToDisplay: NewLetterData[] = typedWord.value.split('').map<NewLetterData>((letter) => ({ letter, status: 'normal' }))
      for (let i = lettersToDisplay.length; i < wordData.guessWord.length; i++) lettersToDisplay.push({ letter: '_', status: 'normal' })
      setscreenLetters(lettersToDisplay)
      setwordData({ ...wordData, enteredWord: typedWord.value, isAnalyzed: false, gameOver: false })
    }
  }
  const handleEnterEvent = () => {
    if (wordData.enteredWord.length === wordData.guessWord.length && !wordData.isAnalyzed) {
      const newScreenLetter: NewLetterData[] = screenLetters.map<NewLetterData>(({ letter }: NewLetterData, index: number ) => {
        if (!wordData.guessWord.includes(letter)) return { letter, status: 'incorrect' }
        if (wordData.guessWord[index] === letter) return { letter, status: 'correct' }
        return { letter, status: 'existInWord' }
      })

      setscreenLetters(newScreenLetter)
      if (wordData.guessWord.length === newScreenLetter.filter(({ status }: NewLetterData) => status === 'correct').length)
        return setwordData({ ...wordData, isAnalyzed: true, gameOver: true })
      return setwordData({ ...wordData, isAnalyzed: true, gameOver: false })
    }
  }
  const handleClearWord = () => {
    if (wordData.isAnalyzed) return settypedWord({ ...typedWord, value: '' })
    return settypedWord({ ...typedWord, value: typedWord.value.substring(0, typedWord.value.length - 1) })
  }


  const { wordData, setwordData } = useWordDataContext()
  const [screenLetters, setscreenLetters] = useState<NewLetterData[]>([])
  const [typedWord, settypedWord] = useKeyListener(handleEnterEvent, handleClearWord)

  
  useEffect(() => { getWord() }, [])
  useEffect(() => { processScreenLetters() }, [typedWord])
  useEffect(() => { processScreenLetters(); console.info(`Word: ${wordData.guessWord}`) }, [wordData.guessWord])

  return (
    <LetterScreenStyles wordIsComplete={wordData.gameOver}>
      <div className="word-container full center">
        {
          wordData.guessWord === ''
            ? <WaterfallLoading />
            : screenLetters.map(({ letter, status }: NewLetterData, index: number) => 
              <WordLetterCard
                key={index}
                letter={letter}
                status={status}
                wordIsComplete={wordData.gameOver}
              />)
        }
      </div>
    </LetterScreenStyles>
  )
}
