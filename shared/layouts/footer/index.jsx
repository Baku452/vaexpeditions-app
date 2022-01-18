import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterestSquare,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

import styles from './index.module.scss';

function Footer({ continents }) {
  return (
    <>
      <footer className={styles.footer}>
        <div className={`container ${styles.container}`}>
          <div className={`row position-relative pb-4 mb-4 ${styles.title}`}>
            <div className="col-12 col-md-4 col-lg-3 text-start text-white pb-4">
              <h6 className="text-white fw-bold fs-13 pb-2">DESTINATIONS</h6>

              <ul className={`fs-15 list-unstyled ${styles.lista} `}>
                {continents.map(continent =>
                  continent.destinations.map(item => (
                    <li key={item.slug}>
                      <Link href={`/destination/${item.slug}`}>
                        <a> {item.title}</a>
                      </Link>
                    </li>
                  )),
                )}
              </ul>
            </div>
            <div className="col-12 col-md-4 col-lg-3 text-start text-white pb-4">
              <h6 className="text-white fw-bold fs-13 pb-2 ">EXPLORE VA EXPEDITIONS</h6>

              <ul className="fs-15 list-unstyled">
                <li>
                  <Link href="/search">
                    <a>Destinations</a>
                  </Link>
                </li>
                <li>
                  <Link href="/tailor-made-tour">
                    <a>Tailor-Made Tours</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about/who-we-are">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <a href="/blog">Passion Passport - Blog</a>
                </li>
                <li>
                  <Link href="/contact-us">
                    <a>Contact Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/pages/privacy-policy-of-va-expeditions">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 col-lg-3 text-start text-white pb-4">
              <h6 className="text-white fw-bold fs-13 pb-2 ">COMPANY</h6>

              <ul className="fs-15 list-unstyled">
                <li>
                  <a href="tel:+18888038004">
                    USA and Canada Toll Free: <br /> <b>1-(888)803-8004</b>
                  </a>
                </li>
                <li>
                  <a href="tel:+5184255907">
                    Peru: <br />
                    <b>(+51) 84 255907</b>
                  </a>
                </li>
                <li>
                  Address:
                  <br />
                  Portal Panes #123 / Centro Comercial Ruiseñores Office #: 306-307
                  <br />
                  <b>Cusco - Peru</b>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-12 col-lg-3 text-start text-white pb-4">
              <h6 className="text-white fw-bold fs-13 pb-2 "> FOLLOW US</h6>
              <div>
                <a
                  href="https://www.facebook.com/vaexpeditions/"
                  target="_blank"
                  rel="noreferrer"
                  className="d-inline-block pb-3 pe-3">
                  <FaFacebook className="icon-size-m" />
                </a>
                <a
                  href="https://www.instagram.com/vaexpeditions/"
                  target="_blank"
                  rel="noreferrer"
                  className="d-inline-block  pb-3 pe-3">
                  <FaInstagram className="icon-size-m" />
                </a>
                {/* <a
                  href="https://vimeo.com/user131526189"
                  target="_blank"
                  rel="noreferrer"
                  className="d-inline-block pb-3 pe-3">
                  <FaVimeoSquare className="icon-size-m" />
                </a> */}
                <a
                  href="https://www.pinterest.com/vaexpeditions/"
                  target="_blank"
                  rel="noreferrer"
                  className="d-inline-block pb-3 pe-3">
                  <FaPinterestSquare className="icon-size-m" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/company/vaexpeditions/"
                  target="_blank"
                  rel="noreferrer"
                  className="d-inline-block pb-3 pe-3">
                  <FaLinkedin className="icon-size-m" />
                </a>
                {/* <a
                  href="https://www.tripadvisor.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="d-inline-block pb-3 pe-3">
                  <FaTripadvisor className="icon-size-m" />
                </a> */}

                <a
                  href="https://www.youtube.com/channel/UCvMe8o6P4jsvaKBKdfc2ffA"
                  target="_blank"
                  rel="noreferrer"
                  className="d-inline-block pb-3 pe-3">
                  <FaYoutube className="icon-size-m" />
                </a>
                <a
                  href="https://twitter.com/vaexpeditions"
                  target="_blank"
                  rel="noreferrer"
                  className="d-inline-block pb-3 pe-3">
                  <FaTwitter className="icon-size-m" />
                </a>
              </div>
            </div>
          </div>

          <div className="row position-relative">
            <div className="col-12 p-0 text-center">
              <p className="m-0 fs-13 text-white">
                2022 Va Expeditions, Inc. All Rights Reserved:
                <Link href="/terms-conditions">
                  <a className="skyblue"> Terms & Conditions</a>
                </Link>
                -
                <Link href="/contact-us">
                  <a className="skyblue"> Contact us</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export { Footer };
