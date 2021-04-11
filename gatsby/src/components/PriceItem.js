import React from 'react';

export default function PriceItem({ treatments }) {
  return (
    <tbody>
      {treatments.map((treatment, i) => {
        if (treatment.title !== 'TouchPro® Stoelmassage voor bedrijven') {
          return (
            <tr key={i}>
              <td>{treatment.title}</td>
              <td>
                €{treatment.cost} – {treatment.duration}
              </td>
            </tr>
          );
        }
        return (
          <tr key={i}>
            <td>{treatment.title}</td>
            <td>Prijs op aanvraag</td>
          </tr>
        );
      })}
    </tbody>
  );
}
