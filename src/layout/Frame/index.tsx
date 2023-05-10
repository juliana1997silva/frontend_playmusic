import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ContainerList,
  Icon,
  Link,
  NavItem,
  Text,
  ContainerSideBar,
} from "./styles";
import { useAuth } from "../../hooks/hooksAuth";

const Frame: React.FC = () => {
  const { expanded } = useAuth();
  const navegate = useNavigate();
  useEffect(() => {
    console.log("expanded::", expanded);
  });
  return (
    <>
      <ContainerSideBar
        id="sidebar"
        className={`sidebar ${expanded ? "collapse" : ""} navbar-collapse`}
        //`sidebar ${expanded ? "collapse" : ""} navbar-collapse`
      >
        <ContainerList className="sidebar-nav" id="sidebar-nav">
          <NavItem className="nav-item">
            <Link className="nav-link" data-bs-toggle="collapse" href="">
              <Icon className="bi bi-menu-button-wide" />
              <Text>Dashboard</Text>
            </Link>
          </NavItem>

          <NavItem className="nav-item">
            <Link className="nav-link " href="#">
              <Icon className="bi bi-file-earmark" />
              <Text>Cadastro de Filial</Text>
            </Link>
          </NavItem>
        </ContainerList>
      </ContainerSideBar>
    </>
  );
};
export default Frame;
