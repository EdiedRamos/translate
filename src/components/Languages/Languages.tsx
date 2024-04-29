const INITIAL_OPTIONS = ["English", "French"];
const SELECT_OPTIONS = ["Spanish", "Italian", "Portuguese"];

export const Languages = () => {
  return (
    <div className="languages languages-container">
      {INITIAL_OPTIONS.map((option, index) => (
        <button key={index}>{option}</button>
      ))}
      <select>
        {SELECT_OPTIONS.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
};
