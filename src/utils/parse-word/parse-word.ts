import { Props } from './parse-word-definitions'
import { LetterData } from '@types'

export const parseWord = ({ enteredWord, wordToGuess }: Props): LetterData[] => {
  const lettersData: LetterData[] = []

  enteredWord.split('').forEach((letter: string, index: number): void => {
    if (!wordToGuess.includes(letter)) { lettersData.push({ index, letter, status: 'unexist' }); return }

    if (wordToGuess[index] === letter) { lettersData.push({ letter, index, status: 'correct' }); return }

    lettersData.push({ letter, index, status: 'incorrect' })
  })

  return lettersData
}