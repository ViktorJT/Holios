// TODO Add all the params for the SEO component, incl. description!

import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';
import CategoryHero from '../components/CategoryHero';
import Solicitation from '../components/Solicitation';
import PortableTextBlock from '../components/PortableTextBlock';
import TreatmentList from '../components/TreatmentList';

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

export default function SingleCategoryPage({
  data: { category, siteSettings },
}) {
  return (
    <>
      <StyledContent>
        <SEO title={category.title} image={category.image?.asset?.fluid?.src} />
        <StyledWrapper>
          <CategoryHero data={category} />
          <PortableTextBlock
            content={category._rawDescription}
            benefits={category.benefits}
          />
          <TreatmentList treatments={category.treatments} />
        </StyledWrapper>
      </StyledContent>
      <Solicitation solicitation={siteSettings.solicitation} />
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    category: sanityCategory(slug: { current: { eq: $slug } }) {
      id
      title
      subtitle
      cost
      duration
      benefits
      illustration {
        asset {
          url
        }
      }
      _rawDescription
      image {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
      treatments {
        title
        subtitle
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 960) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    siteSettings: sanitySiteSettings {
      title
      description
      name
      occupation
      solicitation
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
