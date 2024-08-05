import React, { useState } from "react";

import { TranslateContext } from "./TranslateContext";

interface TranslateProviderProps {
  children: React.ReactNode;
}

export const TranslateProvider = ({ children }: TranslateProviderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>("");
  const [targetLanguage, setTargetLanguage] = useState<string>("");

  const [translatingText, setTranslatingText] = useState<string>(
    "Hello, how are you?"
  );

  // TODO: Remove disable below
  // eslint-disable-next-line
  const [translatedText, setTranslatedText] = useState<string>(
    "Bonjour, comment allez-vous?"
  );

  const updateCurrentText = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setTranslatingText(event.target.value.substring(0, 500));

  const makeSwap = () => {
    const language = currentLanguage;
    setCurrentLanguage(targetLanguage);
    setTargetLanguage(language);
  };

  const updateCurrentLanguage = (language: string) => {
    setCurrentLanguage(language);
  };

  const updateTargetLanguage = (language: string) => {
    setTargetLanguage(language);
  };

  const values = {
    translatingText,
    translatedText,
    currentLanguage,
    targetLanguage,
    makeSwap,
    updateCurrentLanguage,
    updateTargetLanguage,
    updateCurrentText,
  };

  return (
    <TranslateContext.Provider value={values}>
      {children}
    </TranslateContext.Provider>
  );
};
``;
