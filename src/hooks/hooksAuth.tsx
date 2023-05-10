import React, { createContext, useContext, useState } from "react";
//import { toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import { IProps } from "../types";
import { useSearch } from "rsuite/esm/Picker";

interface HooksAuthData {
  expanded: boolean;
  setExpanded(expanded: boolean): void;
}

const AuthContext = createContext<HooksAuthData>({} as HooksAuthData);

const AuthContextProvider: React.FC<IProps> = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        expanded,
        setExpanded,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): HooksAuthData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a useAuth");
  }
  return context;
}

export { AuthContextProvider, useAuth };
