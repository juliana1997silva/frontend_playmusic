import React, { useState, useEffect } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Container, ContainerGlobal, Header } from "./styles";
import { Breadcrumb } from "rsuite";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../hooks/hooksUsers";

const UsersCreate: React.FC = () => {
  const navegate = useNavigate();
  const { ju } = useUsers();
  const [name, setName] = useState("");
  const [filial, setFilial] = useState("");
  const [email, setEmail] = useState("");
  const [ocupacao, setOcupacao] = useState("");

  useEffect(() => {
    console.log("name =>", name);
    console.log("filial =>", filial);
    console.log("email =>", email);
    console.log("ocupacao =>", ocupacao);
    console.log("ju =>", ju);
  }, [name, filial, email, ocupacao, ju]);

  return (
    <ContainerGlobal>
      <Header>Criar Usuarios</Header>
      <Breadcrumb>
        <Breadcrumb.Item
          onClick={(e: any) => {
            e.preventDefault();
            navegate("/dashboard");
          }}
        >
          Dashboard
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Gestão de Usuários - Criar Usuários
        </Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <div
          style={{
            width: "48%",
          }}
        >
          <Form>
            <Form.Group>
              <FloatingLabel controlId="name" label="Nome">
                <Form.Control
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <br />
            <Form.Group>
              <FloatingLabel controlId="filial" label="Filial">
                <Form.Control
                  name="filial"
                  onChange={(e) => setFilial(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <br />
            <Form.Group>
              <FloatingLabel controlId="email" label="E-mail">
                <Form.Control
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <br />
            <Form.Group>
              <FloatingLabel controlId="ocupacao" label="Ocupação">
                <Form.Control
                  name="ocupacao"
                  onChange={(e) => setOcupacao(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <div style={{ padding: 20 }} />
            <Form.Group className="d-grid gap-6">
              <Button variant="success" size="lg">
                Salvar
              </Button>
            </Form.Group>
          </Form>
        </div>
        <div
          style={{
            width: "48%",
          }}
        >
          <span>INFORMAÇÕES DA FILIAL QUE FOI ESCOLHIDA</span>
        </div>
      </Container>
    </ContainerGlobal>
  );
};
export default UsersCreate;
