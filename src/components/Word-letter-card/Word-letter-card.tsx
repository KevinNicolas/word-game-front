import { LetterStatus } from "@types"
import { memo } from "react"
import { WordLetterCardStyles } from "./word-letter-card-styles"

interface Props {
  letter: string
  status: LetterStatus
  toUpperCase?: boolean
}

export const WordLetterCard = memo(({ letter, status, toUpperCase = true }: Props) => {
  return (
    <WordLetterCardStyles status={status}>
      <div className={`word-letter-card-container center`}>
        <span>{ toUpperCase ? letter.toUpperCase() : letter }</span>
      </div>
    </WordLetterCardStyles>
  )
})
