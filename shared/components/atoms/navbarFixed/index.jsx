import React from 'react';
import { Link as LinkScroll } from 'react-scroll';

import styles from './index.module.scss';

const NavBarFixed = ({ items }) => {
  return (
    <nav className={styles.barra}>
      <ul>
        {items
          ? items.map(item => (
              <li key={item.id}>
                <LinkScroll
                  activeClass="activeNavBar"
                  isDynamic
                  spy
                  duration={1000}
                  offset={-110}
                  to={item.slug}
                  key={item.id}>
                  {item.title}
                </LinkScroll>
              </li>
            ))
          : null}
      </ul>
    </nav>
  );
};

export { NavBarFixed };
