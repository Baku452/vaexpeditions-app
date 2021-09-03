import Link from 'next/link';
import React from 'react';

import styles from './index.module.scss';

function ListCategories({ items }) {
  return (
    <>
      <ul className="list-unstyled">
        {items.map(item => (
          <Link
            // className="cursor-pointer"
            key={item.title}
            href={`/blog/category/${item.title.toLowerCase().replace(' ', '-')}`}>
            <a className={`${styles.boxCategory} cursor-pointer`}>
              <li key={item.id} />
              {item.title}{' '}
            </a>
          </Link>
        ))}
      </ul>
    </>
  );
}

export { ListCategories };
