export type LetterStatus = 'correct' | 'incorrect' | 'unexist' | 'normal'

export interface LetterData {
  index: number
  letter: string
  status: LetterStatus
}