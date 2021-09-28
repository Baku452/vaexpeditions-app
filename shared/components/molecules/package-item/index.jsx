import Link from 'next/link';

import styles from './index.module.scss';

const borderColor = '1px solid #e6e6e6';
const textColor = '#000';
const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Days({ days }) {
  function getNameDays(day) {
    switch (day) {
      case 0:
        return 'Half-Day';
      case 1:
        return 'Full Day';
      default:
        return `${day} days`;
    }
  }
  return (
    <h6 className="fs-13 m-0">
      <span className="mr-2 font-weight-bold">Duration:</span> {getNameDays(days)}
    </h6>
  );
}

function PackageItem({
  title,
  days,
  slug,
  thumbnail,
  highligths,
  type,
  featured,
  packagetypes,
  destination,
  activity,
}) {
  return (
    <Link key={slug} href={`/package/${slug}`}>
      <a>
        <div
          className="card w-100 cursor-pointer"
          style={{
            color: textColor,
          }}>
          {featured ? (
            <p className={`${styles.tag} card-title fs-12 lh-23`}>Featured</p>
          ) : null}
          {thumbnail ? (
            <img src={thumbnail} className="card-img-top" alt={title} />
          ) : (
            <img src="/images/colca.jpg" lassName="card-img-top" alt={title} />
          )}
          <div
            className="card-body"
            style={{
              borderLeft: borderColor,
              borderRight: borderColor,
              borderBottom: borderColor,
            }}>
            <div className="row align-items-start justify-content-start">
              <div className="col-12">
                <h5 className={`${styles.title} card-title fs-18 lh-23`}>{title}</h5>
                {highligths ? <p className="fs-13">{highligths}</p> : null}
                <div className="d-flex fs-13 mb-2">
                  <h6 className="fs-13 font-weight-bold mr-2">Trip Type: </h6>
                  <>
                    {packagetypes.map(item =>
                      // eslint-disable-next-line eqeqeq
                      item.title == type ? (
                        <img
                          key={item.title}
                          alt={item.title}
                          className={styles.svg}
                          src={PUBLIC_API + item.svg}
                        />
                      ) : null,
                    )}
                    <span>{type}</span>
                  </>
                </div>
                <div className="mb-3">
                  <Days days={days} />
                </div>
                <div className="d-flex fs-13 mb-3 align-items-center">
                  <h6 className="fs-13 font-weight-bold mr-2 mb-0">Activity level: </h6>
                  <span>{activity}</span>
                </div>
                {destination ? (
                  <div className="d-flex fs-13 mb-3 align-items-center">
                    <h6 className="fs-13 font-weight-bold mr-2 mb-0">Destination: </h6>
                    <span>{destination}</span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export { PackageItem };
