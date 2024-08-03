import { createContext } from "react";

interface TranslateContextI {
  currentLanguage: string;
  targetLanguage: string;
  makeSwap: () => void;
  updateCurrentLanguage: (language: string) => void;
  updateTargetLanguage: (language: string) => void;
}

export const TranslateContext = createContext<TranslateContextI | undefined>(
  undefined
);
