import { createContext } from "react";

interface TranslateContextI {
  translatingText: string;
  translatedText: string;
  currentLanguage: string;
  targetLanguage: string;
  makeSwap: () => void;
  updateCurrentLanguage: (language: string) => void;
  updateTargetLanguage: (language: string) => void;
  updateCurrentText: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  playTranslatingText: () => void;
  playTranslatedText: () => void;
}

export const TranslateContext = createContext<TranslateContextI | undefined>(
  undefined
);
