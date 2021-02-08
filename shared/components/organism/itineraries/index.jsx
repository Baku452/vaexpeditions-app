import React from 'react';
import { Element } from 'react-scroll';

import { Title } from '../../atoms/title/index';
import { List } from './list';

function Itineraries({ itineraries }) {
  return (
    <Element name="itinerary" className="container pt-5 pb-5">
      {itineraries.length > 1 && <Title title="DAY BY DAY SCHEDULE" />}
      <List itineraries={itineraries} />
    </Element>
  );
}

export { Itineraries };
