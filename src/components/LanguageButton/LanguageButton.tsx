import type { ReactNode, HTMLAttributes } from "react";
import "./LanguageButton.scss";

type PropsType = {
  children: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

export const LanguageButton = ({ children, className, ...rest }: PropsType) => {
  return (
    <button className={`language-button ${className}`} {...rest}>
      {children}
    </button>
  );
};
