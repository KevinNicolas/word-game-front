export type LetterStatus = 'correct' | 'incorrect' | 'existInWord' | 'normal'

export interface LetterData {
  letter: string
  status: LetterStatus
}