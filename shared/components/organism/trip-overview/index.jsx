import Link from 'next/link';
import React from 'react';
import { Element } from 'react-scroll';

import { Rating } from '../../molecules/rating/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function TripOverview({ pack }) {
  return (
    <Element name="trip-overview" className="container">
      <div className="package-panel">
        <div className="container package-detail">
          <div className="row pb-4 mb-3">
            <div className="col-12 col-md-5">
              <div className="row pt-4 content-details">
                <div className="col-12 pt-3 pb-2">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-7 fs-16 pt-1 pb-3 pt-md-0 pb-md-0 font-weight-bold w-300">
                      Physical Difficulty
                    </div>
                    <div className="col-12 col-md-5 d-flex">
                      <Rating number={pack?.physical_difficulty} />
                    </div>
                  </div>
                </div>
                <div className="col-12 pb-2">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-7 fs-16 pt-1 pb-3 pt-md-0 pb-md-0  font-weight-bold w-300">
                      Cultural rating
                    </div>
                    <div className="col-12 col-md-5 d-flex">
                      <Rating number={pack?.cultural_rating} />
                    </div>
                  </div>
                </div>
                <div className="col-12 pb-2">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-7 pt-1 pb-3 pt-md-0 pb-md-0  fs-16 font-weight-bold w-300">
                      Wildlife expectation
                    </div>
                    <div className="col-12 col-md-5 d-flex">
                      <Rating number={pack?.wildlife_expectation} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-7">
              <div className="row  pt-4 content-details">
                <div className="col-12 col-md-6 text-center">
                  <img
                    src={PUBLIC_API + pack?.specialist?.thumbnail}
                    alt="Contact Us"
                    className="image-circle"
                  />
                  {pack?.show_specialist && (
                    <h6 className="pt-2 font-weight-bold">
                      {pack?.specialist?.fullname}
                    </h6>
                  )}
                </div>
                <div className="col-12 col-md-6 text-center pt-2">
                  <h4 className="fs-20 font-weight-bold m-0 pb-3">
                    Talk to your travel specialists
                  </h4>

                  <Link
                    href={{
                      pathname: '/contact-us',
                      query: { package: pack.slug },
                    }}>
                    <a className="btn btn-contact btn-outline-dark fs-16 w-100">
                      Contact Us
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div
          className="col-12 fs-16 lh-29"
          dangerouslySetInnerHTML={{ __html: pack?.description }}
        />
      </div>
    </Element>
  );
}

export { TripOverview };
