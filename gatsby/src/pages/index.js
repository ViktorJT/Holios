// TODO Shouldn't/Can't the serializer for images not use gatsby image?
// TODO Add all props to SEO component
// TODO make serializer and portable text into a component instead

import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import CategoryList from '../components/CategoryList';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Solicitation from '../components/Solicitation';

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

export default function HomePage({ data }) {
  return (
    <>
      <StyledContent>
        <SEO />
        <StyledWrapper>
          <Hero siteSettings={data.siteSettings} image={data.homepage.image} />
          <Intro
            introHeading={data.homepage.introHeading}
            introText={data.homepage.introText}
          />
          <CategoryList categories={data.homepage.categories} />
        </StyledWrapper>
      </StyledContent>
      <Solicitation solicitation={data.siteSettings.solicitation} />
    </>
  );
}

export const query = graphql`
  query PageQuery {
    homepage: sanityHomepage {
      introHeading
      introText
      image {
        alt
        asset {
          fluid(maxWidth: 1280) {
            ...GatsbySanityImageFluid
          }
        }
      }
      categories {
        title
        subtitle
        cost
        duration
        benefits
        slug {
          current
        }
        image {
          alt
          asset {
            url
            fluid(maxWidth: 1280) {
              ...GatsbySanityImageFluid
            }
          }
        }
        illustration {
          asset {
            url
          }
        }
        id
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
