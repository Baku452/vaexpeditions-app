/* eslint-disable react/no-danger */

import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './index.module.scss';

function WhereToItem({ title, summary, thumbnail, id }) {
  const router = useRouter();
  return (
    <div className="col-12 col-sm-6 col-md-4 mb-3">
      <Link href={`${router.asPath}/search?where_to_go=${id}`} passHref>
        <a className={` ${styles.card}`}>
          <div className="vacation position-relative">
            {thumbnail != null ? (
              <img src={thumbnail} className=" w-100 " alt={title} />
            ) : (
              <img src="/images/colca.jpg" className="d-block w-100 " alt={title} />
            )}
            <h3 className="lh-25 ">{title}</h3>
            <p className="fs-20 lh-27 p-5 text-center">{summary}</p>
            <div className={`${styles.cardTime2} text-center`}>
              <Link href={`${router.asPath}/search?where_to_go=${id}`}>
                <a className={` ${styles.boton} link `} type="button">
                  FIND A TRIP
                </a>
              </Link>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export { WhereToItem };
