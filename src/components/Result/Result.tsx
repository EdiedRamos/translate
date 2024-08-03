import "./Result.scss";

import { CardLayout, Languages } from "@/components";

import { useTranslate } from "@/context/translate";

export const Result = () => {
  const { targetLanguage, updateTargetLanguage, makeSwap } = useTranslate();

  return (
    <CardLayout className="result">
      <Languages
        withSwapLanguage
        language={targetLanguage}
        updateLanguage={updateTargetLanguage}
        onSwap={makeSwap}
      />
    </CardLayout>
  );
};
