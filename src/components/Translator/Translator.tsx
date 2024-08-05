import "./Translator.scss";

import { CardLayout, Controls, Languages, Text } from "@/components";

import { useTranslate } from "@/context/translate";

export const Translator = () => {
  const {
    currentLanguage,
    updateCurrentLanguage,
    currentText,
    updateCurrentText,
  } = useTranslate();

  const handleCopy = () => navigator.clipboard.writeText(currentText);

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
