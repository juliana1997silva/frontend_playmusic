import React from "react";
import { IProps } from "../types";
import { AuthContextProvider } from "./hooksAuth";

const AppProvider: React.FC<IProps> = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};
export default AppProvider;
