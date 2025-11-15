import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';

const StyledMain = styled.div`
  display: flex;
  flex-flow: row wrap;
  place-content: center;
  gap: 1rem;
  padding-bottom: clamp(5rem, 11vh, 10rem);
`;

const StyledSection = styled.article`
  margin-top: 2rem;
  display: flex;
  flex-flow: column nowrap;
  flex: 1 1 240px;

  background-color: var(--primaryLight);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const StyledContent = styled.div`
  background-color: var(--white);
  display: inherit;
  flex-flow: column nowrap;
  justify-content: space-between;
  padding: 1rem;
  height: 240px;

  & > * {
    width: 100%;
    max-width: 100%;
  }

  & > h2 {
    font-size: 1rem;
    letter-spacing: 0;
  }

  & > p {
    font-size: 1rem;
    margin: 0;
  }
`;

const StyledImg = styled.div`
  flex: 1 1 240px;
  overflow: hidden;
  min-height: 240px;

  .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
    min-height: 240px;
  }

  .gatsby-image-wrapper img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: 960px) {
    flex: 0 1 240px;
  }
`;

function SingleTreatment({ treatment, index }) {
  return (
    <StyledSection>
      <StyledImg>
        <GatsbyImage image={treatment.image.asset.gatsbyImageData} alt={treatment.image.alt} />
      </StyledImg>
      <StyledContent index={index}>
        <h2>{treatment.title}</h2>
        <p>{treatment.subtitle}</p>
        <PrimaryButton link={treatment.slug.current} label="Lees meer" />
      </StyledContent>
    </StyledSection>
  );
}

export default function TreatmentList({ treatments }) {
  return (
    <StyledMain>
      {treatments.map((treatment, index) => (
        <SingleTreatment
          key={treatment._key || treatment.slug?.current || index}
          treatment={treatment}
          index={index}
        />
      ))}
    </StyledMain>
  );
}
