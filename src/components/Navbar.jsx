import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';

import Logo from '../assets/logo.png';
import styled from 'styled-components';
const navLinks = ['Home', 'Pricing', 'FAQ', 'Contact'];
const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const handleClick = () => setShowMenu((prevMenu) => !prevMenu);
  return (
    <HeaderContainer>
      <NavbarContainer>
        <LogoContainer>
          <Link to="/">
            <img src={Logo} alt="company logo" />
          </Link>
        </LogoContainer>
        <NavMenu className={showMenu ? 'active' : ''}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink className={'nav-links'} to={`${link.toLowerCase()}`}>
                {link}
              </NavLink>
            </li>
          ))}
        </NavMenu>

        <NavBarSmallScreen>
          <FaBars size={28} className="overlay-on" onClick={handleClick} />

          {showMenu && (
            <NavBarSmallScreenOverlay className="slide-in-top flex__center">
              <FaTimes
                size={28}
                onClick={handleClick}
                className="overlay-close"
              />

              <NavBarLinksSS>
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      className={'nav-links'}
                      to={`${link.toLowerCase()}`}
                    >
                      {link}
                    </NavLink>
                  </li>
                ))}
              </NavBarLinksSS>
            </NavBarSmallScreenOverlay>
          )}
        </NavBarSmallScreen>
      </NavbarContainer>
    </HeaderContainer>
  );
};

export default Navbar;

const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  background-color: var(--darkgrey);
`;
const NavbarContainer = styled.nav`
  max-width: 1240px;
  height: 100%;
  padding: 0 1rem;
  margin: auto;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 80px;
    height: auto;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: start;

  li {
    padding: 0 1.5rem;

    .nav-links {
      color: #fff;
      transition: all 0.3s ease;
      font-size: 1.2rem;

      &:hover {
        color: var(--primary);
      }
    }
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const NavBarSmallScreen = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
  }
`;

const NavBarSmallScreenOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background: var(--darkgrey);

  /* z-index: 5; */
  transition: all 0.5s ease;
`;

const NavBarLinksSS = styled.ul`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;

  margin-top: 30%;
  li {
    margin: 2rem;
    cursor: pointer;

    font-size: 2rem;
    text-align: center;

    .nav-links {
      color: var(--lightgray2);
      transition: all 0.3s ease;

      &:hover {
        color: var(--primary);
      }
    }
  }
`;
