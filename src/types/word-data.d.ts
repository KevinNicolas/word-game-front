import { NewLetterStatus } from "./letter-data"


export interface WordData {
  guessWord: string
  enteredWord: string
  enteredLetterStatus: Record<string, NewLetterStatus>
  isAnalyzed: boolean
  gameOver: boolean
}