import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PrimaryButton from './PrimaryButton';

const StyledHeader = styled.header`
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  max-height: 1080px;

  & > .gatsby-image-wrapper {
    margin-bottom: 1rem;
  }

  & > * {
    flex: 1 1 50%;
  }

  @media (min-width: 960px) {
    flex-flow: row nowrap;

    & > .gatsby-image-wrapper {
      margin-bottom: 0rem;
    }
  }
`;

const StyledWrapper = styled.div`
  background-color: var(--white);
  display: flex;
  flex-flow: column nowrap;
  place-content: flex-end;
  place-items: stretch;
  padding: 1rem;
  gap: 1rem;

  & > * {
    max-width: var(--textWidth);
    width: 100%;
  }

  p {
    color: var(--darkGreen);
    margin-top: 0.5rem;
    font-size: 1rem;
  }

  h1 {
    font-size: clamp(1rem, 4vw, 2rem);
    letter-spacing: 0;
  }

  h2 {
    font-size: clamp(1rem, 1.7vw, 1.5rem);
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0;
  }

  @media (min-width: 960px) {
    place-content: center;
    place-items: center;
  }
`;

export default function CategoryHero({
  data: { title, subtitle, image, cost, duration },
}) {
  return (
    <StyledHeader>
      <StyledWrapper>
        <div>
          <h1>{title}</h1>
          <p>
            €{cost} {duration}
          </p>
        </div>
        <h2>{subtitle}</h2>
        <PrimaryButton label='Maak een aafspraak'/>
      </StyledWrapper>
      <Img fluid={image.asset.fluid} alt={image.alt} />
    </StyledHeader>
  );
}
