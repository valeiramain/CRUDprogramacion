import { Navbar, Container, Nav, Button } from "react-bootstrap";
// usar NavLink de React-router, NO de bootstrap
import { Navigate, NavLink, useNavigate } from "react-router";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();
  const logout = () => {
    setUsuarioLogueado({});
    navegacion("/");
  };

  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand>
          <b className="text-warning">
            <i className="bi bi-code-slash"></i> CODE
          </b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">
              Inicio
            </NavLink>
            {usuarioLogueado.nombre ? (
              <>
                <NavLink className="nav-link" to="/administrador">
                  Administrador
                </NavLink>
                <Button className="nav-link" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <NavLink className="nav-link" to="/login">
                LogIn
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
