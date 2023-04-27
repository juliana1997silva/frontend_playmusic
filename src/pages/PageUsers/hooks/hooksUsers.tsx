import React, { createContext, useContext, useState } from "react";
//import { toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import { IProps } from "../../../types";

interface HooksUsersData {
  ju: string;
  setJu(ju: string): void;
}

const UsersContext = createContext<HooksUsersData>({} as HooksUsersData);

const UsersContextProvider: React.FC<IProps> = ({ children }) => {
  const [ju, setJu] = useState("juliana");

  return (
    <UsersContext.Provider
      value={{
        ju,
        setJu,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

function useUsers(): HooksUsersData {
  const context = useContext(UsersContext);

  if (!context) {
    throw new Error("useUsers must be used within a useUsers");
  }
  return context;
}

export { UsersContextProvider, useUsers };
