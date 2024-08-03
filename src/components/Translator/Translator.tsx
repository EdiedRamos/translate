import "./Translator.scss";

import { CardLayout, Languages } from "@/components";

import { useTranslate } from "@/context/translate";

export const Translator = () => {
  const { currentLanguage, updateCurrentLanguage } = useTranslate();

  return (
    <CardLayout className="translator">
      <Languages
        withDetectionLanguage
        language={currentLanguage}
        updateLanguage={updateCurrentLanguage}
      />
    </CardLayout>
  );
};
