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

  return (
    <CardLayout className="translator">
      <Languages
        withDetectionLanguage
        language={currentLanguage}
        updateLanguage={updateCurrentLanguage}
      />
      <Text value={currentText} onChangeValue={updateCurrentText} />
      <Controls withTranslate onCopy={() => alert("copy in progress")} />
    </CardLayout>
  );
};
