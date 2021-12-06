import React, { useEffect, useState } from 'react';

import { Menu, NavToolbar, Newsletter, Notification } from '@/components/index';

import styles from './index.module.scss';

function Header({ destinations, packagetypes, notifications, packagesAll, pixels }) {
  const [showMenu, setShowMenu] = useState(false);
  const pixelsH = pixels || 900;
  const handleScroll = () => {
    if (document.documentElement.scrollTop >= pixelsH) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <header className={styles.stickyHeaderRes}>
        <Notification notifications={notifications} />
        <Newsletter packagetypes={packagetypes} packagesAll={packagesAll} />

        <div
          className={`${styles.headerFixed} ${
            showMenu ? styles.fixed : styles.notFixed
          }`}>
          <NavToolbar destinations={destinations} packagetypes={packagetypes} />
          <Menu
            destinations={destinations}
            packagetypes={packagetypes}
            fixed={showMenu}
          />
        </div>
      </header>
    </>
  );
}

export { Header };
