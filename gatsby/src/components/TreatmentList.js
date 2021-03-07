import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledMain = styled.div`
  display: flex;
  flex-flow: row wrap;
  place-content: center;
  gap: 1rem;
  padding-bottom: clamp(5rem, 11vh, 10rem);
`;

const StyledSection = styled.article`
  display: flex;
  flex-flow: column nowrap;

  background-color: var(--primaryLight);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  & > * {
    flex: 1 1 240px;
    max-height: 40vh;
  }

  @media (min-width: 960px) {
    & > * {
      max-height: 1080px;
      flex: 0 1 240px;
    }
  }
`;

const StyledContent = styled.div`
  background-color: var(--white);
  display: inherit;
  flex-flow: column nowrap;
  place-items: center;
  place-content: center;
  padding: var(--contentPadding);

  & > * {
    width: 100%;
    max-width: var(--textWidth);
  }

  & > h2 {
    font-size: clamp(1rem, 1.7vw, 1.5rem);
    letter-spacing: 0;
  }

  & > p {
    font-size: 1rem;
  }

  @media (min-width: 960px) {
    gap: 1rem;
  }
`;

function SingleTreatment({ treatment, index }) {
  return (
    <StyledSection>
      <Img fluid={treatment.image.asset.fluid} alt={treatment.image.alt} />
      <StyledContent index={index}>
        <h2>{treatment.title}</h2>
        <p>{treatment.subtitle}</p>
      </StyledContent>
    </StyledSection>
  )
}

export default function TreatmentList({ treatments }) {
  return (
    <StyledMain>
      {treatments.map((treatment, index) => (
        <SingleTreatment
          key={treatment.id}
          treatment={treatment}
          index={index}
        />
      ))}
    </StyledMain>
  );
}
