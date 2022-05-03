import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';
import Initiative from './routes/initiative/Initiative';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar bg="dark" variant="dark">
          <Container>
          <LinkContainer to="/">
              <Navbar.Brand>
                Taylor's Web Sight
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Utilities" id="basic-nav-dropdown">
                <LinkContainer to="initiative">
                  <NavDropdown.Item>Initiative</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
          <Routes>
            <Route path="/" element={
              <>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <Link
                  className="App-link"
                  to="initiative"
                >
                  Go To Initiative
                </Link>
              </>
            }/>
            <Route path="initiative" element={<Initiative/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
