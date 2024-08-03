import { TranslateContext } from "./TranslateContext";
import { useContext } from "react";

export const useTranslate = () => {
  const context = useContext(TranslateContext);
  if (context === undefined)
    throw new Error("useTranslate must to be inside a TranslateProvider");
  return context;
};
