import React from "react";
import { IProps } from "../../../types";
import { UsersContextProvider } from "./hooksUsers";

const AppProvider: React.FC<IProps> = ({ children }) => {
  return <UsersContextProvider>{children}</UsersContextProvider>;
};
export default AppProvider;
