import "./Result.scss";

import { CardLayout, Controls, Languages, Text } from "@/components";

import { toast } from "react-toastify";
import { useTranslate } from "@/context/translate";

export const Result = () => {
  const {
    targetLanguage,
    updateTargetLanguage,
    makeSwap,
    translatedText,
    playTranslatedText,
  } = useTranslate();

  const handleCopy = () =>
    navigator.clipboard
      .writeText(translatedText)
      .then(() => toast.success("Copied!!!"));

  return (
    <CardLayout className="result">
      <Languages
        withSwapLanguage
        language={targetLanguage}
        updateLanguage={updateTargetLanguage}
        onSwap={makeSwap}
      />
      <div className="result__group">
        <Text isDisable value={translatedText} />
        <Controls onCopy={handleCopy} onPlay={playTranslatedText} />
      </div>
    </CardLayout>
  );
};
