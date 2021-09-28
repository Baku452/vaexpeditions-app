import React from 'react';

import { ItemTravelAdvice } from '@/components/index';

const GridTravelAdvice = ({ items }) => {
  return (
    <div className="row row-cols-2 row-cols-sm-2 row-cols-lg-3 row-cols-xl-5">
      {items.map(item => (
        <div key={item.id} className="col">
          <ItemTravelAdvice
            key={item.id}
            title={item.title}
            content={item.content}
            image={item.image}
          />
        </div>
      ))}
    </div>
  );
};

export { GridTravelAdvice };
