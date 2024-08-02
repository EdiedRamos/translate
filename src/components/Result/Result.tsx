import "./Result.scss";

import { CardLayout, Languages } from "@/components";

export const Result = () => {
  return (
    <CardLayout className="result">
      <Languages withSwapLanguage />
    </CardLayout>
  );
};
