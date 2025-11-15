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
  align-items: center;
  width: 100%;

  max-width: var(--sectionWidth);
`;

export default function SingleCategoryPage({
  data: { category, siteSettings },
}) {
  console.log(category._rawDescription);
  return (
    <>
      <StyledContent>
        <SEO title={category.title} image={category.image?.asset?.url} />
        <StyledWrapper>
          <CategoryHero data={category} />
          <PortableTextBlock
            content={category._rawDescription}
            treatments={category.treatments}
          />
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
      illustration {
        asset {
          url
        }
      }
      _rawDescription
      image {
        alt
        asset {
          url
          gatsbyImageData(width: 1920, layout: FULL_WIDTH)
        }
      }
      treatments {
        _key
        title
        subtitle
        slug {
          current
        }
        image {
          alt
          asset {
            gatsbyImageData(width: 960, layout: FULL_WIDTH)
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
