import { useState, useMemo } from "react"

import { LetterData } from "@types"
import { useWordDataContext } from "@hooks"

import { CorrectWordsStyles } from "./Correct-words-style"

export const CorrectWords = () => {
  const { wordData: { isAnalyzed, guessWord, enteredWord } } = useWordDataContext()
  const [lettersToDisplay, setlettersToDisplay] = useState<LetterData[]>([])


  
  useMemo(() => {
    if (isAnalyzed) {
      const newLetterToDisplay: LetterData[] = []
      enteredWord.split('').forEach((letter: string, index: number) => {
        if (lettersToDisplay[index].status === 'correct') return newLetterToDisplay.push(lettersToDisplay[index])
        if (letter === guessWord[index]) return newLetterToDisplay.push({ letter, index, status: 'correct' })
        return newLetterToDisplay.push({ letter: '_', index, status: 'normal' })
      })
      setlettersToDisplay(newLetterToDisplay)
    }
  }, [isAnalyzed])

  useMemo(() => { 
    const newLetterToDisplay: LetterData[] = guessWord.split('').map<LetterData>((letter: string, index: number) => ({ index, letter: '_', status: 'normal' })) 
    setlettersToDisplay(newLetterToDisplay)
  }, [guessWord])

  return (
    <CorrectWordsStyles>
      <div className="correct-letters-container">
        {
          lettersToDisplay.map(({ letter }: LetterData, index: number) => (
            <span key={index}>{ letter.toUpperCase() }</span>
          ))
        }
      </div>
    </CorrectWordsStyles>
  )
}
