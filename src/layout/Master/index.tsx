import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Content, Footer, Header } from "rsuite";
import ComponentHeader from "../Header";
import Frame from "../Frame";
import { useAuth } from "../../hooks/hooksAuth";

const Master: React.FC = () => {
  const { expanded } = useAuth();
  return (
    <div className="show-container">
      <Container>
        <Header>
          <ComponentHeader />
        </Header>
        <Container className="row col-12 justify-content-end">
          <Frame />
          <Content
            className={`row ${
              expanded ? "col-12" : "col-9"
            } justify-content-end`}
          >
            <Outlet />
          </Content>
        </Container>
        <Footer></Footer>
      </Container>
    </div>
  );
};
export default Master;
