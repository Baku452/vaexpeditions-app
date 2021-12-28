import Link from 'next/link';
import React from 'react';

import styles from './index.module.scss';

function WaysToSave() {
  return (
    <>
      <section id="ways-to-save" className="container py-4 m-auto">
        <div className="col-12">
          <h2 className="text-center mb-5 titleUnderline">Ways To Save </h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6 text-center">
            <div className={`${styles.item}`}>
              <Link href="/our-newsletter">
                <div>
                  <img
                    alt="subscribe for deals"
                    src="icons/subscribe_for_deals.svg"
                    className={`${styles.img} card-img-top`}
                  />
                  <div className="card-body">
                    <a>Subscribe Newsletter</a>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 text-center">
            <div className={`${styles.item}`}>
              <Link href="/friends-and-family-discounts">
                <div>
                  <img
                    alt="friends and family"
                    src="icons/friends_and_family.svg"
                    className={`${styles.img} card-img-top`}
                  />
                  <div className="card-body">
                    <a>Friends and Family Discounts</a>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 text-center">
            <div className={`${styles.item}`}>
              <Link href="/refer-a-friend">
                <div>
                  <img
                    alt="referral Credits"
                    src="icons/refer_a_friends.svg"
                    className={`${styles.img} card-img-top`}
                  />
                  <div className="card-body">
                    <a>Refer a Friend</a>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 text-center">
            <div className={`${styles.item}`}>
              <Link href="/cuopons-discounts">
                <div>
                  <img
                    alt="coupons and discounts"
                    src="icons/coupons and discounts.svg"
                    className={`${styles.img} card-img-top`}
                  />
                  <div className="card-body">
                    <a>Special Promotions</a>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export { WaysToSave };
