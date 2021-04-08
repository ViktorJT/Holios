import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import PrimaryButton from './PrimaryButton';

const StyledHeader = styled.header`
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  max-height: 1080px;
  width: 100%;

  @media (min-width: 960px) {
    flex-flow: row nowrap;
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
  flex: 1 1 60%;

  .back {
    font-size: 1rem;
    color: var(--darkGreen);
  }

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
    flex: 1 1 50%;
  }
`;

const StyledImg = styled(Img)`
  margin-bottom: 1rem;
  flex: 1 1 40%;

  @media (min-width: 960px) {
    margin-bottom: 0rem;
    flex: 1 1 50%;
  }
`;

export default function CategoryHero({
  data: { title, subtitle, image },
  category,
}) {
  return (
    <StyledHeader>
      <StyledWrapper>
        <Link className="back" to={`/${category.slug.current}/`}>
          ← Terug naar {category.slug.current}
        </Link>
        <div>
          <h1>{title}</h1>
        </div>
        <h2>{subtitle}</h2>
        <PrimaryButton link="/contact/" label="Maak een aafspraak" />
      </StyledWrapper>
      <StyledImg fluid={image.asset.fluid} alt={image.alt} />
    </StyledHeader>
  );
}
