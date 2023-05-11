import React, { useCallback, useEffect, useState } from "react";
import {
  BodyTable,
  BreadcrumbItem,
  Columns,
  ColumsContainer,
  Container,
  ContainerBreadcrumb,
  ContainerMain,
  ContainerTable,
  Icon,
  IconAtivo,
  IconInativo,
  Link,
  Nav,
  Section,
  Status,
  Table,
  TableItem,
  TitlePage,
} from "./styles";
import Button from "react-bootstrap/Button";
import CustomersCreate from "../CustomersCreate";

const CustomersList: React.FC = () => {
  const [showNewCustomers, setShowNewCustomers] = useState(false);
  const ListUsers = [
    {
      name: "Juliana Silva",
      filial: "Filial 002",
      type: "Gestor",
      status: 0, // 0 é inativo e 1 é ativo
    },
    {
      name: "Juliana Silva",
      filial: "Filial 002",
      type: "Operador",
      status: 1, // 0 é inativo e 1 é ativo
    },
    {
      name: "Juliana Silva",
      filial: "Filial 002",
      type: "Gestor",
      status: 1, // 0 é inativo e 1 é ativo
    },
    {
      name: "Juliana Silva",
      filial: "Filial 002",
      type: "Gestor",
      status: 0, // 0 é inativo e 1 é ativo
    },
  ];

  const handleNewCustomers = useCallback(() => {
    setShowNewCustomers(true);
  }, [setShowNewCustomers]);

  if (showNewCustomers) {
    return <CustomersCreate />;
  }

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
          <Container className="row col-12 justify-content-end">
            <Button
              type="button"
              className="btn btn-success row col-2"
              onClick={handleNewCustomers}
            >
              Novo Cliente
            </Button>
          </Container>
          <br />

          <Container className="row">
            <Container className="col-lg-12">
              <Container className="card p-3">
                <Container className="card-body">
                  <Table className="table datatable">
                    <ColumsContainer>
                      <ContainerTable>
                        <Columns scope="col">Nome</Columns>
                        <Columns scope="col">Filial</Columns>
                        <Columns scope="col">Tipo de Usuario</Columns>
                        <Columns scope="col">Status</Columns>
                        <Columns scope="col">Ações</Columns>
                      </ContainerTable>
                    </ColumsContainer>
                    <BodyTable>
                      {ListUsers.map((item) => (
                        <ContainerTable>
                          <TableItem scope="row">{item.name}</TableItem>
                          <TableItem>{item.filial}</TableItem>
                          <TableItem>{item.type}</TableItem>
                          <TableItem>
                            <Container>
                              {item.status === 0 ? (
                                <>
                                  <IconInativo className="bi bi-circle-fill" />

                                  <Status> Inativo</Status>
                                </>
                              ) : (
                                <>
                                  <IconAtivo className="bi bi-circle-fill" />
                                  <Status> Ativo</Status>
                                </>
                              )}
                            </Container>
                          </TableItem>
                          <TableItem>
                            <Container
                              className="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <Button
                                type="button"
                                className="btn btn-warning"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Editar Usuario"
                              >
                                <Icon className="ri-edit-box-line" />
                              </Button>
                              {item.status === 0 ? (
                                <Button
                                  type="button"
                                  className="btn btn-success"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="left"
                                  title="Ativar Usuario"
                                >
                                  <Icon className="bi bi-check2-circle" />
                                </Button>
                              ) : (
                                <Button
                                  type="button"
                                  className="btn btn-danger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="left"
                                  title="Bloquear Usuario"
                                >
                                  <Icon className="bi bi-x-square" />
                                </Button>
                              )}
                            </Container>
                          </TableItem>
                        </ContainerTable>
                      ))}
                    </BodyTable>
                  </Table>
                </Container>
              </Container>
            </Container>
          </Container>
        </Section>
      </ContainerMain>
    </>
  );
};
export default CustomersList;
