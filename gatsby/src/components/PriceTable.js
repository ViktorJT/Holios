import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PriceItem from './PriceItem';

const StyledTable = styled.table`
  max-width: 640px;
  padding: 1rem;
  width: 100%;
  background-color: white;
  border-spacing: 2rem;
  margin-bottom: 2rem;
  & * {
    text-align: left;
    font-size: 0.8rem;
    vertical-align: top;
  }

  .small {
    font-size: 0.8rem;
    font-weight: 200;
    display: block;
    color: var(--lightGray);
  }
`;

export default function PriceTable({ categories }) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Prijzen & Vergoedingen</th>
        </tr>
      </thead>
      {categories.nodes.map((category) => (
        <>
          <thead>
            <tr>
              <th>
                <Link to={`/${category.slug.current}/`}>{category.title}</Link>
              </th>
              <th>
                <Link className="small" to={`/${category.slug.current}/`}>
                  lees meer →
                </Link>
              </th>
            </tr>
          </thead>
          <PriceItem treatments={category.treatments} />
        </>
      ))}
    </StyledTable>
  );
}
