import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Anime from 'react-anime';
import {
  Navbar as N,
  Nav,
  Container as C,
  NavDropdown as D,
} from 'react-bootstrap';
import { PrimaryColor, DarkPurple } from '../theme/resource';
import logo from '../resource/logo_w_h.svg';
import logoV from '../resource/logo_w_v.svg';
import { Link, useLocation } from 'react-router-dom';

export default function NaviBar() {
  const [width, setWidth] = useState(window.innerWidth);
  const [clicked, setClicked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const location = window.location.pathname;
  const location2 = useLocation();

  useEffect(() => {
    handleClick();
  }, [location2.pathname]);

  const switchLogo = () => {
    if (width < 395) {
      return logoV;
    } else return logo;
  };
  let state = [];

  const handleClick = () => {
    switch (location2.pathname) {
      case '/overview':
        state = [false, true, false, false, false, false];
        break;
      case '/assessment':
        state = [false, false, true, false, false, false];

        break;
      case '/mild':
        state = [false, false, false, true, true, false];
        break;
      case '/severe':
        state = [false, false, false, true, true, false];
        break;
      case '/tools':
        state = [false, false, false, false, false, true];
        break;
      case '/help':
        state = [false, false, false, false, false, true];
        break;
      case '/reference':
        state = [false, false, false, false, false, true];
        break;
      default:
        state = [false, false, false, false, false, false];
        break;
    }
    setClicked(state);
    console.log(state);
    console.log(clicked);
    console.log(location2);
  };

  return (
    <Container>
      <Navbar expand="md" variant="dark">
        <Navbar.Brand href="#home">
          <IMG
            src={switchLogo()}
            height="50"
            className="logo_nav"
            alt="camh logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbar_collaps">
          <Nav className="navbar_core">
            <NavLink
              clicked={clicked[0]}
              onClick={handleClick}
              as="div"
              className="nav-link"
            >
              <Link to="/">Home</Link>
            </NavLink>

            <NavLink
              clicked={clicked[1]}
              onClick={handleClick}
              as="div"
              className="nav-link"
            >
              <Link to="/overview">Overview</Link>
            </NavLink>
            <NavLink
              clicked={clicked[2]}
              onClick={handleClick}
              as="div"
              className="nav-link"
            >
              <Link to="/assessment">Assessment</Link>
            </NavLink>
            <NavDropdown
              title="Treatment"
              id="navbar_dropdown"
              clicked={clicked[3] || clicked[4]}
            >
              <NavDropdown.Item
                as="div"
                className="nav-link"
                onClick={handleClick}
              >
                <Link to="/mild">Mild Depression</Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                as="div"
                className="nav-link"
                onClick={handleClick}
              >
                <Link to="/severe">Moderate/Severe Depression</Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Resources"
              id="navbar_dropdown"
              clicked={clicked[5]}
            >
              <NavDropdown.Item
                as="div"
                className="nav-link"
                onClick={handleClick}
              >
                <Link to="/tools">Tools</Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                as="div"
                className="nav-link"
                onClick={handleClick}
              >
                <Link to="/help">Local Help</Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                as="div"
                className="nav-link"
                onClick={handleClick}
              >
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
  ${({ clicked }) =>
    clicked
      ? ` background-color: #4a1961;
  padding: 7px 3px;
  border-radius: 10px;
  
  
  `
      : ``}
`;

const NavDropdown = styled(D)`
  ${({ clicked }) =>
    clicked
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
