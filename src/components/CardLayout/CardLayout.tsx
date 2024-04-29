import React from "react";

import "./CardLayout.scss";

type CardLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export const CardLayout = ({ children, className = "" }: CardLayoutProps) => {
  return <div className={`card-layout ${className}`}>{children}</div>;
};
