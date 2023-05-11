import React from "react";
import {
  BreadcrumbItem,
  Container,
  ContainerBreadcrumb,
  ContainerMain,
  Form,
  FormControl,
  FormLabel,
  Link,
  Nav,
  Section,
  TitlePage,
  Button,
} from "./styles";
import Select from "react-select";

const CustomersCreate: React.FC = () => {
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
          <TitlePage>Cadastro de Clientes </TitlePage>
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
                  <Form className="row g-3">
                    <Container className="col-6 ">
                      <FormLabel className="form-label">
                        Data de Cadastro:
                      </FormLabel>
                      <Container className="col-sm-12">
                        <FormControl
                          type="date"
                          className="form-control"
                          name="date_create"
                        />
                      </Container>
                    </Container>
                    <Container className="col-6 ">
                      <FormLabel className="form-label">
                        Data de Inativação
                      </FormLabel>
                      <Container className="col-sm-12">
                        <FormControl
                          type="date"
                          className="form-control"
                          name="date_inative"
                        />
                      </Container>
                    </Container>
                    <Container className="col-12 ">
                      <FormLabel className="form-label">
                        Nome do Estabelecimento:
                      </FormLabel>
                      <Container className="col-sm-12">
                        <FormControl
                          type="text"
                          className="form-control"
                          name="name"
                        />
                      </Container>
                    </Container>
                    <Container className="col-6 ">
                      <FormLabel className="form-label">
                        Nº Documento:
                      </FormLabel>
                      <Container className="col-sm-12">
                        <FormControl
                          type="text"
                          className="form-control"
                          name="document"
                          placeholder="RG / CPF ou CNPJ"
                        />
                      </Container>
                    </Container>
                    <Container className="col-6 ">
                      <FormLabel className="form-label">Filial</FormLabel>
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
                    <Container className="col-6 ">
                      <FormLabel className="form-label">
                        Telefone (Principal):
                      </FormLabel>
                      <Container className="col-sm-12">
                        <FormControl
                          type="text"
                          className="form-control"
                          name="phone"
                          placeholder="Principal"
                        />
                      </Container>
                    </Container>
                    <Container className="col-6 ">
                      <FormLabel className="form-label">
                        Telefone (Secundario):
                      </FormLabel>
                      <Container className="col-sm-12">
                        <FormControl
                          type="text"
                          className="form-control"
                          name="phone"
                          placeholder="Secundario"
                        />
                      </Container>
                    </Container>
                    <Container className="col-9 ">
                      <FormLabel className="form-label">Logradouro:</FormLabel>
                      <Container className="col-sm-12">
                        <FormControl
                          type="text"
                          className="form-control"
                          name="logradouro"
                          required
                        />
                      </Container>
                    </Container>
                    <Container className="col-3 ">
                      <FormLabel className="form-label">Numero:</FormLabel>
                      <Container className="col-sm-12">
                        <FormControl
                          type="text"
                          className="form-control"
                          name="number"
                          required
                        />
                      </Container>
                    </Container>
                    <Container className="col-5 ">
                      <FormLabel className="form-label">Bairro:</FormLabel>
                      <Container className="col-sm-12">
                        <FormControl
                          type="text"
                          className="form-control"
                          name="district"
                          required
                        />
                      </Container>
                    </Container>
                    <Container className="col-5 ">
                      <FormLabel className="form-label">Cidade:</FormLabel>
                      <Container className="col-sm-12">
                        <FormControl
                          type="text"
                          className="form-control"
                          name="city"
                          required
                        />
                      </Container>
                    </Container>
                    <Container className="col-2 ">
                      <FormLabel className="form-label">Estado:</FormLabel>
                      <Container className="col-sm-12">
                        <FormControl
                          type="text"
                          className="form-control"
                          name="state"
                          required
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

export default CustomersCreate;
