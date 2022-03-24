import { KeyboardKey } from "@components"

import { KeyboardLetterStatusProps } from '../../home-definitions'
import { KeyboardStyles } from "./keyboard-styles"


const keyboardLetters: string[][] = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm']
]

interface Props {
  keyboardLettersStatus: KeyboardLetterStatusProps
}

export const Keyboard = ({ keyboardLettersStatus }: Props) => {
  return (
    <KeyboardStyles>
      <div className="letters-container full">
        {
          keyboardLetters.map((row: string[], index: number) => (
            <div key={index} className="row-container">
              {
                row.map((letter: string, letterIndex: number) => (
                  <KeyboardKey
                    key={letterIndex}
                    letter={letter}
                    pressed={keyboardLettersStatus.unexist.includes(letter)}
                    good={keyboardLettersStatus.correct.includes(letter)}
                  />
                ))
              }
            </div>
          ))
        }
      </div>
    </KeyboardStyles>
  )
}
