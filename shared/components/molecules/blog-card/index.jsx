import Link from 'next/link';

import styles from './index.module.scss';

function BlogCard({ title, slug, thumbnail, description, time }) {
  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <div className={`row containerBox my-5  ${styles.carta}`}>
          <div className="w-100 col-12 col-md-6 order-md-1">
            <img src={thumbnail} alt={title} />
          </div>
          <div className={`${styles.cardPost} col-12 col-md-6  order-md-2 align-self-center`}>
            <h3>{title}</h3>
            <div className={`${styles.cardTime} text-center`} >
            <span className={`${styles.time}`}>{time}</span>
            <span className={`${styles.min}`}>MIN</span>
            <span className={`${styles.read}`}>READ</span>
            </div>
            <div
              className={`${styles.cardText} align-self-center lh-29 d-none d-md-block`}
              dangerouslySetInnerHTML={{
                __html:
                  description.length > 150
                    ? `${description.slice(0, 200)}...`
                    : description,
              }}
            />
            <div className={`${styles.cardBtn} row justify-content-center`}>
              <Link href={`/blog/${slug}`} className="align-self-center">
                <a className="btn btn-primary btn-lg mb-5">READ ARTICLE</a>
              </Link>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

function BlogCard2({ title, slug, thumbnail }) {
  return (
    // <Link href={`/package/${slug}`}>
    <Link href={`/blog/${slug}`}>
      <a>
        <div className={` ${styles.carta2}`}>
          <img className="cursor-pointer" src={thumbnail} alt={title} />
          <div className={`${styles.cardPost2}`}>
            <h3>{title}</h3>
          </div>
        </div>
      </a>
    </Link>
  );
}

export { BlogCard, BlogCard2 };
