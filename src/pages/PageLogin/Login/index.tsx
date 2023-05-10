import React, { useState } from "react";
import { Navigate } from "react-router";
import {
  Button,
  Container,
  Form,
  Image,
  Input,
  Label,
  Link,
  Paragraph,
  Section,
  Text,
  Title,
} from "./styles";

const Login: React.FC = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <>
      <Container className="container">
        <Section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <Container className="container">
            <Container className="row justify-content-center">
              <Container className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <Container className="d-flex justify-content-center py-4">
                  <Link
                    href="index.html"
                    className="logo d-flex align-items-center w-auto"
                  >
                    <Image src="assets/img/logo.png" alt="" />
                    <Text className="d-none d-lg-block">PLAY MUSIC</Text>
                  </Link>
                </Container>

                <Container className="card mb-3">
                  <Container className="card-body">
                    <Container className="pt-4 pb-2">
                      <Title className="card-title text-center pb-0 fs-4">
                        Faça o Login
                      </Title>
                      <Paragraph className="text-center small">
                        Digite seu usuario e senha
                      </Paragraph>
                    </Container>

                    <Form className="row g-3 needs-validation">
                      <Container className="col-12">
                        <Label className="form-label">Usuario</Label>
                        <Container className="input-group has-validation">
                          <Text
                            className="input-group-text"
                            id="inputGroupPrepend"
                          >
                            @
                          </Text>
                          <Input
                            type="text"
                            name="username"
                            className="form-control"
                            id="yourUsername"
                            //required
                          />
                          <Container className="invalid-feedback">
                            Por favor, insira seu usuario!
                          </Container>
                        </Container>
                      </Container>

                      <Container className="col-12">
                        <Label className="form-label">Senha</Label>
                        <Input
                          type="password"
                          name="password"
                          className="form-control"
                          id="yourPassword"
                          //required
                        />
                        <Container className="invalid-feedback">
                          Por favor, insira sua senha!
                        </Container>
                      </Container>

                      <Container className="col-12">
                        <Container className="form-check">
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            name="remember"
                            value="true"
                            id="rememberMe"
                          />
                          <Label className="form-check-label">Lembre-me</Label>
                        </Container>
                      </Container>
                      <Container className="col-12">
                        <Button
                          className="btn btn-primary w-100"
                          onClick={() => setShowDashboard(true)}
                        >
                          Entrar
                        </Button>
                      </Container>
                      <Container className="col-12">
                        <Paragraph className="small mb-0">
                          Não tem conta?{" "}
                          <Link href="pages-register.html">Clique Aqui</Link>
                        </Paragraph>
                      </Container>
                    </Form>
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container>
        </Section>
      </Container>

      <a
        href=""
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};
export default Login;
