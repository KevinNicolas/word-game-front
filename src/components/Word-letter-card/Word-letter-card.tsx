import { LetterStatus } from "@types"
import { memo } from "react"
import { WordLetterCardStyles } from "./word-letter-card-styles"

interface Props {
  letter: string
  status: LetterStatus
  wordIsComplete: boolean
  toUpperCase?: boolean
}

export const WordLetterCard = memo(({ letter, status, wordIsComplete, toUpperCase = true }: Props) => {
  return (
    <WordLetterCardStyles status={status} wordIsComplete={wordIsComplete}>
      <div className={`word-letter-card-container center grow-animation`}>
        <span>{ toUpperCase ? letter.toUpperCase() : letter }</span>
      </div>
    </WordLetterCardStyles>
  )
})
