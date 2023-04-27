import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Content, Footer, Header, Sidebar } from "rsuite";
import ComponentHeader from "../Header";
import Frame from "../Frame";

const Master: React.FC = () => {
  return (
    <div className="show-container">
      <Container>
        <Header>
          <ComponentHeader />
        </Header>
        <Container>
          <Frame />
          <Content>
            <Outlet />
          </Content>
        </Container>
        <Footer></Footer>
      </Container>
    </div>
  );
};
export default Master;
