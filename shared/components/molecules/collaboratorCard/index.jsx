import Link from 'next/link';
import React from 'react';

import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

const CardCollaborator = ({ slug, fullName, job, thumbnail, className }) => {
  return (
    <div className={`${className} ${styles.cardCollab} mb-5 text-center `}>
      <Link href={`/about/our-team/${slug}`}>
        <a>
          <img className="img-fluid" alt={fullName} src={PUBLIC_API + thumbnail} />
          <div className={styles.cardContent}>
            <h5 className="fw-light text-secondary">{fullName}</h5>
            <h5 className="fw-bold text-primary">{job}</h5>
          </div>
        </a>
      </Link>
    </div>
  );
};

const GridCard = ({ items, className }) => {
  return (
    <div className="row justify-content-center">
      {items.map(item => (
        <CardCollaborator
          key={item.full_name}
          slug={item.slug}
          fullName={item.full_name}
          job={item.job}
          thumbnail={item.thumbnail}
          className={className}
        />
      ))}
    </div>
  );
};
export { CardCollaborator, GridCard };
