import "./Translator.scss";

import { CardLayout, Languages } from "@/components";

export const Translator = () => {
  return (
    <CardLayout className="translator">
      <Languages withDetectionLanguage />
    </CardLayout>
  );
};
