import Link from 'next/link';

import styles from './index.module.scss';

function BlogCard({ title, slug, thumbnail, summary, time }) {
  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <div className={`row containerBox my-5  ${styles.carta} text-justify row align-items-center`}>
          <div className="w-100 h-100 col-12 col-md-6 img-fluid ">
            <img src={thumbnail} alt={title}  />
            <div className={`${styles.cardTime} text-center`} >
              <span className={`${styles.time}`}>{time}</span>
              <span className={`${styles.min}`}>MIN</span>
              <span className={`${styles.read}`}>READ</span>
            </div>
          </div>
          <div className={`${styles.cardPost} col-12 col-md-6 `}>
            <h3>{title}</h3>
            <div
              className={`${styles.cardText}  lh-29 d-none d-md-block`}>
                {summary}
            </div>
            <div className={`${styles.cardBtn} pt-3 row justify-content-center`}>
              <Link href={`/blog/${slug}`}>
                <a className="btn btn-primary btn-lg mb-5">READ ARTICLE</a>
              </Link>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

function BlogCard2({ title, slug, thumbnail,time }) {
  return (
    // <Link href={`/package/${slug}`}>
    <Link href={`/blog/${slug}`}>
      <a>
        <div className={` ${styles.carta2}`}>
          <img className="cursor-pointer" src={thumbnail} alt={title} />
          <div className={`${styles.cardPost2}`}>
            <h3>{title}</h3>
          </div>

           <div className={`${styles.cardTime2} text-center`} >
            <span >{time}</span>
            <span className={`${styles.min}`}>MIN</span>
            <span className={`${styles.read}`}>READ</span>
            </div>
          
        </div>
      </a>
    </Link>
  );
}

export { BlogCard, BlogCard2 };
