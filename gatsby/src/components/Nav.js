import React, { useState, useLayoutEffect, useCallback } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  max-width: var(--sectionWidth);
  padding: clamp(1rem, 4vh, 3rem) var(--contentPadding);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  left: 50%;
  transform: translate(-50%, 0);
  background: transparent;
  transition: all 0.32s ease-out;

  & > * {
    flex: 1 1 50%;
  }

  &.scrolled {
    background: var(--white);

    a {
      color: var(--black);
    }
  }
`;

const StyledLogo = styled(Link)`
  font-size: 1rem;
`;

const StyledLinks = styled.div`
  /* background-color: ${({ isOpen }) => (isOpen ? 'red' : 'black')}; */
  /* display: none; */

  justify-content: flex-end;
  gap: 1rem;
  padding-left: var(--contentPadding);

  a {
    color: var(--black);
    font-size: 1rem;
  }

  @media (min-width: 700px) {
    position
    display: flex;
  }

  @media (min-width: 960px) {
    a {
      color: var(--white);
    }
  }
`;

const StyledMenuIcon = styled.div`
  display: flex;
  flex: 0 0 2.5rem;
  padding: 0.5rem;
  height: 2rem;
  justify-content: space-around;
  flex-flow: column nowrap;
  align-self: center;

  span {
    width: 100%;
    height: 2px;
    background-color: var(--black);
  }

  @media (min-width: 700px) {
    display: none;
  }
`;

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setIsScrolled(position);
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   if (isOpen) {

  //   } else {

  //   }
  // }, [isOpen]);

  // const toggleMenu = useCallback(() => {
  //   setIsOpened(!isOpened);
  //   setToggleScrollLock(!toggleScrollLock);
  // }, [isOpened, toggleScrollLock]);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <StyledNav className={isScrolled ? 'scrolled' : 'not-scrolled'}>
      <StyledLogo to="/" className="bold">
        holios
      </StyledLogo>
      <StyledLinks isOpen={isOpen}>
        <Link to="/massage">massage.</Link>
        <Link to="/coaching">coaching.</Link>
        <Link to="/cursussen">cursussen.</Link>
        <Link to="/about">about.</Link>
        <Link to="/contact">contact.</Link>
      </StyledLinks>
      <StyledMenuIcon onClick={toggleMenu}>
        <span />
        <span />
      </StyledMenuIcon>
    </StyledNav>
  );
}
