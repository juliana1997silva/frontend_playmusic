import React from "react";
import {
  ContainerHeader,
  Button,
  Container,
  ContainerList,
  Description,
  Divider,
  Form,
  Icon,
  Image,
  Input,
  Link,
  NameProfile,
  Nav,
  NavItem,
  Text,
  Title,
} from "./styles";
import { useNavigate } from "react-router-dom";
import PhotoPerfil from "../../assets/image/profile-img.jpg";
import { useAuth } from "../../hooks/hooksAuth";

const Header: React.FC = () => {
  const navegate = useNavigate();
  const { setExpanded, expanded } = useAuth();
  return (
    <>
      {/* Header */}
      <ContainerHeader
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <Container className="d-flex align-items-center justify-content-between">
          <Icon
            className="bi bi-list toggle-sidebar-btn"
            onClick={() => setExpanded(!expanded)}
            //data-toggle="collapse"
            //data-target="#sidebar"
            //aria-controls="sidebar"
            aria-expanded={expanded ? true : false}
            //aria-label="Toggle navigation"
          />
          <Link href="" className="logo d-flex align-items-center">
            <Image src="assets/img/logo.png" alt="" />
            <Text className="d-none d-lg-block">Play Music</Text>
          </Link>
        </Container>

        <Nav className="header-nav ms-auto">
          <ContainerList className="d-flex align-items-center">
            <NavItem className="nav-item d-block d-lg-none">
              <Link className="nav-link nav-icon search-bar-toggle " href="">
                <Icon className="bi bi-search" />
              </Link>
            </NavItem>

            <NavItem className="nav-item dropdown">
              <Link
                className="nav-link nav-icon"
                href="#"
                data-bs-toggle="dropdown"
              >
                <Icon className="bi bi-bell" />
                <Text className="badge bg-primary badge-number">2</Text>
              </Link>

              <ContainerList className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <NavItem className="dropdown-header">
                  Você tem 2 novas notificações
                  <Link href="">
                    <Text className="badge rounded-pill bg-primary p-2 ms-2">
                      Ver Todas
                    </Text>
                  </Link>
                </NavItem>
                <NavItem>
                  <Divider className="dropdown-divider" />
                </NavItem>

                <NavItem className="notification-item">
                  <Icon className="bi bi-exclamation-circle text-warning" />
                  <Container>
                    <Title>Notificação 001</Title>
                    <Description>Descricao da Notificação</Description>
                    <Description>Data da notificação</Description>
                  </Container>
                </NavItem>
                <NavItem>
                  <Divider className="dropdown-divider" />
                </NavItem>
                <NavItem className="notification-item">
                  <Icon className="bi bi-exclamation-circle text-warning" />
                  <Container>
                    <Title>Notificação 002</Title>
                    <Description>Descricao da Notificação</Description>
                    <Description>Data da notificação</Description>
                  </Container>
                </NavItem>
              </ContainerList>
            </NavItem>

            <NavItem className="nav-item dropdown pe-3">
              <Link
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <Image
                  src={PhotoPerfil}
                  alt="Foto Perfil"
                  className="rounded-circle"
                />
                <Text className="d-none d-md-block dropdown-toggle ps-2">
                  Nome (Operador / Gestor)
                </Text>
              </Link>

              <ContainerList className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <NavItem className="dropdown-header">
                  <NameProfile>Nome (Operador / Gestor) </NameProfile>
                  <Text>Operador / Gestor</Text>
                </NavItem>
                <NavItem>
                  <Divider className="dropdown-divider" />
                </NavItem>

                <NavItem>
                  <Link
                    className="dropdown-item d-flex align-items-center"
                    href=""
                  >
                    <Icon className="bi bi-person" />
                    <Text>Meu Perfil</Text>
                  </Link>
                </NavItem>
                <NavItem>
                  <Divider className="dropdown-divider" />
                </NavItem>

                <NavItem>
                  <Link
                    className="dropdown-item d-flex align-items-center"
                    href=""
                  >
                    <Icon className="bi bi-gear" />
                    <Text>Configurações</Text>
                  </Link>
                </NavItem>
                <NavItem>
                  <Divider className="dropdown-divider" />
                </NavItem>

                <NavItem>
                  <Link
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <Icon className="bi bi-box-arrow-right" />
                    <Text>Sair</Text>
                  </Link>
                </NavItem>
              </ContainerList>
            </NavItem>
          </ContainerList>
        </Nav>
      </ContainerHeader>
    </>
  );
};

export default Header;
