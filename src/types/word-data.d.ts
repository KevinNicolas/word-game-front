import { LetterStatus } from "@types"
export interface WordData {
  guessWord: string
  enteredWord: string
  enteredLetterStatus: Record<string, LetterStatus>
  isAnalyzed: boolean
  gameOver: boolean
}