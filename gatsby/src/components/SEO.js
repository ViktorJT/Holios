// TODO Double-check all the props to this component. What is Location??

import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

export default function SEO({ children, location, description, title, image }) {
  const { siteSettings } = useStaticQuery(graphql`
    query {
      siteSettings: sanitySiteSettings {
        title
        description
      }
    }
  `);

  return (
    <Helmet titleTemplate={`%s - ${siteSettings.title}`}>
      <html lang="en" />
      <title>{title}</title>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={siteSettings.description} />
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || '/logo.svg'} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:site_name"
        content={siteSettings.title}
        key="ogsitename"
      />
      <meta property="og:description" content={description} key="ogdesc" />
      {children}
    </Helmet>
  );
}
