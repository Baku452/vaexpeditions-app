import React from 'react';
import { Link as LinkScroll } from 'react-scroll';

import { Days } from '@/components/index';

import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function CintaNegra({
  price,
  days,
  offer,
  type,
  activity,
  specialist,
  packageTypeSvg,
  activityID,
}) {
  let iconActivity = '';
  const searchIcon = id => {
    switch (id) {
      case 1:
        iconActivity = '/icons/activity_level/very high.png';
        return;
      case 2:
        iconActivity = '/icons/activity_level/high.png';
        return;
      case 3:
        iconActivity = '/icons/activity_level/moderate.png';
        return;
      case 4:
        iconActivity = '/icons/activity_level/low.png';
        return;
      default:
        iconActivity = '/icons/activity_level/low.png';
    }
  };

  return (
    <div
      className={`${
        price && offer ? styles.cinta : styles.cintaEstandar
      } row mx-auto text-center px-2 px-lg-5 py-4`}>
      {price && offer ? (
        <div className="text-left">
          <p className="font-weight-bold fs-22 m-0">
            {offer} <span className="fs-16">per person</span>
          </p>
          {/* <p className="m-0 mb-3"></p> */}
          <p className="line-through m-0">Before {price}</p>
        </div>
      ) : null}
      <div>
        <p className="mb-4">
          <span>Duration</span>
        </p>
        <Days days={days} />
      </div>
      <div>
        <p>
          <span>Package Type</span>
        </p>
        <div className="d-flex flex-row align-items-center justify-content-center">
          <img
            alt={PUBLIC_API + packageTypeSvg}
            className={`${styles.iconSVG}`}
            src={PUBLIC_API + packageTypeSvg}
          />
          <p className="m-0 ml-2">{type}</p>
        </div>
      </div>
      {activityID ? searchIcon(activityID) : searchIcon(0)}
      <div>
        <p>
          <span>Activity Level</span>
        </p>
        <div className="d-flex flex-row align-items-center justify-content-center">
          <img alt="Activity Level" className={`${styles.icons}`} src={iconActivity} />
          <p className="m-0 ml-2">{activity}</p>
        </div>
      </div>
      {/* <div className={styles.specialist}>
        <p className="d-block d-lg-none">
          <span>Travel specialist</span>
        </p>
        <div className={`${styles.specialistMobile}`}>
          <img
            src={PUBLIC_API + specialist.thumbnail}
            alt="Contact Us"
            className={`${styles.circle} p-0`}
          />
          <div>
            <p className="d-none d-lg-block">
              <span>Travel specialist</span>
            </p>
            <p>{specialist.fullname}</p>
          </div>
        </div>
      </div> */}
      <div className={`d-none d-lg-block ${styles.booknow}`}>
        <LinkScroll
          className={`${styles.trackBook} py-1 btn btn-primary fs-24`}
          to="contact-form-package"
          spy
          smooth
          duration={500}>
          Book Now
        </LinkScroll>
        <a className="text-white fs-14 pt-3 d-block" href="tel:+18888038004">
          Call Us 1-(888) 803-8004
        </a>
      </div>
    </div>
  );
}
export { CintaNegra };
