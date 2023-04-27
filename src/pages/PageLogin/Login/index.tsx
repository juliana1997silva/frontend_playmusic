import React, { useCallback, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useAuth } from "../../../hooks/hooksAuth";
import Dashboard from "../../PageDashboard";
import { Navigate } from "react-router";

const Login: React.FC = () => {
  const {} = useAuth();
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0 d-flex align-items-center">
          <MDBCol md="4">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
              alt="phone"
              className="rounded-t-5 rounded-tr-lg-0"
              fluid
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody>
              <MDBInput
                wrapperClass="mb-3"
                label="Usuario"
                id="form1"
                type="text"
              />
              <MDBInput
                wrapperClass="mb-3"
                label="Senha"
                id="form2"
                type="password"
              />

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Lembre-me"
                />
                <a href="!#">Esqueceu a senha ?</a>
              </div>

              <MDBBtn
                className="mb-4 w-100"
                onClick={() => setShowDashboard(true)}
              >
                Entrar
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};
export default Login;
