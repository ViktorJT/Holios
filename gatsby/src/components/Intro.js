// TODO Change the h3 to something lower like 4-5

import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  place-items: center;
  gap: 2rem;
  background-image: url(3bg.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  & > * {
    max-width: var(--textWidth);
    text-align: center;
  }

  padding: clamp(4rem, 11vh, 160px) 2rem;

  h2 {
    font-size: clamp(1rem, 4vw, 2rem);
    letter-spacing: 0;
  }

  p {
    font-size: clamp(1rem, 1.7vw, 1.5rem);
  }
`;

export default function Intro({ introHeading, introText }) {
  return (
    <StyledSection>
      <h2>{introHeading}</h2>
      <p>{introText}</p>
      {/* <PrimaryButton link="#" label="test" /> */}
    </StyledSection>
  );
}
