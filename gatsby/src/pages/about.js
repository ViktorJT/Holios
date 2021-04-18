import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
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
  border-left: 1px solid var(--whiteTransparent);
  border-right: 1px solid var(--whiteTransparent);

  display: inherit;
  flex-flow: inherit;
  width: 100%;

  max-width: var(--sectionWidth);
`;

export default function contact({ data }) {
  return (
    <StyledContent>
      <StyledWrapper>
        <PortableTextBlock content={data.siteSettings._rawAbout} />
      </StyledWrapper>
    </StyledContent>
  );
}

export const query = graphql`
  query AboutPageQuery {
    siteSettings: sanitySiteSettings {
      _rawAbout
    }
  }
`;
