import React, { useState, useLayoutEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledNav = styled.div`
  position: fixed;
  width: 100%;
  max-width: var(--sectionWidth);
  padding: clamp(1rem, 4vh, 3rem) var(--contentPadding);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  z-index: 99;
  left: 50%;
  transform: translate(-50%, 0);
  background: transparent;
  transition: all 0.32s ease-out;

  & > * {
    flex: 1 1 50%;
  }

  .links {
    display: none;
    justify-content: flex-end;
    gap: 1rem;
    padding-left: var(--contentPadding);

    a {
      color: var(--black);
    }
  }

  & a {
    font-size: 1rem;
  }

  @media (min-width: 700px) {
    .links {
      display: flex;
      a {
        color: var(--black);
      }
    }
  }

  @media (min-width: 960px) {
    .links a {
      color: var(--white);
    }
  }

  &.scrolled {
    background: var(--white);

    a {
      color: var(--black);
    }
  }
`;

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(0);
  // const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setIsScrolled(position);
  };

  // const handleOpen = () => {
  //   setIsOpen(!isOpen);
  // };

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledNav className={isScrolled ? 'scrolled' : 'not-scrolled'}>
      <Link to="/" className="bold">
        holios
      </Link>
      <div className="links">
        <Link to="/massage">massage.</Link>
        <Link to="/coaching">coaching.</Link>
        <Link to="/cursussen">cursussen.</Link>
        <Link to="/about">about.</Link>
        <Link to="/contact">contact.</Link>
      </div>
    </StyledNav>
  );
}
