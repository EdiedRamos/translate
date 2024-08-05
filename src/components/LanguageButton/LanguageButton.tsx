import "./LanguageButton.scss";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type PropsType = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const LanguageButton = ({ children, className, ...rest }: PropsType) => {
  return (
    <button className={`language-button ${className}`} {...rest}>
      {children}
    </button>
  );
};
