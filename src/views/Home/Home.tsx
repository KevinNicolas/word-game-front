import { useRef, useState } from "react"

import { HomeStyles } from "./home-styles"
import { KeyboardLetterStatusProps, LetterScreenRefFunction } from './home-definitions'
import { Keyboard, LetterScreen } from "./page-components"



export const Home = () => {
  const [keyboardLettersStatus, setkeyboardLettersStatus] = useState<KeyboardLetterStatusProps>({
    correct: [],
    unexist: []
  })

  const updateKeyboardLetterStatus = ({ correct, unexist }: { correct: string[], unexist: string[] }) => {
    setkeyboardLettersStatus({ correct, unexist })
  }

  const letterScreenRef = useRef<LetterScreenRefFunction>();

  return (
    <HomeStyles>
      <div className="page-container">
        <div className="header-container full">
          <h1>Word-Game</h1>
        </div>
        <div className="body-container full">
          <LetterScreen reference={letterScreenRef} updateKeyboardLetterStatus={updateKeyboardLetterStatus} />
          <div className="panel-container">
            <div className="actions-container full">
              <button
                className="get-word-btn"
                onClick={(e) => {
                  letterScreenRef.current?.refreshWord();
                  (e.target as any).blur()
                }}
              >
                Obtener otra palabra
              </button>
            </div>
            <div className="full center">
              <Keyboard keyboardLettersStatus={keyboardLettersStatus} />
            </div>
          </div>
        </div>
      </div>
    </HomeStyles>
  )
}
