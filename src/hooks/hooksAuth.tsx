import React, { createContext, useContext } from "react";
//import { toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import { IProps } from "../types";

interface HooksAuthData {}

const AuthContext = createContext<HooksAuthData>({} as HooksAuthData);

const AuthContextProvider: React.FC<IProps> = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

function useAuth(): HooksAuthData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a useAuth");
  }
  return context;
}

export { AuthContextProvider, useAuth };
