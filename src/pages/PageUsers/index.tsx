import React from "react";
import AppProvider from "./hooks";
import UsersList from "./UsersList";

const PageUsers: React.FC = () => {
  return (
    <>
      <AppProvider>
        <UsersList />
      </AppProvider>
    </>
  );
};
export default PageUsers;
