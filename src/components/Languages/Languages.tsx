import "./Languages.scss";

import { LanguageButton } from "../LanguageButton/LanguageButton";
import { SwapIcon } from "@/general/assets";
import { useState } from "react";

const DETECT_LANGUAGE = {
  id: "6bb226c9-f565-4a75-b332-d6f1973b27d7",
  value: "Detect Language",
};

const INITIAL_OPTIONS = [
  { id: "8a9b9cfc-860a-484c-aa79-583071500494", value: "English" },
  { id: "0981618e-eac0-4f00-ba5a-c0a5896e3f93", value: "French" },
];
const SELECT_OPTIONS = [
  { id: "396b2ed9-5f69-4deb-8751-68bc081218b7", value: "Spanish" },
  { id: "3924b033-e3db-4c67-8fbd-e8e7a1a16d0c", value: "Italian" },
  { id: "71ff27df-433b-4a7b-9903-54dff6107653", value: "Portuguese" },
];

interface Props {
  withDetectionLanguage?: boolean;
  withSwapLanguage?: boolean;
}

export const Languages = ({
  withDetectionLanguage = false,
  withSwapLanguage = false,
}: Props) => {
  const [selected, setSelected] = useState<string>(
    INITIAL_OPTIONS[withDetectionLanguage ? 0 : 1]?.id
  );

  return (
    <section className="languages-control">
      <div className="languages languages-container">
        {withDetectionLanguage && (
          <LanguageButton
            onClick={() => setSelected(DETECT_LANGUAGE.id)}
            className={
              DETECT_LANGUAGE.id === selected ? "language-button--active" : ""
            }
          >
            {DETECT_LANGUAGE.value}
          </LanguageButton>
        )}
        {INITIAL_OPTIONS.map(({ id, value }) => (
          <LanguageButton
            onClick={() => setSelected(id)}
            className={id === selected ? "language-button--active" : ""}
            key={id}
          >
            {value}
          </LanguageButton>
        ))}
        <select
          className={
            SELECT_OPTIONS.some((option) => option.id === selected)
              ? "language-button--active"
              : ""
          }
          value={selected}
          onChange={(event) => setSelected(event.target.value)}
        >
          <option
            value={
              withDetectionLanguage
                ? DETECT_LANGUAGE.id
                : INITIAL_OPTIONS[0]?.id
            }
          >
            Other language
          </option>
          {SELECT_OPTIONS.map(({ id, value }) => (
            <option key={id} value={id}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div>
        {withSwapLanguage && (
          <button className="swap-button">
            <SwapIcon />
          </button>
        )}
      </div>
    </section>
  );
};
