import "./Text.scss";

import React from "react";

interface Props {
  isDisable?: boolean;
  value: string;
  onChangeValue?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Text = ({ isDisable = false, value, onChangeValue }: Props) => {
  // const [text, setText] = useState<string>(
  //   isDisable ? "Bonjour, comment allez-vous?" : "Hello, how are you?"
  // );

  return (
    <div className="text text__container">
      <textarea
        className="text__text-area"
        disabled={isDisable}
        value={value}
        // onChange={(event) => setText(event.target.value.substring(0, 500))}
        onChange={onChangeValue}
      />
      {!isDisable && <p className="text__length">{value.length}/500</p>}
    </div>
  );
};
