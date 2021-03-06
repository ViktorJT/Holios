import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PriceTable from '../components/PriceTable';
import ContactTable from '../components/ContactTable';

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

  gap: 1rem;

  display: inherit;
  flex-flow: inherit;
  place-items: center;
  width: 100%;

  max-width: var(--sectionWidth);
`;

export default function contact({ data }) {
  return (
    <StyledContent>
      <StyledWrapper>
        <ContactTable siteSettings={data.siteSettings} />
        <PriceTable categories={data.categories} />
      </StyledWrapper>
    </StyledContent>
  );
}

export const query = graphql`
  query ContactPageQuery {
    categories: allSanityCategory {
      nodes {
        title
        id
        slug {
          current
        }
        treatments {
          cost
          duration
          title
          subtitle
          slug {
            current
          }
        }
      }
    }
    siteSettings: sanitySiteSettings {
      email
      telephone
      street
      streetNumber
      postCode
      city
      location {
        lat
        lng
        alt
      }
    }
  }
`;
