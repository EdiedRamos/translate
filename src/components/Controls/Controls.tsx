import "./Controls.scss";

import { CopyIcon, SortAlfaIcon, SoundIcon } from "@/general/assets";

import { IconButton } from "../IconButton/IconButton";

interface Props {
  withTranslate?: boolean;
  onCopy: () => void;
  onPlay: () => void;
}

export const Controls = ({ withTranslate = false, onCopy, onPlay }: Props) => {
  return (
    <section
      className={`controls controls__container ${
        withTranslate ? "" : "controls__container--custom-margin"
      }`}
    >
      <div className="controls__group">
        <IconButton icon={<SoundIcon />} onClick={onPlay} />
        <IconButton icon={<CopyIcon />} onClick={onCopy} />
      </div>
      {withTranslate && (
        <button className="controls__translate">
          <SortAlfaIcon /> Translate
        </button>
      )}
    </section>
  );
};
