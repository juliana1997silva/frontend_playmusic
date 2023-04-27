import React from "react";
import { Container, ContainerLogo, ContainerPerfil } from "./styles";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <ContainerLogo>
          <span>LOGO</span>
        </ContainerLogo>
        <ContainerPerfil>
          <MDBNavbar expand="lg">
            <MDBContainer fluid>
              <MDBNavbarNav>
                <MDBNavbarItem className="ms-auto">
                  <MDBDropdown>
                    <MDBDropdownToggle
                      tag="a"
                      className="nav-link"
                      style={{ color: "#fff" }}
                    >
                      Juliana Silva de Jesus
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem>Meu Perfil</MDBDropdownItem>
                      <MDBDropdownItem>Sair</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBContainer>
          </MDBNavbar>
        </ContainerPerfil>
      </Container>
    </>
  );
};
export default Header;
