import "./Translator.scss";

import { CardLayout, Controls, Languages, Text } from "@/components";

import { toast } from "react-toastify";
import { useTranslate } from "@/context/translate";

export const Translator = () => {
  const {
    currentLanguage,
    updateCurrentLanguage,
    translatingText,
    updateCurrentText,
    playTranslatingText,
  } = useTranslate();

  const handleCopy = () =>
    navigator.clipboard
      .writeText(translatingText)
      .then(() => toast.success("Copied!!!"));

  return (
    <CardLayout className="translator">
      <Languages
        withDetectionLanguage
        language={currentLanguage}
        updateLanguage={updateCurrentLanguage}
      />
      <Text value={translatingText} onChangeValue={updateCurrentText} />
      <Controls
        withTranslate
        onCopy={handleCopy}
        onPlay={playTranslatingText}
      />
    </CardLayout>
  );
};
