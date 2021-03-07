import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const StyledHeader = styled.header`
  display: inherit;
  flex-flow: column nowrap;
  height: 100vh;
  max-height: 1080px;

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
  flex: 1 1 50%;

  & > * {
    max-width: var(--textWidth);
  }

  background-image: url(1bg.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% 120%;

  @media (min-width: 960px) {
    flex: 1 1 50%;
    background-position: right bottom;
    place-content: center;
    place-items: center;
  }
`;

const StyledImage = styled.div`
  position: relative;
  overflow: hidden;
  flex: 1 1 50%;
  margin-bottom: 1rem;

  & > * {
    height: 100%;
  }

  .pattern {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    object-fit: cover;
    object-position: 100% -10%;
  }

  @media (min-width: 960px) {
    flex: 1 1 50%;
    margin-bottom: 0rem;

    .pattern {
      object-position: left bottom;
    }
  }
`;

export default function Hero({ siteSettings, image }) {
  return (
    <StyledHeader>
      <StyledWrapper image={image}>
        <h1>{siteSettings.description}</h1>
      </StyledWrapper>
      <StyledImage>
        <Img fluid={image.asset.fluid} alt={image.alt} />
        <img className="pattern" src="2bg.svg" alt="" />
      </StyledImage>
    </StyledHeader>
  );
}
