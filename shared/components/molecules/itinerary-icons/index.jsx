import React from 'react';

import { Icon } from '@/components/index';
import Bed from '@/icons/bed.svg';
import Restaurant from '@/icons/restaurant.svg';

function ItineraryIcons({ types }) {
  return (
    <Icon
      component={types === 'Meals Included' ? Restaurant : Bed}
      viewBox="0 0 512 512"
      className="icon-size-m mr-2"
    />
  );
}

export { ItineraryIcons };
