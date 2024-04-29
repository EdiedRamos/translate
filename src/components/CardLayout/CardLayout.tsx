import React from "react";

import "./CardLayout.scss";

type CardLayoutProps = {
  children: React.ReactNode;
};

export const CardLayout = ({ children }: CardLayoutProps) => {
  return <div className="card-layout">{children}</div>;
};
