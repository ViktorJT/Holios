import React from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';

const StyledSection = styled.section`
  background-color: var(--white);
  flex: 1 1 100%;
  min-height: 400px;
  display: flex;
  flex-flow: column nowrap;
  place-items: center;
  justify-content: center;
  gap: 2rem;
  padding: var(--contentPadding);

  p {
    font-size: clamp(1rem, 1.7vw, 1.5rem);
  }

  & > * {
    text-align: center;
    max-width: var(--textWidth);
  }

  @media (min-width: 960px) {
    min-height: 480px;
  }
`;

export default function Solicitation({ solicitation }) {
  return (
    <StyledSection>
      <p>{solicitation}</p>
      <PrimaryButton link="/contact/" label="Maak een afspraak" />
    </StyledSection>
  );
}
