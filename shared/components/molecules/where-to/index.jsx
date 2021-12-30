/* eslint-disable react/no-danger */

import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './index.module.scss';

function WhereToItem({ title, summary, slug, thumbnail }) {
  const router = useRouter();
  return (
    <div className="col-6 col-md-4">
      <Link href={`${router.asPath}/${slug}`} passHref>
        <a>
          <div className={`${styles.cardBox} text-dark`}>
            {thumbnail != null ? (
              <img src={thumbnail} className="img-fluid w-100" alt={title} />
            ) : (
              <img src="/images/colca.jpg" className="card-img-top " alt={title} />
            )}
            <div className={`p-3 ${styles.contentBox}`}>
              <h3 className="fs-3 text-uppercase">{title}</h3>
              <div className="d-none d-sm-none d-sm-block">{summary}</div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export { WhereToItem };
