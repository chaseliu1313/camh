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

import { Link, useLocation, useHistory } from 'react-router-dom';

export default function NaviBar() {
  // get the current path
  const location2 = useLocation();
  //customized hook
  const clicked = useNavClicks(location2.pathname);
  const history = useHistory();

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
            <NavLink
              navclicked={clicked[0]}
              as="div"
              className="nav-link"
              style={{ width: '100%', cursor: 'pointer' }}
              onClick={() => {
                history.push('/');
              }}
            >
              <Link to="/">Home</Link>
            </NavLink>
            <NavLink
              navclicked={clicked[1] || clicked[6]}
              as="div"
              className="nav-link"
              style={{ width: '100%', cursor: 'pointer' }}
              onClick={() => {
                history.push('/orientation');
              }}
            >
              <Link to="/orientation">Overview</Link>
            </NavLink>

            <NavLink
              navclicked={clicked[2]}
              as="div"
              className="nav-link"
              style={{ width: '100%', cursor: 'pointer' }}
              onClick={() => {
                history.push('/assessment');
              }}
            >
              <Link to="/assessment">Assessment</Link>
            </NavLink>
            <NavDropdown
              title="Treatment"
              id="navbar_dropdown"
              navclicked={clicked[3] || clicked[4]}
            >
              <NavDropdown.Item
                as="div"
                className="nav-dropdown-item"
                style={{ width: '100%', cursor: 'pointer' }}
                onClick={() => {
                  history.push('/treatment/mild');
                }}
              >
                <Link to="/treatment/mild" style={{ width: '100%' }}>
                  Mild Depression
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                as="div"
                className="nav-dropdown-item"
                style={{ width: '100%', cursor: 'pointer' }}
                onClick={() => {
                  history.push('/treatment/severe');
                }}
              >
                <Link to="/treatment/severe" style={{ width: '100%' }}>
                  Moderate/Severe Depression
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Resources"
              id="navbar_dropdown"
              navclicked={clicked[5]}
            >
              <NavDropdown.Item
                as="div"
                className="nav-dropdown-item"
                style={{ width: '100%', cursor: 'pointer' }}
                onClick={() => {
                  history.push('/resources/tools');
                }}
              >
                <Link to="/resources/tools" style={{ width: '100%' }}>
                  Tools
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                as="div"
                className="nav-dropdown-item"
                style={{ width: '100%', cursor: 'pointer' }}
                onClick={() => {
                  history.push('/resources/help');
                }}
              >
                <Link to="/resources/help" style={{ width: '100%' }}>
                  Local Help
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                as="div"
                className="nav-dropdown-item"
                style={{ width: '100%', cursor: 'pointer' }}
                onClick={() => {
                  history.push('/resources/faq');
                }}
              >
                <Link to="/resources/faq" style={{ width: '100%' }}>
                  FAQ
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                as="div"
                className="nav-dropdown-item"
                style={{ width: '100%', cursor: 'pointer' }}
                onClick={() => {
                  history.push('/resources/crisisLines');
                }}
              >
                <Link to="/resources/crisisLines" style={{ width: '100%' }}>
                  Crisis Lines
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                as="div"
                className="nav-dropdown-item"
                style={{ width: '100%', cursor: 'pointer' }}
                onClick={() => {
                  history.push('/resources/reference');
                }}
              >
                <Link to="/resources/reference" style={{ width: '100%' }}>
                  References
                </Link>
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
  height: 75px;
  margin: 0;
  @media (max-width: 768px) {
    height: auto;
    min-height: 60px;
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
  border-radius: 10px;
  height: 80%;
  
   
   
  `
      : ``}
`;

const NavDropdown = styled(D)`
  ${({ navclicked }) =>
    navclicked === 'true'
      ? ` background-color: #4a1961;
 
  border-radius: 10px;
  height: 80%;
  
  
  `
      : ``}
`;

const Navbar = styled(N)`
  width: 100%;
  background-color: ${PrimaryColor};
  height: 75px;
  
  @media (max-width: 768px) {
    height: 60px;
    
  }
  }
`;
