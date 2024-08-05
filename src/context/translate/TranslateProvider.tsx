import React, { useEffect, useState } from "react";

import { TranslateContext } from "./TranslateContext";
import { TranslateService } from "@/services/translate";
import { speakTranslationText } from "@/shared/language";

interface TranslateProviderProps {
  children: React.ReactNode;
}

export const TranslateProvider = ({ children }: TranslateProviderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>("");
  const [targetLanguage, setTargetLanguage] = useState<string>("");
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  const [translatingText, setTranslatingText] = useState<string>(
    "Hello, how are you?"
  );
  const [translatedText, setTranslatedText] = useState<string>("");

  const updateCurrentText = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setTranslatingText(event.target.value.substring(0, 500));

  const makeSwap = () => {
    const language = currentLanguage;
    setCurrentLanguage(targetLanguage);
    setTargetLanguage(language);

    const translating = translatingText;
    setTranslatingText(translatedText);
    setTranslatedText(translating);
  };

  const updateCurrentLanguage = (language: string) => {
    setCurrentLanguage(language);
  };

  const updateTargetLanguage = (language: string) => {
    setTargetLanguage(language);
  };

  const playTranslatingText = () => {
    speakTranslationText(currentLanguage, translatingText, voices);
  };

  const playTranslatedText = () => {
    speakTranslationText(targetLanguage, translatedText, voices);
  };

  useEffect(() => {
    const updateVoices = () => {
      const availableVoices = speechSynthesis.getVoices();
      setVoices(availableVoices);
    };
    speechSynthesis.onvoiceschanged = updateVoices;

    return () => {
      speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      TranslateService.translate("en", "fr", translatingText).then(
        (translated) => setTranslatedText(translated)
      );
    }, 500);
    return () => clearInterval(id);
  }, [translatingText]);

  const values = {
    translatingText,
    translatedText,
    currentLanguage,
    targetLanguage,
    makeSwap,
    updateCurrentLanguage,
    updateTargetLanguage,
    updateCurrentText,
    playTranslatingText,
    playTranslatedText,
  };

  return (
    <TranslateContext.Provider value={values}>
      {children}
    </TranslateContext.Provider>
  );
};
``;
