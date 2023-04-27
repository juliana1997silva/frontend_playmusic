import React from "react";
import UsersCreate from "./UsersCreate";
import AppProvider from "./hooks";

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
