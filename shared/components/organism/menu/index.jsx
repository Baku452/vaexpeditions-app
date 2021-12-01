import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

const handleFocus = (item, where, setDestinations, setDestFocused) => {
  // console.log(item);
  console.log('A');
  setDestFocused(item);
  setDestinations(where);
};
function MenuItem({
  title,
  subtitle,
  slug,
  where,
  item,
  setDestinations,
  setDestFocused,
}) {
  return (
    <Link href={`/destination/${slug}`}>
      <a
        onFocus={() => handleFocus(item, where, setDestinations, setDestFocused)}
        onMouseOver={() => handleFocus(item, where, setDestinations, setDestFocused)}
        className={`${styles.route} d-block mb-3 mr-5`}>
        {title} - {subtitle}
      </a>
    </Link>
  );
}

function MenuContent({ continents }) {
  const [destinationsList, setDestinations] = useState([]);
  const [destFocused, setDestFocused] = useState([]);
  return (
    <div className={styles.menu}>
      <div className={styles.content}>
        <div className="container d-block">
          <div className="row">
            {continents &&
              continents.map(continent => (
                <div key={continent.name} className="col-12">
                  <h5 className="font-weight-bold mb-3">
                    <Link href={`/continent/${continent.slug}`}>
                      <a className="black">{continent.name}</a>
                    </Link>
                  </h5>
                  <div className="row">
                    <div className={`${styles.items} col-4`}>
                      {continent.destinations.map(item => (
                        <MenuItem
                          key={item.id}
                          title={item.title}
                          subtitle={item.sub_title}
                          id={item.id}
                          slug={item.slug}
                          where={item.where}
                          item={item}
                          setDestinations={setDestinations}
                          setDestFocused={setDestFocused}
                        />
                      ))}
                    </div>
                    <div className="col-4">
                      <h3>List de Subdestinos</h3>
                      <ul>
                        {destinationsList
                          ? destinationsList.map(item => (
                              <li key={item.title}>{item.title}</li>
                            ))
                          : null}
                      </ul>
                    </div>
                    <div className="col-4">
                      {destFocused ? (
                        <>
                          <h3>{destFocused.title}</h3>
                          <img
                            alt={destFocused.title}
                            src={PUBLIC_API + destFocused.thumbnail}
                          />
                          <p>{destFocused.summary}</p>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuHoliday({ packagetypes }) {
  return (
    <div className={styles.menu}>
      <div className={styles.content}>
        <div className="container d-block">
          <div className="row">
            <div className="col-12">
              <h5 className="font-weight-bold black">By Types</h5>
              <ul className={`${styles.items} row`}>
                {packagetypes &&
                  packagetypes.map(types => (
                    <li key={types.id} className={`${styles.types} col-3`}>
                      <i className={styles.svg}>
                        {types.svg && (
                          <img src={PUBLIC_API + types.svg} alt={types.title} />
                        )}
                      </i>

                      <Link
                        className={styles.Link}
                        href={{
                          pathname: '/search',
                          query: { types: types.id },
                        }}>
                        <a className={styles.route}>{types.title} </a>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Menu({ destinations: destinationsCurrent, packagetypes, fixed }) {
  const router = useRouter();
  const [destinations, setDestinations] = useState([]);
  const countries = destinationsCurrent;

  function changeCountry(event, id) {
    event.preventDefault();
    const destination = countries.filter(item => item.id === id);
    setDestinations(destination);
  }

  useEffect(() => {
    setDestinations(destinationsCurrent?.filter(item => item.id === 1));
  }, []);

  function active(pathname, page) {
    return pathname === page ? 'nav-link active' : 'nav-link';
  }

  return (
    <div className={`${styles.toolbar} d-none d-lg-block`}>
      <div className="container p-0 d-block">
        <nav className="navbar-expand-lg d-none d-md-block px-0 position-static">
          <div className="collapse navbar-collapse">
            {fixed ? (
              <Link href="/">
                <a className="position-relative">
                  <img
                    alt="Logo Valencia Travel"
                    className={styles.logo}
                    src="/images/VTC_Logotipo_Horizontal_blanco.svg"
                  />
                </a>
              </Link>
            ) : null}
            <ul className="navbar-nav">
              <li className={styles.nav}>
                <a
                  className={`${active(router.pathname, '/search')} ${styles.link}`}
                  role="button">
                  Destinations
                </a>
                <MenuContent
                  continents={destinations}
                  changeCountry={changeCountry}
                  tailorMade={false}
                />
              </li>
              <li className={styles.nav}>
                <a
                  className={`${active(router.pathname, '/experiences')} ${styles.link}`}
                  role="button">
                  Holiday Types
                </a>
                <MenuHoliday packagetypes={packagetypes} />
              </li>
              <li className={styles.nav}>
                <Link href="/tailor-made-tour">
                  <a
                    className={`${active(router.pathname, '/tailor-made-tour')} ${
                      styles.link
                    }`}
                    role="button">
                    Tailor-Made Tours
                  </a>
                </Link>
              </li>
              <li className={styles.nav}>
                <Link href="/our-purpose">
                  <a
                    className={`${active(router.pathname, '/our-purpose')} ${
                      styles.link
                    }`}
                    role="button">
                    Our Purpose
                  </a>
                </Link>
              </li>
              <li className={styles.nav}>
                <Link href="/blog">
                  <a className={`nav-link ${styles.link}`}>Blog</a>
                </Link>
              </li>
              <li className={styles.nav}>
                <Link href="/contact-us">
                  <a
                    className={`${active(router.pathname, '/contact-us')} ${styles.link}`}
                    role="button">
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
            {fixed ? (
              <div className="col-auto">
                <Link href="/contact-us">
                  <button
                    type="button"
                    style={{ backgroundColor: '#a6192e', border: 'none' }}
                    className="btn btn-primary">
                    Book Your Adventure!
                  </button>
                </Link>
              </div>
            ) : null}
          </div>
        </nav>
      </div>
    </div>
  );
}

export { Menu };
