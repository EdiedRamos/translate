import "./Translator.scss";

import { CardLayout, Controls, Languages, Text } from "@/components";

import { toast } from "react-toastify";
import { useTranslate } from "@/context/translate";

export const Translator = () => {
  const {
    currentLanguage,
    updateCurrentLanguage,
    currentText,
    updateCurrentText,
  } = useTranslate();

  const handleCopy = () =>
    navigator.clipboard
      .writeText(currentText)
      .then(() => toast.success("Copied!!!"));

  return (
    <CardLayout className="translator">
      <Languages
        withDetectionLanguage
        language={currentLanguage}
        updateLanguage={updateCurrentLanguage}
      />
      <Text value={currentText} onChangeValue={updateCurrentText} />
      <Controls withTranslate onCopy={handleCopy} />
    </CardLayout>
  );
};
