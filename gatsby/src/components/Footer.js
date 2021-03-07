import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: var(--white);

  & > .wrapper {
    max-width: var(--sectionWidth);
    display: flex;
    flex-flow: row wrap;
    margin: 0 auto;
    padding: var(--contentPadding);
    gap: 2rem;
  }

  @media (min-width: 960px) {
    gap: 4rem;
  }
`;

const StyledItem = styled.div`
  --min: 30ch;
  display: inherit;
  flex-flow: column nowrap;

  flex: 1 1 var(--min);

  p,
  a {
    margin: 0 0 1rem 0;
    font-size: 1rem;
  }

  & > *:first-child {
    font-weight: 600;
    color: var(--darkGreen);
  }
`;

export default function Footer() {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          siteSettings: sanitySiteSettings {
            title
            email
            telephone
            street
            streetNumber
            postCode
            city
          }
          categories: allSanityCategory {
            nodes {
              id
              title
              slug {
                current
              }
              treatments {
                _key
                title
                slug {
                  current
                }
              }
            }
          }
        }
      `}
      render={({ siteSettings, categories }) => (
        <StyledFooter>
          <div className="wrapper">
            <StyledItem>
              <p className="logo">{siteSettings.title}</p>
              <p>
                {siteSettings.street} {siteSettings.streetNumber}
              </p>
              <p>
                {siteSettings.postCode}, {siteSettings.city}
              </p>
              <p>{siteSettings.telephone}</p>
              <p>{siteSettings.email}</p>
            </StyledItem>
            {categories.nodes.map((category) => (
              <StyledItem key={category.id}>
                <Link to={category.slug.current}>{category.title}</Link>
                {category.treatments.map((treatment) => (
                  <Link
                    to={`${category.slug.current}/${treatment.title}`}
                    key={treatment._key}
                  >
                    {treatment.title} →
                  </Link>
                ))}
              </StyledItem>
            ))}
          </div>
        </StyledFooter>
      )}
    />
  );
}
