import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar, Sidenav, Nav } from "rsuite";
import DashboardIcon from "@rsuite/icons/Dashboard";
import TaskIcon from "@rsuite/icons/Task";
import CheckOutlineIcon from "@rsuite/icons/CheckOutline";
import DocPassIcon from "@rsuite/icons/DocPass";
import UserInfoIcon from "@rsuite/icons/UserInfo";

const Frame: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const navegate = useNavigate();
  return (
    <>
      <div>
        <Sidebar
          style={{ display: "flex", flexDirection: "column" }}
          width={expanded ? 260 : 56}
          collapsible
        >
          <Sidenav expanded={expanded}>
            <Sidenav.Body>
              <Nav>
                <Nav.Item
                  eventKey="1"
                  icon={<DashboardIcon />}
                  onSelect={() => navegate("/dashboard")}
                >
                  Dashboard
                </Nav.Item>
                <Nav.Menu
                  eventKey="2"
                  title="Gestão de Usuarios"
                  icon={<UserInfoIcon />}
                >
                  <Nav.Item
                    eventKey="2-1"
                    onSelect={() => navegate("/users-create")}
                  >
                    Criar Usuarios
                  </Nav.Item>
                  <Nav.Item eventKey="2-2">Listar Usuarios</Nav.Item>
                </Nav.Menu>
              </Nav>
            </Sidenav.Body>
            <Sidenav.Toggle
              expanded={expanded}
              onToggle={(expanded) => setExpanded(expanded)}
            />
          </Sidenav>
        </Sidebar>
      </div>
    </>
  );
};
export default Frame;
