import React, { useState, useEffect } from "react";
import {
  BreadcrumbItem,
  Container,
  ContainerBreadcrumb,
  ContainerMain,
  Link,
  Nav,
  Section,
  TitlePage,
  Button,
  FormHTML,
  FormLabel,
  FormControl,
} from "./styles";
import Select from "react-select";

const UsersCreate: React.FC = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const optionsType = [
    { value: "gestor", label: "Gestor" },
    { value: "operador", label: "Operador" },
  ];

  return (
    <>
      <ContainerMain id="main" className="main">
        <Container style={{ padding: 30 }} />
        <Container className="pagetitle">
          <TitlePage>Lista de Usuarios</TitlePage>
          <Nav>
            <ContainerBreadcrumb className="breadcrumb">
              <BreadcrumbItem className="breadcrumb-item">
                <Link href="/dasboard">Dashboard</Link>
              </BreadcrumbItem>

              <BreadcrumbItem className="breadcrumb-item active">
                Lista de Usuarios
              </BreadcrumbItem>
            </ContainerBreadcrumb>
          </Nav>
        </Container>
        <Container style={{ padding: 10 }} />
        <Section className="section">
          <Container className="row">
            <Container className="col-lg-12">
              <Container className="card p-3">
                <Container className="card-body">
                  <FormHTML className="row g-3">
                    <Container className="col-6 ">
                      <FormLabel className="form-label">Nome:</FormLabel>
                      <Container className="col-sm-12">
                        <FormControl
                          type="text"
                          className="form-control"
                          name="name"
                        />
                      </Container>
                    </Container>
                    <Container className="col-6 ">
                      <FormLabel className="form-label">Apelido:</FormLabel>
                      <Container className="col-sm-12">
                        <FormControl
                          type="text"
                          className="form-control"
                          name="apelido"
                        />
                      </Container>
                    </Container>
                    <Container className="col-6 ">
                      <FormLabel className="form-label">Filial:</FormLabel>
                      <Container className="col-sm-12">
                        <Select
                          className="basic-multi-select"
                          options={options}
                          placeholder="Selecione"
                          onChange={(e) => console.log(e)}
                          name="filial"
                        />
                      </Container>
                    </Container>
                    <Container className="col-6 ">
                      <FormLabel className="form-label">
                        Tipo de Usuario:
                      </FormLabel>
                      <Container className="col-sm-12">
                        <Select
                          className="basic-multi-select"
                          options={optionsType}
                          placeholder="Selecione"
                          onChange={(e) => console.log(e)}
                          name="filial"
                        />
                      </Container>
                    </Container>
                    <Container className="col-12 ">
                      <FormLabel className="form-label">Senha:</FormLabel>
                      <Container className="col-sm-6">
                        <FormControl
                          type="password"
                          className="form-control"
                          name="password"
                        />
                      </Container>
                    </Container>
                    <Container className="col-12 ">
                      <FormLabel className="form-label">
                        Confirmar Senha:
                      </FormLabel>
                      <Container className="col-sm-6">
                        <FormControl
                          type="password"
                          className="form-control"
                          name="confirmation_password"
                        />
                      </Container>
                    </Container>
                    <Container style={{ padding: 10 }} />
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
                  </FormHTML>
                </Container>
              </Container>
            </Container>
          </Container>
        </Section>
      </ContainerMain>
    </>
  );
};
export default UsersCreate;
