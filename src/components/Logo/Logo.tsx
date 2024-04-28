import { LogoSrc } from "@/general/assets";

import "./Logo.scss";

export const Logo = () => {
  return (
    <div className="Logo">
      <img src={LogoSrc} alt="app logo" />
    </div>
  );
};
