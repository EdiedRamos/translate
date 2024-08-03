import "./Text.scss";

import { useState } from "react";

interface Props {
  isDisable?: boolean;
}

export const Text = ({ isDisable = false }: Props) => {
  const [text, setText] = useState<string>(
    isDisable ? "" : "Hello, how are you?"
  );

  return (
    <div className="text text__container">
      <textarea
        className="text__text-area"
        disabled={isDisable}
        value={text}
        onChange={(event) => setText(event.target.value.substring(0, 500))}
      />
      {!isDisable && <p className="text__length">{text.length}/500</p>}
    </div>
  );
};
