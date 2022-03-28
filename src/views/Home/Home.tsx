import { useRef, useState } from "react"

import { HomeStyles } from "./home-styles"
import { KeyboardLetterStatusProps, LetterScreenRefFunction } from './home-definitions'
import { Keyboard, LetterScreen } from "./page-components"
import { CorrectWords } from "components/Correct-words/Correct-words"
import { LetterData } from "@types"
import { MdRefresh } from 'react-icons/md'



export const Home = () => {
  const [keyboardLettersStatus, setkeyboardLettersStatus] = useState<KeyboardLetterStatusProps>({
    correct: [],
    unexist: []
  })
  const [correctLetters, setcorrectLetters] = useState<LetterData[]>([])


  const updateKeyboardLetterStatus = ({ correct, unexist }: { correct: string[], unexist: string[] }, reset?: boolean) => {
    if (reset) setkeyboardLettersStatus({ correct: [], unexist: [] })
    setkeyboardLettersStatus(({ correct: actualCorrect, unexist: actualUnexist }) => ({ 
      correct: [...new Set([...actualCorrect, ...correct])], 
      unexist: [...new Set([...actualUnexist, ...unexist])]
    }))
  }

  const handleSetCorrectLetters = (letters: LetterData[]) => {
    if (correctLetters.length !== letters.length) return setcorrectLetters(letters)

    setcorrectLetters(correctLetters.map(({ letter, status }: LetterData, index: number): LetterData => {
      if (status === 'correct') return { letter, status, index }
      if (letters[index].status === 'correct') return letters[index]
      return { letter: '_', status: 'normal', index }
    }))
  }

  const letterScreenRef = useRef<LetterScreenRefFunction>();

  return (
    <HomeStyles>
      <div className="page-container">
        <div className="header-container full">
          <h1>Word-Game</h1>
        </div>
        <div className="body-container full">
          <LetterScreen 
            reference={letterScreenRef}
            updateKeyboardLetterStatus={updateKeyboardLetterStatus}
            setcorrectLetters={handleSetCorrectLetters}
          />
          <div className="panel-container">
            <div className="actions-container full">
              <div></div>
              <button
                className="get-word-btn"
                onClick={(e) => {
                  letterScreenRef.current?.refreshWord();
                  (e.target as any).blur()
                }}
              >
                <div>
                  <MdRefresh size={24} />
                </div>
                <span>Obtener otra palabra</span>
              </button>
            </div>
            <div className="correct-letter">
              <CorrectWords letters={correctLetters} />
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
