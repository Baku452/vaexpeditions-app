import Link from 'next/link';
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

import { SearchBar } from '@/components/index';

import styles from './index.module.scss';

function Newsletter({ packagetypes, packagesAll }) {
  return (
    <div className={`container d-none d-lg-block py-4 ${styles.header}`}>
      <div className="d-flex p-0 justify-content-between">
        <div className=" justify-content-center">
          <Link href="/">
            <a className="position-relative">
              <img
                alt="Logo Va Expeditions"
                className={styles.logo}
                src="/icons/logo_horizontalWeb.svg"
              />
            </a>
          </Link>
        </div>
        <div className="col-8">
          <div className="row">
            <div className={`col-12 mb-3 ${styles.subnav}`}>
              <ul className="navbar-nav fs-13 pb-2 ">
                <li>
                  <a href="tel:1 - (888) 803 8004">
                    <FaPhoneAlt /> (Usa / Canada) : 1 - (888) 803 8004
                  </a>
                </li>
                <li>
                  <Link href="/travel-availability">
                    <a role="button">Travel Availability</a>
                  </Link>
                </li>
                <li>
                  <Link href="/new-risk">
                    <a role="button">New Risk-Free Flexible Booking Offer</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex col-12 justify-content-end">
            <div className="flex-grow-1 pe-5">
              <SearchBar packagetypes={packagetypes} packagesAll={packagesAll} />
            </div>
            <div className="">
              <Link href="/contact-us">
                <button
                  type="button"
                  style={{ backgroundColor: '#a6192e', border: 'none' }}
                  className="btn btn-primary">
                  Book Your Adventure!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Newsletter };
