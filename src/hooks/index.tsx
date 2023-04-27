import React from "react";
import { IProps } from "../types";

const AppProvider: React.FC<IProps> = ({ children }) => {
  return <>{children}</>;
};
export default AppProvider;
