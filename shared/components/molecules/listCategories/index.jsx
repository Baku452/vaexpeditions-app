import Link from 'next/link';
import React from 'react';

import styles from './index.module.scss';

function ListCategories({ items }) {
  return (
    <>
      <ul>
        {items.map(item => (
          <Link
            // className="cursor-pointer"
            key={item.title}
            href={`/blog/category/${item.title.toLowerCase().replace(' ', '-')}`}>
            <li key={item.id} className={`${styles.boxCategory} cursor-pointer`}>
              <link href="#"><a >{item.title}</a></link>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export { ListCategories };
