import React from 'react';

import { ItineraryIcons } from '@/components/index';

function ItineraryItems({ items }) {
  return (
    <ul className="pt-4 pb-2 ps-0">
      {items.map(element => (
        <li key={element.id} className="pb-3">
          <ItineraryIcons types={element.types} />
          <span className="fw-bold">{element.types}: </span>
          {element.text}
        </li>
      ))}
    </ul>
  );
}

export { ItineraryItems };
