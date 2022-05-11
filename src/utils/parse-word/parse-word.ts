import { Props } from './parse-word-definitions'
import { LetterData } from '@types'

export const parseWord = ({ enteredWord, wordToGuess }: Props): { wordIsComplete: boolean, lettersData: LetterData[] } => {
  const lettersData: LetterData[] = []
  
  let correctLetterCounter: number = 0

  enteredWord.split('').forEach((letter: string, index: number): void => {
    if (!wordToGuess.includes(letter)) { lettersData.push({ letter, status: 'existInWord' }); return }

    if (wordToGuess[index] === letter) { lettersData.push({ letter, status: 'correct' }); correctLetterCounter++; return }

    lettersData.push({ letter, status: 'incorrect' })
  })

  return { wordIsComplete: correctLetterCounter === wordToGuess.length, lettersData }
}