/* eslint-disable max-len */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { menuAbout } from '@/core/index';

import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function MenuAbout({ items, changeAbout }) {
  return (
    <div className={`${styles.menu}`}>
      <div className={`${styles.content} `}>
        <div className="container ">
          <div className="row">
            <div className="col-4">
              <h4 className="fw-bold black">About Va Expeditions</h4>
              {menuAbout.map(
                item =>
                  item && (
                    <div key={item.titulo} className="col-12">
                      <ul className={`${styles.itemsAbout}`}>
                        <Link href={item.slug}>
                          <li
                            onFocus={event => changeAbout(event, item.id)}
                            onMouseOver={event => changeAbout(event, item.id)}>
                            {item.titulo}
                          </li>
                        </Link>
                      </ul>
                    </div>
                  ),
              )}
            </div>
            <div className={`${styles.extendAbout} col-8`}>
              <ul>
                {items.map(item => (
                  <li key={item.titulo}>
                    <Link key={item.slug} href={item.slug ? item.slug : '#'}>
                      <a>{item.titulo}</a>
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

const handleFocus = (item, where, setDestinations, setDestFocused) => {
  setDestFocused(item);
  setDestinations(where);
};
function MenuItem({
  id,
  title,
  slug,
  where,
  item,
  setDestinations,
  setDestFocused,
  focusedID,
}) {
  return (
    <div className={`${styles.itemsMenu} `}>
      <Link href={`/destination/${slug}`}>
        <a
          onFocus={() => handleFocus(item, where, setDestinations, setDestFocused)}
          onMouseOver={() => handleFocus(item, where, setDestinations, setDestFocused)}
          className={`${styles.route} ${id === focusedID ? 'active' : ''} me-5`}>
          {title}
        </a>
      </Link>
    </div>
  );
}

function MenuContent({
  continents,
  destFocused,
  setDestFocused,
  destinationsList,
  setDestinations,
  imageMenu,
}) {
  return (
    <div className={styles.menu}>
      <div className={styles.content}>
        <div className="container d-block">
          <div className="row">
            {continents &&
              continents.map(continent => (
                <div key={continent.name} className="col-12">
                  <h5 className="fw-bold mb-3">
                    <Link href={`/continent/${continent.slug}`}>
                      <a
                        onMouseOver={() => {
                          setDestFocused([]);
                          setDestinations([]);
                        }}
                        onFocus={() => {
                          setDestFocused([]);
                          setDestinations([]);
                        }}
                        className="black ">
                        {continent.name}
                      </a>
                    </Link>
                  </h5>
                  <div className="row">
                    <div className="col-3">
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
                          focusedID={destFocused.id}
                        />
                      ))}
                    </div>
                    <div className="col-9 p-0">
                      <div
                        className={`${
                          destFocused.id ? 'col-3' : 'a'
                        }  position-absolute ${styles.itemsSubMenu} `}>
                        <>
                          {destinationsList.length > 0 ? (
                            <ul>
                              {destinationsList.map(item => (
                                <li key={item.title}>
                                  <Link
                                    href={`/destination/${destFocused.slug}/${item.slug}`}>
                                    <a> {item.title}</a>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <div className={`${styles.itemsSubMenu__content} `}>
                              <h3>Find your Destination</h3>
                              <h4>VA Expeditions</h4>
                            </div>
                          )}
                        </>
                      </div>
                      <div className={`${styles.itemsThumb}`}>
                        {imageMenu ? (
                          <img alt={destFocused.title} src={PUBLIC_API + imageMenu} />
                        ) : (
                          <img alt={destFocused.title} src="/images/portada3.jpg" />
                        )}
                      </div>
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
              <h4 className="fw-bold black">By Types</h4>
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
  );
}

function Menu({ destinations: destinationsCurrent, packagetypes, fixed }) {
  const router = useRouter();
  const [destinations, setDestinations] = useState([]);
  const [destFocused, setDestFocused] = useState([]);
  const [itemsAbout, setItemsAbout] = useState(menuAbout[0].submenu);
  const [destinationsList, setDestinationsList] = useState([]);
  const [imageMenu, setImageMenu] = useState();

  const countries = destinationsCurrent;

  function changeCountry(event, id) {
    event.preventDefault();
    const destination = countries.filter(item => item.id === id);
    setDestinations(destination);
  }

  function changeAbout(event, id) {
    event.preventDefault();
    const about = menuAbout.filter(item => item.id === id);
    setItemsAbout(about[0].submenu);
  }

  useEffect(() => {
    setDestinations(destinationsCurrent?.filter(item => item.id === 1));
  }, []);

  useEffect(() => {
    setImageMenu(destFocused.image_home);
  }, [destFocused]);

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
                  role="button"
                  onMouseOver={() => {
                    setDestFocused([]);
                    setDestinationsList([]);
                  }}
                  onFocus={() => {
                    setDestFocused([]);
                    setDestinationsList([]);
                  }}>
                  Destinations
                </a>
                <MenuContent
                  continents={destinations}
                  changeCountry={changeCountry}
                  tailorMade={false}
                  destFocused={destFocused}
                  setDestFocused={setDestFocused}
                  destinationsList={destinationsList}
                  setDestinations={setDestinationsList}
                  imageMenu={imageMenu}
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
                <Link href="/about/who-we-are">
                  <a
                    className={`${active(router.pathname, '/about/who-we-are')} ${
                      styles.link
                    }`}
                    role="button">
                    About
                  </a>
                </Link>
                <MenuAbout items={itemsAbout} changeAbout={changeAbout} />
              </li>
              <li className={styles.nav}>
                <Link href="/blog">
                  <a className={`nav-link ${styles.link}`}>Passion Passport - Blog</a>
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
