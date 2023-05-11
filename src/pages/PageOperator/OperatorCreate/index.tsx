import React, { useState, useEffect } from "react";
import {
  BreadcrumbItem,
  Container,
  ContainerBreadcrumb,
  ContainerMain,
  FormHTML,
  FormControl,
  FormLabel,
  Link,
  Nav,
  Section,
  TitlePage,
  Button,
} from "./styles";
import Select from "react-select";

const OperatorCreate: React.FC = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <>
      <ContainerMain id="main" className="main">
        <Container style={{ padding: 30 }} />
        <Container className="pagetitle">
          <TitlePage>Cadastro de Operadores </TitlePage>
          <Nav>
            <ContainerBreadcrumb className="breadcrumb">
              <BreadcrumbItem className="breadcrumb-item">
                <Link href="/dasboard">Dashboard</Link>
              </BreadcrumbItem>

              <BreadcrumbItem className="breadcrumb-item active">
                Cadastro Clientes
              </BreadcrumbItem>
            </ContainerBreadcrumb>
          </Nav>
        </Container>
        <Container style={{ padding: 10 }} />
        <Section className="section">
          <Container className="row">
            <Container className="col-lg-8">
              <Container className="card p-3">
                <Container className="card-body">
                  <FormHTML className="row g-3">
                    <Container className="col-12 ">
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
                      <FormLabel className="form-label">Praça:</FormLabel>
                      <Container className="col-sm-12">
                        <Select
                          isMulti
                          className="basic-multi-select"
                          classNamePrefix="select"
                          options={options}
                          placeholder="Selecione"
                          onChange={(e) => console.log(e)}
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

export default OperatorCreate;
