import Link from 'next/link';
import { useRouter } from 'next/router';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Destinationitem({ item }) {
  return (
    !item.tailor_made &&
    item.active && (
      <li key={item.slug} className="pb-2 mb-2 pr-3">
        <Link
          href={{
            pathname: '/search',
            query: { destination: item.id },
          }}>
          <a>
            {item.title} {item.sub_title && `- ${item.sub_title}`}
          </a>
        </Link>
      </li>
    )
  );
}

function TailorMadeitem({ item }) {
  return (
    item.tailor_made &&
    item.active && (
      <li key={item.slug} className="pb-2 mb-2 pr-3">
        <Link
          href={{
            pathname: '/search',
            query: { destination: item.id },
          }}>
          <a>
            {item.title} {item.sub_title && `- ${item.sub_title}`}
          </a>
        </Link>
      </li>
    )
  );
}

function Nav({ destinations, setDestinations, countries, packagetypes }) {
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
    <div className="nav d-none d-lg-block">
      <div className="container p-0">
        <nav className="navbar navbar-expand-lg navbar-light d-none d-md-block px-0">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav">
              <li className="nav-item nav-destionations ">
                <a className={active(router.pathname, '/search')} role="button">
                  Destinations
                </a>
                <div className="destinations">
                  <div className="destinations-content">
                    <div className="container">
                      <div className="row">
                        {destinations &&
                          destinations.map(destination => (
                            <div key={destination.name} className="col-9">
                              <h5 className="font-weight-bold">{destination.name}</h5>
                              <ul className="destinations-items">
                                {destination.destinations.map(item => (
                                  <Destinationitem item={item} key={item.id} />
                                ))}
                              </ul>
                            </div>
                          ))}

                        <div className="col-12 pt-5 mt-4 pb-5">
                          <h5 className="font-weight-bold">
                            Other destinations in South America
                          </h5>

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
                </div>
              </li>
              <li className="nav-item nav-destionations">
                <a className={active(router.pathname, '/experiences')}>HOLYDAY TYPES</a>

                <div className="destinations ">
                  <div className="destinations-content">
                    <div className="container">
                      <div className="row">
                        <div className="col-9">
                          <h5 className="font-weight-bold">By Types</h5>
                          <ul className="destinations-items types-items">
                            {packagetypes &&
                              packagetypes.map(types => (
                                <li key={types.id} className="types-item pb-3">
                                  <i>
                                    {types.svg && (
                                      <img
                                        src={PUBLIC_API + types.svg}
                                        alt={types.title}
                                      />
                                    )}
                                  </i>

                                  <Link
                                    href={{
                                      pathname: '/search',
                                      query: { types: types.id },
                                    }}>
                                    <a>{types.title} </a>
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item nav-destionations">
                <a className={active(router.pathname, '/tailor-made-tour')}>
                  Tailor Made Tours
                </a>

                <div className="destinations">
                  <div className="destinations-content">
                    <div className="container">
                      <div className="row">
                        {destinations &&
                          destinations.map(destination => (
                            <div key={destination.name} className="col-12">
                              <h5 className="font-weight-bold">{destination.name}</h5>
                              <ul className="destinations-items">
                                {destination.destinations.map(item => (
                                  <TailorMadeitem item={item} key={item.id} />
                                ))}
                              </ul>
                            </div>
                          ))}

                        <div className="col-12 pt-5 mt-4 pb-5">
                          <h5 className="font-weight-bold">
                            Other destinations in South America
                          </h5>

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
                </div>
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
