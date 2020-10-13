import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Nav({ destinations, setDestinations, countries }) {
  const router = useRouter();

  function changeCountry(event, id) {
    event.preventDefault();
    const destination = countries.filter(item => item.id === id);
    setDestinations(destination);
  }

  function active(pathname, page) {
    return pathname === page ? 'nav-link active' : 'nav-link';
  }

  return (
    <div className="nav">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light p-l-50 d-none d-md-flex">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav">
              <li className="nav-item nav-destionations">
                <a
                  className={active(router.pathname, '/search')}
                  /* className="nav-link dropdown-toggle"  */ role="button">
                  Destinations
                </a>
                <div className="destinations">
                  <div className="destinations-content">
                    <div className="row">
                      {destinations.length > 0 &&
                        destinations.map(destination => (
                          <div
                            key={destination.name}
                            className="col-8 destinations-column">
                            <h4 className="font-weight-bold">{destination.name}</h4>
                            <ul className="destinations-items">
                              {destination.destinations.map(item => (
                                <li key={item.slug}>
                                  <Link
                                    href={{
                                      pathname: '/search',
                                      query: { destination: item.id },
                                    }}>
                                    <a>{item.title}</a>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}

                      <div className="col-4">
                        <ul>
                          {countries &&
                            countries.map(item => (
                              <li key={item.name}>
                                <a
                                  href="#"
                                  onClick={event => changeCountry(event, item.id)}>
                                  {item.name}
                                </a>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link href="/experiences">
                  <a className={active(router.pathname, '/experiences')}>Experiences</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/tailor-made-tour">
                  <a className={active(router.pathname, '/tailor-made-tour')}>
                    Tailor Made Tours
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/our-purpose">
                  <a className={active(router.pathname, '/our-purpose')}>Our Purpose</a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <Link href="/contact-us">
                  <a className={active(router.pathname, '/contact-us')}>Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export { Nav };
