import React, { useEffect } from "react";
import { useAuth } from "../../hooks/hooksAuth";
import {
  ContainerNavItem,
  Icon,
  Item,
  Link,
  NavItem,
  SideBarContainer,
} from "./styles";

const Frame: React.FC = () => {
  const { expanded } = useAuth();
  useEffect(() => {
    console.log("expanded::", expanded);
  });
  return (
    <>
      <SideBarContainer
        id="sidebar"
        className={`sidebar ${expanded ? "collapse" : ""} navbar-collapse`}
      >
        <ContainerNavItem className="sidebar-nav" id="sidebar-nav">
          <NavItem className="nav-item">
            <Link className="nav-link collapsed" href="index.html">
              <Icon className="bi bi-grid" />
              <Item>Dashboard</Item>
            </Link>
          </NavItem>

          {/*  <NavItem className="nav-heading">CADASTROS</NavItem> */}

          <NavItem className="nav-item">
            <Link className="nav-link collapsed" href="/branch-create">
              <Icon className="bi bi-person" />
              <Item>Cadastro de Filial</Item>
            </Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link className="nav-link collapsed" href="/customers">
              <Icon className="bi bi-person" />
              <Item>Cadastro de Clientes</Item>
            </Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link className="nav-link collapsed" href="/operator">
              <Icon className="bi bi-person" />
              <Item>Cadastro de Operadores</Item>
            </Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link className="nav-link collapsed" href="/users">
              <Icon className="bi bi-person" />
              <Item>Usuarios</Item>
            </Link>
          </NavItem>
        </ContainerNavItem>
      </SideBarContainer>
    </>
  );
};
export default Frame;
