// TODO Fix rich-text stuff

import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/SEO';

export default function SingleTreatmentPage({ data: { category, treatment } }) {
  return (
    <>
      {/* <SEO title={treatment.title} image={treatment.image?.asset?.fluid?.src} /> */}
      <div>
        test
        {/* <h1>{treatment.title}</h1> */}
        {/* <Img fluid={treatment.image.asset.fluid} /> */}
      </div>
    </>
  );
}

// export const query = graphql`
//   query($slug: String!) {
//     category: sanityCategory(
//       treatments: { elemMatch: { slug: { current: { eq: $slug } } } }
//     ) {
//       # id
//       # title
//       # subtitle
//       # price
//       # slug {
//       #   current
//       # }
//       # image {
//       #   asset {
//       #     fluid(maxWidth: 400) {
//       #       ...GatsbySanityImageFluid
//       #     }
//       #   }
//       # }
//       treatments {
//       #   id
//         title
//       #   subtitle
//       #   slug {
//       #     current
//       #   }
//       #   image {
//       #     asset {
//       #       fluid(maxWidth: 400) {
//       #         ...GatsbySanityImageFluid
//       #       }
//       #     }
//       #   }
//       # }
//     }
//   }
// `;
