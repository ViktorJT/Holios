import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  padding: 1rem 0;
  width: 100%;
  border-bottom: 1px solid var(--black);
  display: flex;
  justify-content: space-between;
  max-width: var(--textWidth);
  text-transform: lowercase;
  font-size: 1rem;

  &::after {
    content: ' →';
  }
`;

export default function PrimaryButton({ link, label }) {
  return <StyledLink to={link}>{label}</StyledLink>;
}
