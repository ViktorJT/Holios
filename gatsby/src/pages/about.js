import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PortableTextBlock from '../components/PortableTextBlock';

const StyledContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 0 1rem;

  & > * {
    width: 100%;
  }
`;

const StyledWrapper = styled.div`
  padding-top: 4rem;
  border-left: 1px solid var(--whiteTransparent);
  border-right: 1px solid var(--whiteTransparent);

  display: inherit;
  flex-flow: inherit;
  align-items: center;
  width: 100%;

  max-width: var(--sectionWidth);
`;

const StyledImg = styled(Img)`
  margin-top: 2rem;
  max-width: 240px;
  max-height: 240px;
  border-radius: 100%;

  @media (min-width: 960px) {
    margin-top: 4rem;
  }
`;

export default function contact({ data }) {
  return (
    <StyledContent>
      <StyledWrapper>
        <StyledImg
          fixed={data.siteSettings.profile.asset.fixed}
          alt={data.siteSettings.profile.alt}
        />
        <PortableTextBlock content={data.siteSettings._rawAbout} />
      </StyledWrapper>
    </StyledContent>
  );
}

export const query = graphql`
  query AboutPageQuery {
    siteSettings: sanitySiteSettings {
      _rawAbout
      profile {
        alt
        asset {
          fixed(width: 240, height: 240) {
            ...GatsbySanityImageFixed
          }
        }
      }
    }
  }
`;
