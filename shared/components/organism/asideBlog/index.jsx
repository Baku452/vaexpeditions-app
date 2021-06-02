import Link from 'next/link';
import React from 'react';

import { ListCategories } from '@/components/index';

function AsideBlog({ destinations, blogtypesRes }) {
  return (
    <nav className="col-12 order-1 order-lg-2 col-lg-4 px-4">
      <h2 className="font-weight-bold title">Explore our Categories</h2>
      <ListCategories items={blogtypesRes} />
      <h2 className="font-weight-bold title pt-3">Destinations</h2>
      {destinations.map(country => (
        // eslint-disable-next-line react/jsx-key
        <ListCategories items={country.destinations} />
      ))}
      <Link href="/blog/category">
        <a className="border-bottom pt-4 pb-3 mb-4 d-block" href="#">
          See All topics
        </a>
      </Link>
    </nav>
  );
}

export { AsideBlog };
