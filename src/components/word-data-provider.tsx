import { WordDataContext } from "@context"
import { useState } from "react"
import { WordData } from "types/word-data"


export const WordDataProvider = ({ child }: { child: JSX.Element }) => {
  const [wordData, setwordData] = useState<WordData>({
    guessWord: '',
    enteredWord: '',
    enteredLetterStatus: {},
    isAnalyzed: false,
    gameOver: false
  })

  return (
    <WordDataContext.Provider value={{ wordData, setwordData }}>
      {child}
    </WordDataContext.Provider>
  )
}