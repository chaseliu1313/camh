import React from 'react';
import styled from 'styled-components';
import { useNavClicks } from '../hooks/useNavClicks';
import { useNavLogo } from '../hooks/useNavLogo';

import {
  Navbar as N,
  Nav,
  Container as C,
  NavDropdown as D,
} from 'react-bootstrap';
import { PrimaryColor } from '../theme/resource';

import { Link, useLocation } from 'react-router-dom';

export default function NaviBar() {
  // get the current path
  const location2 = useLocation();
  //customized hook
  const clicked = useNavClicks(location2.pathname);

  return (
    <Container>
      <Navbar expand="md" variant="dark">
        <Navbar.Brand href="#home">
          <IMG
            src={useNavLogo()}
            height="50"
            className="logo_nav"
            alt="camh logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navication_bar" />
        <Navbar.Collapse id="navbar_collaps">
          <Nav className="navbar_core">
            <NavLink navclicked={clicked[0]} as="div" className="nav-link">
              <Link to="/">Home</Link>
            </NavLink>

            <NavLink navclicked={clicked[1]} as="div" className="nav-link">
              <Link to="/overview">Overview</Link>
            </NavLink>
            <NavLink navclicked={clicked[2]} as="div" className="nav-link">
              <Link to="/assessment">Assessment</Link>
            </NavLink>
            <NavDropdown
              title="Treatment"
              id="navbar_dropdown"
              navclicked={clicked[3] || clicked[4]}
            >
              <NavDropdown.Item as="div" className="nav-link">
                <Link to="/treatment/mild">Mild Depression</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="div" className="nav-link">
                <Link to="/treatment/severe">Moderate/Severe Depression</Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Resources"
              id="navbar_dropdown"
              navclicked={clicked[5]}
            >
              <NavDropdown.Item as="div" className="nav-link">
                <Link to="/tools">Tools</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="div" className="nav-link">
                <Link to="/help">Local Help</Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="div" className="nav-link">
                <Link to="/reference">References</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

const Container = styled(C)`
  width: 100%;
  height: 8vh;
  margin: 0;
  @media (max-width: 768px) {
    height: auto;
    min-height: 8vh;
  }
  top: 0;
  position: fixed;
`;
const IMG = styled.img`
  float: left;
`;

const NavLink = styled(Nav.Link)`
  ${({ navclicked }) =>
    navclicked === 'true'
      ? ` background-color: #4a1961;
  padding: 7px 3px;
  border-radius: 10px;
  
  
  `
      : ``}
`;

const NavDropdown = styled(D)`
  ${({ navclicked }) =>
    navclicked === 'true'
      ? ` background-color: #4a1961;
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  
  
  `
      : ``}
`;

const Navbar = styled(N)`
  width: 100%;
  background-color: ${PrimaryColor};
  height: 8vh;
  
  @media (max-width: 768px) {
    height: auto;
    
  }


  }
`;
