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
  align-items: flex-start;
  z-index: 99;
  left: 50%;
  transform: translate(-50%, 0);
  background: transparent;
  transition: all 0.32s ease-out;

  &.scrolled {
    background: var(--white);

    a {
      color: var(--black);
    }
  }

  @media (min-width: 700px) {
    align-items: center;
    /* transition: none; */
  }
`;

const StyledLogo = styled(Link)`
  font-size: 1rem;
  z-index: 3;
`;

const StyledWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: backdrop-filter 0.5s ease-in-out,
    background-color 0.5s ease-in-out;
  height: ${({ isOpen }) => (isOpen ? '100vh' : '100%')};
  backdrop-filter: ${({ isOpen }) => (isOpen ? 'blur(8px);' : 'none')};
  background-color: ${({ isOpen }) =>
    isOpen ? 'var(--blackTransparent)' : 'transparent'};

  @media (min-width: 700px) {
    position: relative;
    height: 100%;
    background-color: transparent;
    backdrop-filter: none;
  }
`;

const StyledLinks = styled.div`
  padding: var(--contentPadding);
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  place-content: center;
  place-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 92vw;
  gap: 2rem;
  background-color: ${({ isOpen }) => (isOpen ? 'white' : 'transparent')};

  transition: all 0.5s ease-in-out;

  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(0%)' : 'translateY(-100%)'};

  a {
    color: var(--black);
    font-size: 1rem;
  }

  @media (min-width: 700px) {
    transition: none;
    justify-content: flex-end;
    gap: 1rem;
    padding: 0 0 0 var(--contentPadding);
    position: relative;
    height: auto;
    background-color: transparent;
    flex-flow: row nowrap;
    transform: translateY(0);
  }

  @media (min-width: 960px) {
    a {
      color: var(--white);
    }
  }
`;

const StyledMenuIcon = styled.button`
  display: flex;
  flex: 0 0 2.5rem;
  padding: 0.5rem;
  height: 2rem;
  justify-content: space-around;
  flex-flow: column nowrap;
  background: none;
  z-index: 3;

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

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
    if (isOpen) {
      document.body.style.overflow = 'unset';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [isOpen]);

  return (
    <StyledNav className={isScrolled ? 'scrolled' : 'not-scrolled'}>
      <StyledLogo to="/" className="bold">
        holios
      </StyledLogo>
      <StyledWrapper isOpen={isOpen}>
        <StyledLinks isOpen={isOpen}>
          <Link to="/massagetherapie">massage</Link>
          <Link to="/coaching">coaching</Link>
          <Link to="/cursussen">cursussen</Link>
          <Link to="/about">over mij</Link>
          <Link to="/contact">prijzen & contact</Link>
        </StyledLinks>
      </StyledWrapper>
      <StyledMenuIcon onClick={toggleMenu}>
        <span />
        <span />
      </StyledMenuIcon>
    </StyledNav>
  );
}
