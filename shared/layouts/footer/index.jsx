import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterestSquare,
  FaSkype,
  FaTripadvisor,
  FaVimeoSquare,
  FaYoutube,
} from 'react-icons/fa';

import styles from './index.module.scss';

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={`container ${styles.container}`}>
          <div className={`row position-relative pb-4 mb-4 ${styles.title}`}>
            <div className="col-12 col-md-4 col-lg-3 text-left text-white pb-4">
              <h6 className="text-white font-weight-bold fs-13 pb-2 ">DESTINATIONS</h6>
              <ul className="fs-15">
                <li>
                  <Link href="/destination/argentina">
                    <a href="#">Argentina</a>
                  </Link>
                </li>
                <li>
                  <Link href="/destination/bolivia ">
                    <a href="#">Bolivia</a>
                  </Link>
                </li>
                <li>
                  <Link href="/destination/brasil">
                    <a href="#">Brasil</a>
                  </Link>
                </li>
                <li>
                  <Link href="/destination/chile">
                    <a href="#">Chile</a>
                  </Link>
                </li>
                <li>
                  <Link href="/destination/colombia">
                    <a href="#">Colombia</a>
                  </Link>
                </li>
                <li>
                  <Link href="/destination/costa-rica">
                    <a href="#">Costa Rica</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 col-lg-3 text-left text-white pb-4">
              <h6 className="text-white font-weight-bold fs-13 pb-2 ">
                EXPLORE VALENCIA TRAVEL
              </h6>

              <ul className="fs-15">
                <li>
                  <Link href="/search">
                    <a href="#">Destinations</a>
                  </Link>
                </li>
                <li>
                  <Link href="/tailor-made-tour">
                    <a href="#">Tailor Made Tours</a>
                  </Link>
                </li>
                <li>
                  <Link href="/our-purpose">
                    <a>Our Purpose</a>
                  </Link>
                </li>
                <li>
                  <a href="/blog">Passion Passport</a>
                </li>
                <li>
                  <Link href="/contact-us">
                    <a>Contact Us</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 col-lg-3 text-left text-white pb-4">
              <h6 className="text-white font-weight-bold fs-13 pb-2 ">COMPANY</h6>

              <ul className="fs-15">
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
            <div className="col-12 col-md-12 col-lg-3 text-left text-white pb-4">
              <h6 className="text-white font-weight-bold fs-13 pb-2 "> FOLLOW US</h6>
              <div>
                <a
                  href="https://www.facebook.com/valenciatravelcusco/"
                  target="_blank"
                  rel="noreferrer"
                  className="d-inline-block pb-3 pr-3">
                  <FaFacebook className="icon-size-m" />
                </a>
                <a
                  href="https://www.instagram.com/valenciatravelcusco/"
                  target="_blank"
                  rel="noreferrer"
                  className="d-inline-block  pb-3 pr-3">
                  <FaInstagram className="icon-size-m" />
                </a>
                <a
                  href="https://vimeo.com/user131526189"
                  target="_blank"
                  rel="noreferrer"
                  className="d-inline-block pb-3 pr-3">
                  <FaVimeoSquare className="icon-size-m" />
                </a>
                <a
                  href="https://www.pinterest.com/Valencia100/_created/"
                  target="_blank"
                  rel="noreferrer"
                  className="d-inline-block pb-3 pr-3">
                  <FaPinterestSquare className="icon-size-m" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/company/valencia-travel-cusco/"
                  target="_blank"
                  rel="noreferrer"
                  className="d-inline-block pb-3 pr-3">
                  <FaLinkedin className="icon-size-m" />
                </a>
                <a
                  href="https://www.tripadvisor.com/UserReviewEdit-g294314-d2469804-Valencia_Travel_Day_Tours-Cusco_Cusco_Region.html"
                  target="_blank"
                  rel="noreferrer"
                  className="d-inline-block pb-3 pr-3">
                  <FaTripadvisor className="icon-size-m" />
                </a>
                <a
                  href="skype:valenciatravel.cusco?call"
                  className="d-inline-block pb-3 pr-3">
                  <FaSkype className="icon-size-m" />
                </a>
                <a
                  href="https://www.youtube.com/ValenciaTravelCuscoPeru"
                  target="_blank"
                  rel="noreferrer"
                  className="d-inline-block pb-3 pr-3">
                  <FaYoutube className="icon-size-m" />
                </a>
              </div>
            </div>
          </div>

          <div className="row position-relative">
            <div className="col-12 p-0 text-center">
              <p className="m-0 fs-13 text-white">
                2021 Va Expeditions, Inc. All Rights Reserved:
                <Link href="/terms-conditions">
                  <a href="#" className="skyblue">
                  {' '}
                    Terms & Conditions
                  </a>
                </Link>
                -
                <Link href="/contact-us">
                  <a href="#" className="skyblue">
                    {' '}
                    Contact us
                  </a>
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
