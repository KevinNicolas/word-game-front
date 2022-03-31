import React, { createContext } from "react";
import { WordData } from "types/word-data";

interface ContextProps {
  wordData: WordData
  setwordData: React.Dispatch<React.SetStateAction<WordData>>
}

const wordDataContextValue: WordData = {
  guessWord: '',
  enteredWord: '',
  enteredLetterStatus: {},
  isAnalyzed: false,
  gameOver: false
}

export const WordDataContext = createContext<ContextProps>({ wordData: wordDataContextValue, setwordData: () => {}})