import React from "react";
import UsersCreate from "./UsersCreate";
import AppProvider from "./hooks";
import { useAuth } from "../../hooks/hooksAuth";
import UsersList from "./UsersList";

const PageUsers: React.FC = () => {
  return (
    <>
      <AppProvider>
        <UsersCreate />
      </AppProvider>
    </>
  );
};
export default PageUsers;
