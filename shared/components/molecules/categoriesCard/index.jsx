import Link from 'next/link';
import { IoChevronForwardCircleOutline } from 'react-icons/io5';

import styles from './index.module.scss';

function CategoryCard({ item }) {
  return (
    <Link href={`/blog/category/${item.title.toLowerCase().replace(' ', '-')}`}>
      <div className={`border ${styles.box}`}>
        <div className="d-flex p-4 justify-content-between">
          <h3>{item.title}</h3>
          <IoChevronForwardCircleOutline size={30} />
        </div>
        <div className={`${styles.imgBox}`}>
          {item.thumbnail ? (
            <img alt={item.title} src={item.thumbnail} />
          ) : (
            <img alt={item.title} src="/images/colca.jpg" />
          )}
        </div>
      </div>
    </Link>
  );
}

export { CategoryCard };
