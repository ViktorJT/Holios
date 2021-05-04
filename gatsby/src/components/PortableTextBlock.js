import React from 'react';
import PortableText from '@sanity/block-content-to-react';
import urlBuilder from '@sanity/image-url';
import styled from 'styled-components';
import TreatmentList from './TreatmentList';

const UrlFor = (src) =>
  urlBuilder({ projectId: 'hhvgd79v', dataset: 'production' }).image(src);

const serializer = {
  types: {
    altImage: (props) => (
      <img src={UrlFor(props.node.asset)} alt={props.node.alt} />
    ),
  },
};

const StyledWrapper = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  place-items: center;
  flex-flow: column nowrap;
  padding-bottom: 2rem;

  & > * {
    max-width: 640px;
    width: 100%;
  }

  li {
    margin: 0.5rem 0;
  }

  @media (min-width: 960px) {
    padding: 2rem var(--contentPadding) 4rem var(--contentPadding);
  }
`;

const StyledPortableText = styled(PortableText)`
  display: inherit;
  flex-flow: column nowrap;

  & * {
    font-size: 1rem;
  }

  h3,
  h4,
  h5,
  h6 {
    font-size: clamp(1rem, 4vw, 1.5rem);
    letter-spacing: 0;
  }
`;

export default function PortableTextBlock({ content, treatments }) {
  return (
    <StyledWrapper>
      <StyledPortableText
        className="portableText"
        blocks={content}
        serializers={serializer}
      />
      {treatments && <TreatmentList treatments={treatments} />}
    </StyledWrapper>
  );
}
