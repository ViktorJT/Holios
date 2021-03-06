import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';

const StyledMain = styled.main`
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;
  padding-bottom: clamp(5rem, 11vh, 10rem);

  @media (min-width: 960px) {
    gap: 0;
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-flow: row wrap;

  background-color: var(--primaryLight);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 960px) {
    height: 80vh;
  }
`;

const StyledContent = styled.div`
  background-color: var(--white);
  display: inherit;
  flex-flow: column nowrap;
  flex: 1 1 463px;
  place-items: center;
  place-content: center;
  padding: var(--contentPadding);
  order: 1;

  & > * {
    width: 100%;
    max-width: var(--textWidth);
  }

  & > h2 {
    font-size: clamp(1rem, 4vw, 2rem);
    letter-spacing: 0;
  }

  & > p {
    font-size: clamp(1rem, 1.7vw, 1.5rem);
  }

  @media (min-width: 960px) {
    order: 0;
    gap: 1rem;
  }
`;

const StyledImg = styled(Img)`
  height: 320px;
  width: 100%;

  @media (min-width: 960px) {
    flex: 1 1 463px;
    height: 100%;
  }
`;

function SingleCategory({ category, index }) {
  const even = !(index % 2);

  return even ? (
    <StyledSection>
      <StyledContent index={index}>
        <h2>{category.title}</h2>
        <p>{category.subtitle}</p>
        <PrimaryButton link={category.slug.current} label="Lees meer" />
      </StyledContent>
      <StyledImg fluid={category.image.asset.fluid} alt={category.image.alt} />
    </StyledSection>
  ) : (
    <StyledSection>
      <StyledImg fluid={category.image.asset.fluid} alt={category.image.alt} />
      <StyledContent index={index}>
        <h2>{category.title}</h2>
        <p>{category.subtitle}</p>
        <PrimaryButton link={category.slug.current} label="Lees meer" />
      </StyledContent>
    </StyledSection>
  );
}

export default function CategoryList({ categories }) {
  return (
    <StyledMain>
      {categories.map((category, index) => (
        <SingleCategory key={category.id} category={category} index={index} />
      ))}
    </StyledMain>
  );
}
