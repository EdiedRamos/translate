import { LanguageButton } from "../LanguageButton/LanguageButton";

const INITIAL_OPTIONS = [
  { id: "1", value: "English" },
  { id: "2", value: "French" },
];
const SELECT_OPTIONS = [
  { id: "3", value: "Spanish" },
  { id: "3", value: "Italian" },
  { id: "3", value: "Portuguese" },
];

export const Languages = () => {
  return (
    <div className="languages languages-container">
      {INITIAL_OPTIONS.map(({ id, value }) => (
        <LanguageButton
          // className={ === 1 ? "language-button--active" : ""}
          key={id}
        >
          {value}
        </LanguageButton>
      ))}
      <select>
        {SELECT_OPTIONS.map(({ id, value }) => (
          <option key={id}>{value}</option>
        ))}
      </select>
    </div>
  );
};
