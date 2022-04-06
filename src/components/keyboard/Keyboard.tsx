import { useEffect } from "react"

import { KeyboardKey } from "@components"
import { keyboardLetters } from "@utils"
import { useWordDataContext } from "@hooks"

import { KeyboardStyles } from "./keyboard-styles"

export const Keyboard = () => {
  const { wordData } = useWordDataContext()

  useEffect(() => {
  }, [wordData.enteredLetterStatus])
  

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
                    pressed={wordData.enteredLetterStatus[letter] === 'incorrect'}
                    good={wordData.enteredLetterStatus[letter] === 'correct'}
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
