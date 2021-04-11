// TODO Fix rich-text stuff

import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';
import TreatmentHero from '../components/TreatmentHero';
import Solicitation from '../components/Solicitation';
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
  align-items: center;
  width: 100%;

  max-width: var(--sectionWidth);
`;

export default function SingleTreatmentPage(props) {
  const [
    bajs,
    categorySlug,
    treatmentSlug,
    korv,
  ] = props.location.pathname.split('/');

  const category = props.data.categories.nodes.filter(
    (node) => node.slug.current === categorySlug
  )[0];

  const treatment = category.treatments.filter(
    (node) => node.slug.current === treatmentSlug
  )[0];

  return (
    <>
      {/* <SEO title={treatment.title} image={treatment.image?.asset?.fluid?.src} /> */}
      <StyledContent>
        <SEO
          title={treatment.title}
          image={treatment.image?.asset?.fluid?.src}
        />
        <StyledWrapper>
          <TreatmentHero data={treatment} category={category} />
          <PortableTextBlock content={treatment._rawDescription} />
        </StyledWrapper>
      </StyledContent>
      {/* <Solicitation solicitation={siteSettings.solicitation} /> */}
    </>
  );
}

export const query = graphql`
  query {
    categories: allSanityCategory {
      nodes {
        id
        title
        subtitle
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        treatments {
          title
          subtitle
          _rawDescription
          slug {
            current
          }
          image {
            asset {
              fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid
              }
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
