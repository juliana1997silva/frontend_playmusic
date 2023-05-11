import React from "react";
import {
  BreadcrumbItem,
  Container,
  ContainerBreadcrumb,
  ContainerMain,
  Form,
  FormControl,
  FormControlText,
  FormLabel,
  Link,
  Nav,
  Section,
  TitlePage,
  Button,
} from "./styles";

const BranchCreate: React.FC = () => {
  return (
    <>
      <ContainerMain id="main" className="main">
        <Container style={{ padding: 30 }} />
        <Container className="pagetitle">
          <TitlePage>Cadastro de Filial </TitlePage>
          <Nav>
            <ContainerBreadcrumb className="breadcrumb">
              <BreadcrumbItem className="breadcrumb-item">
                <Link href="/dasboard">Dashboard</Link>
              </BreadcrumbItem>

              <BreadcrumbItem className="breadcrumb-item active">
                Cadastro Filial
              </BreadcrumbItem>
            </ContainerBreadcrumb>
          </Nav>
        </Container>
        <Container style={{ padding: 10 }} />
        <Section className="section">
          <Container className="row">
            <Container className="col-lg-6">
              <Container className="card p-3">
                <Container className="card-body">
                  <Form className="row g-3">
                    <Container className="col-12 ">
                      <FormLabel className="form-label">
                        Nome do Estabelecimento
                      </FormLabel>
                      <Container className="col-sm-10">
                        <FormControl
                          type="text"
                          className="form-control"
                          name="name"
                        />
                      </Container>
                    </Container>
                    <Container className="col-12 ">
                      <FormLabel className="form-label">Descrição</FormLabel>
                      <Container className="col-sm-10">
                        <FormControlText
                          className="form-control"
                          name="description"
                        />
                      </Container>
                    </Container>
                    <Container className="text-center">
                      <Button type="submit" className="btn btn-primary">
                        Salvar
                      </Button>

                      <Button
                        type="reset"
                        className="btn btn-secondary"
                        style={{ marginLeft: 10 }}
                      >
                        Limpar
                      </Button>
                    </Container>
                  </Form>
                </Container>
              </Container>
            </Container>
          </Container>
        </Section>
      </ContainerMain>
    </>
  );
};

export default BranchCreate;
