import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { BsSearch } from 'react-icons/bs';
import { FaPhone } from 'react-icons/fa';

import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;
function Newsletter({ packagetypes, packagesAll }) {
  // States for React Suggestions
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [focus, setFocus] = useState(false);
  const router = useRouter();

  const FormatDays = num => {
    switch (num) {
      case 0:
        return 'Half-Day';
      case 1:
        return 'Full Day';
      default:
        return `${num} days`;
    }
  };

  // Check name
  if (value) {
    // eslint-disable-next-line no-unused-expressions
    !focus ? setFocus(true) : null;
  }
  const checkname = (name, str) => {
    const pattern = str
      .split('')
      .map(x => {
        return `(?=.*${x})`;
      })
      .join('');
    const regex = new RegExp(`${pattern}`, 'g');
    return name.match(regex);
  };
  // Teaching Autosuggest to filter suggestions
  // eslint-disable-next-line no-shadow
  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0
      ? []
      : packagesAll.filter(pack => {
          const xSub = pack.title.toLowerCase().slice(0, inputLength);
          return (
            pack.title.toLowerCase().includes(inputValue) || checkname(xSub, inputValue)
          );
        });
    // return inputLength === 0 ? [] : packagesAll.filter(pack =>
    //   pack.title.toLowerCase().slice(0, inputLength) === inputValue
    // );
  };

  // Teach Autosuggest how to calculate the input value
  const getSuggestionValue = suggestion => suggestion.title;

  // rendering suggestions
  const renderSuggestion = suggestion => (
    <Link href={`/${suggestion.slug}`}>
      <div className="d-flex justify-content-between">
        <p>
          {packagetypes.map(item =>
            parseInt(item.id, 10) === parseInt(suggestion.package_type, 10) ? (
              <img
                alt={suggestion.title}
                className={styles.svg}
                src={PUBLIC_API + item.svg}
              />
            ) : null,
          )}
          {suggestion.title}
        </p>
        <p>{FormatDays(suggestion.days)}</p>
      </div>
    </Link>
  );

  // Function to handle onChange Autosuggest
  const handleChangeSuggest = (e, { newValue }) => {
    setValue(newValue);
  };
  // Update suggest
  // eslint-disable-next-line no-shadow
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  // Function on suggestion selected
  function onSuggestionSelected(event, { suggestion }) {
    router.push({
      pathname: `/${suggestion.slug}`,
    });
  }

  // Function to clear suggestion
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  // Render Input Search Bar
  const renderInputComponent = inputProps => (
    <div className={`${styles.iconSearch}`}>
      <BsSearch />
      <input {...inputProps} />
    </div>
  );

  // Input props
  const inputProps = {
    placeholder: focus ? '' : 'Search For tours',
    value,
    onChange: handleChangeSuggest,
  };

  const handleSubmit = event => {
    event.preventDefault();
    router.push({
      pathname: '/search',
      // eslint-disable-next-line no-undef
      query: { dest: input },
    });
  };
  return (
    <div className={`header-lg container d-none d-lg-block pt-4 pb-4 ${styles.header}`}>
      <div className="row flex-nowrap justify-content-between align-items-start level-1">
        <div className="col-2 px-3 justify-content-center">
          <Link href="/">
            <a className="position-relative">
              <img
                alt="Logo Valencia Travel"
                className={styles.logo}
                src="/icons/logo_horizontalWeb.svg"
              />
            </a>
          </Link>
        </div>
        <div className="col-8">
          <div className="row">
            <div className={`col-12 ${styles.subnav}`}>
              <ul className="navbar-nav fs-13">
                <Link href="/travel-availability">
                  <li className={styles.nav}>
                    <a role="button">Travel Availability</a>
                  </li>
                </Link>
                <Link href="/new-risk">
                  <li className={styles.nav}>
                    <a role="button">New Risk-Free Flexible Booking Offer</a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="row justify-content-between align-items-start">
            <div className="col-auto p-0">
              {/* <p className="m-0 fs-13">Subscribe to our newsletter</p> */}
              <Form
                className="form-inline p-1"
                // noValidate
                // validated={validated}
                onSubmit={handleSubmit}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}>
                <label className={`${focus ? styles.labelFocus : styles.label}`}>
                  Search For tours
                </label>
                <Autosuggest
                  highlightFirstSuggestion
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={onSuggestionsClearRequested}
                  getSuggestionValue={getSuggestionValue}
                  renderSuggestion={renderSuggestion}
                  inputProps={inputProps}
                  theme={styles}
                  onSuggestionSelected={onSuggestionSelected}
                  renderInputComponent={renderInputComponent}
                />
              </Form>
            </div>

            <div className="col-auto pt-3">
              <div className="row flex-nowrap align-items-center">
                <div className="col-auto p-0">
                  <OverlayTrigger
                    key="bottom"
                    delay={{ show: 250, hide: 1200 }}
                    placement="bottom"
                    overlay={
                      <Tooltip className={`${styles.tooltip}`} id="tooltip-bottom">
                        <a href="tel:1 - (860) 856 5858">
                          (Usa / Canada) Customer Service: 1 - (860) 856 5858
                        </a>
                        <br />
                        <a href="tel:1 - (917) 983 2727">
                          Sales: 1 - (917) 983 2727
                        </a>{' '}
                        <br />
                        <a href="tel:51979706464">Peru: +51-979706464 </a>
                      </Tooltip>
                    }>
                    <Button className="btn btn-light">
                      <FaPhone />{' '}
                      <a href="tel:1-(888)803-8004">Toll free : 1-(888)803-8004</a>
                    </Button>
                  </OverlayTrigger>
                </div>
                <div className="col-auto">
                  <Link href="/contact-us">
                    <button type="button" className="btn btn-primary">
                      CONTACT US
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Newsletter };
