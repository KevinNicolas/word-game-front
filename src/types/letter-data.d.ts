export type LetterStatus = 'correct' | 'incorrect' | 'unexist' | 'normal'

export interface LetterData {
  index: number
  letter: string
  status: LetterStatus
}

export type NewLetterStatus = 'correct' | 'incorrect' | 'existInWord' | 'normal'

export interface NewLetterData {
  letter: string
  status: NewLetterStatus
}