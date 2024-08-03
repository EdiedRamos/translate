import "./Controls.scss";

import { CopyIcon, SortAlfaIcon, SoundIcon } from "@/general/assets";

import { IconButton } from "../IconButton/IconButton";

interface Props {
  withTranslate?: boolean;
}

export const Controls = ({ withTranslate = false }: Props) => {
  return (
    <section
      className={`controls controls__container ${
        withTranslate ? "" : "controls__container--custom-margin"
      }`}
    >
      <div className="controls__group">
        <IconButton icon={<SoundIcon />} onClick={() => {}} />
        <IconButton icon={<CopyIcon />} onClick={() => {}} />
      </div>
      {withTranslate && (
        <button className="controls__translate">
          <SortAlfaIcon /> Translate
        </button>
      )}
    </section>
  );
};
