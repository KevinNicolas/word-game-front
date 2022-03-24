import { useState } from "react"

import { HomeStyles } from "./home-styles"
import { KeyboardLetterStatusProps } from './home-definitions'
import { Keyboard, LetterScreen } from "./page-components"



export const Home = () => {
  const [keyboardLettersStatus, setkeyboardLettersStatus] = useState<KeyboardLetterStatusProps>({
    correct: [],
    unexist: []
  })

  const updateKeyboardLetterStatus = ({ correct, unexist }: { correct: string[], unexist: string[] }) => {
    setkeyboardLettersStatus({ correct, unexist })
  }

  return (
    <HomeStyles>
      <div className="page-container">
        <div className="header-container full">
          <h1>Word-Game</h1>
        </div>
        <div className="body-container full">
          <LetterScreen updateKeyboardLetterStatus={updateKeyboardLetterStatus} />
          <div className="full">
            <Keyboard keyboardLettersStatus={keyboardLettersStatus} />
          </div>
        </div>
      </div>
    </HomeStyles>
  )
}
