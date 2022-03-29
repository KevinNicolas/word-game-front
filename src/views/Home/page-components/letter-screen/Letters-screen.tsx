import { MutableRefObject, useEffect, useImperativeHandle, useState } from "react"

import { NewLetterData } from "@types"
import { WaterfallLoading, WordLetterCard } from "@components"
import { useBackend, useKeyListener, useWordDataContext } from "@hooks"

import { LetterScreenStyles } from "./letters-screen-styles"
import { LetterScreenRefFunction } from "views/Home/home-definitions"

interface Props {
  reference: MutableRefObject<LetterScreenRefFunction | undefined>
}

export const LetterScreen = ({ reference }: Props) => {

  useImperativeHandle(reference, (): LetterScreenRefFunction => ({
    refreshWord: () => getWord()
  }))


  const getWord = () => {
    setwordData({ guessWord: '', enteredWord: '', enteredLetterStatus: {}, isAnalyzed: false, gameOver: false })
    useBackend.get$<{ word: string }>({ endpoint: '/word' }).subscribe({
      next: ({ word }) => {
        const parsedWord = word.split(' ')[0].toLowerCase()
        settypedWord({ value: '', lenght: parsedWord.length })
        setwordData((newWordData) => ({ ...newWordData, guessWord: parsedWord, enteredWord: '' }))
        setscreenLetters([])
        console.info(`Word: ${parsedWord}`)
      },
      error: ({ error }) => { console.error(error) }
    })
  }
  const processScreenLetters = () => {
    if (typedWord.value.length <= wordData.guessWord.length && wordData.guessWord.length !== 0) {
      const lettersToDisplay: NewLetterData[] = typedWord.value.split('').map<NewLetterData>((letter) => ({ letter, status: 'normal' }))
      
      for (let i = lettersToDisplay.length; i < wordData.guessWord.length; i++) lettersToDisplay.push({ letter: ' ', status: 'normal' })
      setscreenLetters(lettersToDisplay)
    }

    if (typedWord.value.length !== wordData.guessWord.length && (wordData.isAnalyzed || wordData.gameOver))
      setwordData({ ...wordData, isAnalyzed: false, gameOver: false })
  }
  const handleEnterEvent = () => {
    if (typedWord.value.length === wordData.guessWord.length && !wordData.isAnalyzed) {
      const updatedLetterStatuts = wordData.enteredLetterStatus
      const newScreenLetter: NewLetterData[] = screenLetters.map<NewLetterData>(({ letter }: NewLetterData, index: number ) => {
        if (!wordData.guessWord.includes(letter)) {  
          updatedLetterStatuts[letter] = 'incorrect'
          return { letter, status: 'incorrect' }
        }
        if (wordData.guessWord[index] === letter) {
          updatedLetterStatuts[letter] = 'correct'
          return { letter, status: 'correct' }
        }

        updatedLetterStatuts[letter] = 'existInWord'
        return { letter, status: 'existInWord' }
      })

      setscreenLetters(newScreenLetter)
      return setwordData({ 
        ...wordData,
        isAnalyzed: true,
        gameOver: wordData.guessWord.length === newScreenLetter.filter(({ status }: NewLetterData) => status === 'correct').length,
        enteredWord: typedWord.value,
        enteredLetterStatus: updatedLetterStatuts
      })
    }
  }
  const handleClearWord = () => {
    if (wordData.isAnalyzed) {
      if (!wordData.gameOver) return settypedWord({ ...typedWord, value: '' })
      return getWord()
    }
    return settypedWord({ ...typedWord, value: typedWord.value.substring(0, typedWord.value.length - 1) })
  }


  const { wordData, setwordData } = useWordDataContext()
  const [screenLetters, setscreenLetters] = useState<NewLetterData[]>([])
  const [typedWord, settypedWord] = useKeyListener(handleEnterEvent, handleClearWord)

  
  useEffect(() => { getWord() }, [])
  useEffect(() => { processScreenLetters(); }, [wordData.guessWord, typedWord])

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
