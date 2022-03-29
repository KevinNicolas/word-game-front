import { WordDataContext } from "@context"
import { LetterStatus } from "@types"
import { keyboardLetters } from "@utils"
import { useState } from "react"
import { WordData } from "types/word-data"


export const WordDataProvider = ({ child }: { child: JSX.Element }) => {
  const enteredLetterStatus: Record<string, LetterStatus> = {}
  for (const keyboardRow of keyboardLetters)
    for (const letter of keyboardRow)
      enteredLetterStatus[letter] = 'normal'

  const [wordData, setwordData] = useState<WordData>({
    guessWord: '',
    enteredWord: '',
    enteredLetterStatus,
    isAnalyzed: false,
    gameOver: false
  })

  return (
    <WordDataContext.Provider value={{ wordData, setwordData }}>
      {child}
    </WordDataContext.Provider>
  )
}