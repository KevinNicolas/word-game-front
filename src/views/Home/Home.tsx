import { useRef } from "react"

import { HomeStyles } from "./home-styles"
import { LetterScreenRefFunction } from './home-definitions'
import { Keyboard, LetterScreen } from "./page-components"
import { CorrectWords } from "components/Correct-words/Correct-words"
import { MdRefresh } from 'react-icons/md'
import { WordDataProvider } from "@components"



export const Home = () => {
  const letterScreenRef = useRef<LetterScreenRefFunction>();

  return (
    <HomeStyles>
      <WordDataProvider child={
        <div className="page-container">
          <div className="header-container full">
            <h1>Word-Game</h1>
          </div>
          <div className="body-container full">
            <LetterScreen reference={letterScreenRef} />
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
                <CorrectWords />
              </div>
              <div className="full center">
                <Keyboard />
              </div>
            </div>
          </div>
        </div>
      }/>
    </HomeStyles>
  )
}
