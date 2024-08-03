import { TranslateContext } from "./TranslateContext";
import { useState } from "react";

interface TranslateProviderProps {
  children: React.ReactNode;
}

export const TranslateProvider = ({ children }: TranslateProviderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>("");
  const [targetLanguage, setTargetLanguage] = useState<string>("");

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
    currentLanguage,
    targetLanguage,
    makeSwap,
    updateCurrentLanguage,
    updateTargetLanguage,
  };

  return (
    <TranslateContext.Provider value={values}>
      {children}
    </TranslateContext.Provider>
  );
};
``;
