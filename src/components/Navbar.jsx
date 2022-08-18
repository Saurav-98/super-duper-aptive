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
            <li>
              <NavLink className={'nav-links'} to={`${link.toLowerCase()}`}>
                {link}
              </NavLink>
            </li>
          ))}
        </NavMenu>
        <Hamburger onClick={handleClick}>
          {showMenu ? (
            <FaTimes size={28} style={{ color: '#fff' }} />
          ) : (
            <FaBars size={28} style={{ color: '#fff' }} />
          )}
        </Hamburger>
        <MobileMenu className={showMenu ? 'active' : ''}>
          {navLinks.map((link, index) => (
            <li>
              <NavLink className={'nav-links'} to={`${link.toLowerCase()}`}>
                {link}
              </NavLink>
            </li>
          ))}
        </MobileMenu>
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
    }
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  display: none;
  position: absolute;
  top: 2rem;
  right: 3rem;
  cursor: pointer;
  z-index: 4;

  @media screen and (max-width: 960px) {
    display: flex;
  }
`;

const MobileMenu = styled.ul`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: var(--darkgrey);
  z-index: 2;
  text-align: center;
  transition: all 0.4s ease;
  justify-content: center;
  align-items: center;
  top: -100%;

  li {
    margin: 1.5rem 0;
    font-size: 24px;
    .nav-links {
      color: var(--lightgrey);
    }
  }
`;
