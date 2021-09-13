import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function MenuItem({ title, subtitle, id, slug }) {
  return (
    <li key={id} className="pb-3 pr-5">
      <Link
        href={{
          pathname: `/destination/${slug}`,
        }}>
        <a className={styles.route}>
          {title} - {subtitle}
        </a>
      </Link>
    </li>
  );
}

function MenuContent({ continents }) {
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
                  <ul className={styles.items}>
                    {continent.destinations.map(item => (
                      <MenuItem
                        key={item.id}
                        title={item.title}
                        subtitle={item.sub_title}
                        id={item.id}
                        slug={item.slug}
                      />
                    ))}
                  </ul>
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

function Menu({ destinations: destinationsCurrent, packagetypes }) {
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
                    Tailor Made Tours
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
          </div>
        </nav>
      </div>
    </div>
  );
}

export { Menu };
