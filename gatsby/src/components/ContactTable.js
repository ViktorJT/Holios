import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  margin-top: 6rem;
  max-width: 640px;
  width: 100%;
  background-color: white;
  padding: 1rem;
  border-spacing: 2rem;
  & * {
    text-align: left;
    font-size: 0.8rem;
    vertical-align: top;
  }
  @media (min-width: 640px) {
    margin-top: 8rem;
  }
`;

export default function PriceTable({ siteSettings }) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Contact</th>
          <th>Adres</th>
        </tr>
      </thead>
      <tr>
        <td>
          <a href="mailto:info@holios.nl?subject=Holios">
            {siteSettings.email}
          </a>
        </td>
        <td>
          {siteSettings.street} {siteSettings.streetNumber}
        </td>
      </tr>
      <tr>
        <td>{siteSettings.telephone}</td>
        <td>
          {siteSettings.postCode} {siteSettings.city}
        </td>
      </tr>
    </StyledTable>
  );
}
