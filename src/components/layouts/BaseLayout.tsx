import React, { ReactNode } from "react";

interface IBaseLayout {
  children: ReactNode;
}
const BaseLayout: React.FC<IBaseLayout> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default BaseLayout;
