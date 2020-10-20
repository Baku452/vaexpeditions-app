import { Icon } from '@/components/index';
import Advisor from '@/icons/advisor.svg';
import Facebook from '@/icons/facebook.svg';
import Instagram from '@/icons/instagram.svg';
import Linkedin from '@/icons/linkedin.svg';
import Pinterest from '@/icons/pinterest.svg';
import Skype from '@/icons/skype.svg';
import Twitter from '@/icons/twitter.svg';
import Vimeo from '@/icons/vimeo.svg';
import Youtube from '@/icons/youtube.svg';

function Footer() {
  return (
    <footer>
      <div className="container bc-000000">
        <div className="row position-relative pb-5 mb-5  footer-title">
          <div className="col-4 text-center text-white font-weight-bold">
            DESTINATIONS
          </div>
          <div className="col-4 text-center text-white font-weight-bold">
            EXPLORE VALENCIA TRAVEL
          </div>
          <div className="col-4 text-center text-white font-weight-bold">FOLLOW US</div>
        </div>

        <div className="row position-relative pb-5 mb-5 footer-title">
          <div className="col-3 text-left text-white">
            <ul className="fs-15">
              <li>
                <a href="#">Arequipa</a>
              </li>
              <li>
                <a href="#">Cusco</a>
              </li>
              <li>
                <a href="#">Lima</a>
              </li>
              <li>
                <a href="#">Nazca</a>
              </li>
              <li>
                <a href="#">Amazon</a>
              </li>
              <li>
                <a href="#">Titicaca Lake</a>
              </li>
            </ul>
          </div>
          <div className="col-3 text-left text-white">
            <ul className="fs-15">
              <li>
                <a href="#">Destinations</a>
              </li>
              <li>
                <a href="#">Experiencies</a>
              </li>
              <li>
                <a href="#">Tailor Made Tours</a>
              </li>
              <li>
                <a href="#">Our Purpose</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-3 text-left text-white">
            <ul className="fs-15">
              <li>
                <a href="#">Arequipa</a>
              </li>
              <li>
                <a href="#">Cusco</a>
              </li>
              <li>
                <a href="#">Lima</a>
              </li>
              <li>
                <a href="#">Nazca</a>
              </li>
              <li>
                <a href="#">Amazon</a>
              </li>
              <li>
                <a href="#">Titicaca Lake</a>
              </li>
            </ul>
          </div>
          <div className="col-3 text-left text-white">
            <a href="#" className="d-inline-block pb-4 pr-1">
              <Icon component={Facebook} viewBox="0 0 54 53" className="icon-size-l" />
            </a>
            <a href="#" className="d-inline-block  pb-4 pr-1">
              <Icon component={Instagram} viewBox="0 0 59 58" className="icon-size-l" />
            </a>
            <a href="#" className="d-inline-block pb-4 pr-1">
              <Icon component={Vimeo} viewBox="0 0 54 53" className="icon-size-l" />
            </a>
            <a href="#" className="d-inline-block pb-4 pr-1">
              <Icon component={Pinterest} viewBox="0 0 55 55" className="icon-size-l" />
            </a>
            <a href="#" className="d-inline-block pb-4 pr-1">
              <Icon component={Linkedin} viewBox="0 0 57 56" className="icon-size-l" />
            </a>
            <a href="#" className="d-inline-block pb-4 pr-1">
              <Icon component={Advisor} viewBox="0 0 54 53" className="icon-size-l" />
            </a>
            <a href="#" className="d-inline-block pb-4 pr-1">
              <Icon component={Skype} viewBox="0 0 59 58" className="icon-size-l" />
            </a>
            <a href="#" className="d-inline-block pb-4 pr-1">
              <Icon component={Youtube} viewBox="0 0 59 59" className="icon-size-l" />
            </a>
            <a href="#" className="d-inline-block pb-4 pr-1">
              <Icon component={Twitter} viewBox="0 0 59 58" className="icon-size-l" />
            </a>
          </div>
        </div>
        <div className="row position-relative ">
          <div className="col-12 col-md-12 p-0 mb-4">
            <p className="fs-15 text-center text-white p-b-30 address">
              USA and Canada Toll Free: <b>(+1) 800 773 9048</b> Peru:
              <b>(+511) 298 8 300</b>
              <br />
              E-mail: <b>info@velanciatravelcusco.com </b>
              <br />
              <br />
              Address: Portal Panes #123 / Centro Comercial Ruiseñores <br />
              Office #: 306-307 / Cusco - Peru
            </p>
          </div>
          {/*  <a href="#" className="feedback d-none d-block-lg">
            Feedback
          </a> */}
        </div>
        <div className="row pt-1 pb-4">
          <div className="col-12 p-0 text-center">
            <p className="m-0 fs-15 text-white d-none d-md-block">
              2016 Valencia Travel Cusco, Inc. All Rights Reserved: Terms & Conditions -
              Contact us
            </p>
            <p className="m-0 fs-15 text-white d-md-none">
              2016 Valencia Travel Cusco, Inc. All Rights Reserved: <br />
              <br />
              Terms & Conditions - Contact us
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
