import { LetterData } from "@types"
import { useEffect } from "react"
import { CorrectWordsStyles } from "./Correct-words-style"

interface Props {
  letters: LetterData[]
}

export const CorrectWords = ({ letters }: Props) => {
  return (
    <CorrectWordsStyles>
      <div className="correct-letters-container">
        {
          letters.map(({ letter }: LetterData, index: number) => (
            <span key={index}>{ letter.toUpperCase() }</span>
          ))
        }
      </div>
    </CorrectWordsStyles>
  )
}
