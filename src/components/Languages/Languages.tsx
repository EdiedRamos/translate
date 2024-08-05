import "./Languages.scss";

import {
  DETECT_LANGUAGE,
  INITIAL_OPTIONS,
  SELECT_OPTIONS,
  getDefaultLanguage,
  languageIsInSelect,
  whenLanguageIsActiveStyles,
} from "@/shared/language";
import { IconButton, LanguageButton } from "@/components";

import { SwapIcon } from "@/general/assets";
import { useEffect } from "react";

interface Props {
  withDetectionLanguage?: boolean;
  withSwapLanguage?: boolean;
  language: string;
  updateLanguage: (language: string) => void;
  onSwap?: () => void;
}

export const Languages = ({
  withDetectionLanguage = false,
  withSwapLanguage = false,
  onSwap = () => {},
  language,
  updateLanguage,
}: Props) => {
  useEffect(() => {
    updateLanguage(INITIAL_OPTIONS[withDetectionLanguage ? 0 : 1]?.id);
    // eslint-disable-next-line
  }, []);

  const setDetectLanguage = () => updateLanguage(DETECT_LANGUAGE.id);

  return (
    <section className="languages-control">
      <div className="languages languages-container">
        {withDetectionLanguage && (
          <LanguageButton
            disabled
            onClick={setDetectLanguage}
            className={whenLanguageIsActiveStyles(language, DETECT_LANGUAGE.id)}
          >
            {DETECT_LANGUAGE.value}
          </LanguageButton>
        )}
        {INITIAL_OPTIONS.map(({ id, value }) => (
          <LanguageButton
            onClick={() => updateLanguage(id)}
            className={whenLanguageIsActiveStyles(language, id)}
            key={id}
          >
            {value}
          </LanguageButton>
        ))}
        <select
          className={
            languageIsInSelect(language) ? "language-button--active" : ""
          }
          value={language}
          onChange={(event) => updateLanguage(event.target.value)}
        >
          <option value={getDefaultLanguage(withDetectionLanguage)}>
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
          <IconButton icon={<SwapIcon />} onClick={onSwap} />
        )}
      </div>
    </section>
  );
};
