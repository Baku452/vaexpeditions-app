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
        <div className="row position-relative">
          <div className="col-12 col-md-7 p-0 mb-5">
            <h6 className="font-weight-bold fs-15 text-white m-0 pb-4">
              For Tour Operators
            </h6>
            <p className="fs-15 text-white p-b-30 lh-23">
              USA and Canada Toll Free: (+1) 800 773 9048 <br />
              Peru: (+511) 298 8 300 <br />
              <br />
              E-mail: info@velanciatravelcusco.com <br />
              <br />
              Address: Portal Panes #123 / Centro Comercial Ruiseñores <br />
              Office #: 306-307 / Cusco - Peru
            </p>
            <h5 className="fs-15 font-weight-bold text-white pb-4">Follow us</h5>
            <a href="#" className="d-inline-block pb-2">
              {/*  <img width="50" src="static/img/ico-facebook.png" alt="" /> */}
              <Icon component={Facebook} viewBox="0 0 54 53" className="icon-size-l" />
            </a>
            <a href="#" className="d-inline-block  pb-2">
              <Icon component={Instagram} viewBox="0 0 59 58" className="icon-size-l" />
            </a>
            <a href="#" className="d-inline-block pb-2">
              <Icon component={Vimeo} viewBox="0 0 54 53" className="icon-size-l" />
            </a>
            <a href="#" className="d-inline-block pb-2">
              <Icon component={Pinterest} viewBox="0 0 55 55" className="icon-size-l" />
            </a>
            <a href="#" className="d-inline-block pb-2">
              <Icon component={Linkedin} viewBox="0 0 57 56" className="icon-size-l" />
            </a>
            <br />
            <a href="#" className="d-inline-block pb-2">
              <Icon component={Advisor} viewBox="0 0 54 53" className="icon-size-l" />
            </a>
            <a href="#" className="d-inline-block pb-2">
              <Icon component={Skype} viewBox="0 0 59 58" className="icon-size-l" />
            </a>
            <a href="#" className="d-inline-block pb-2">
              <Icon component={Youtube} viewBox="0 0 59 59" className="icon-size-l" />
            </a>
            <a href="#" className="d-inline-block pb-2">
              <Icon component={Twitter} viewBox="0 0 59 58" className="icon-size-l" />
            </a>
          </div>
          <div className="col-12 col-md-5 p-0">
            <h6 className="font-weight-bold fs-15 text-white m-0 pb-4">
              Explore Valencia Travel
            </h6>
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
                <a href="#">Our Purpos</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <a href="#" className="feedback d-none d-block-lg">
            Feedback
          </a>
        </div>
        <div className="row pt-5">
          <div className="col-12 p-0">
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
