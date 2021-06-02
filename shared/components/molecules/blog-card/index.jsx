import Link from 'next/link';

import styles from './index.module.scss';

function BlogCard({ title, destination, slug, thumbnail, type, description }) {
  return (
    // <Link href={`/package/${slug}`}>
    <div className={`w-100 ${styles.carta}`}>
      <Link href={`/blog/${slug}`}>
        <img className="cursor-pointer" src={thumbnail} alt={title} />
      </Link>
      <div className={`${styles.cardPost}`}>
        <div className={`${styles.boxTags}`}>
          <Link className="cursor-pointer" href={`/blog/category/${destination}`}>
            <a>{destination}</a>
          </Link>
          <Link className="cursor-pointer" href={`/blog/category/${type}`}>
            <a>{type}</a>
          </Link>
        </div>
        <Link className="cursor-pointer" href={`/blog/${slug}`}>
          <a>
            <h3>{title}</h3>
          </a>
        </Link>
        <div
          className="fs-14 lh-29"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html:
              description.length > 150 ? `${description.slice(0, 200)}...` : description,
          }}
        />
      </div>
    </div>
  );
}

export { BlogCard };
