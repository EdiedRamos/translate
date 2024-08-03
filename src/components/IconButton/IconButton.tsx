import "./IconButton.scss";

import React from "react";

interface Props {
  icon: React.ReactNode;
  onClick: () => void;
}

export const IconButton = ({ icon, onClick }: Props) => {
  return (
    <button onClick={onClick} className="swap-button">
      {icon}
    </button>
  );
};
