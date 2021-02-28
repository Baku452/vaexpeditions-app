import { Menu, NavToolbar, Newsletter, Notification } from '@/components/index';
import styles from './index.module.scss';

function Header({ destinations, packagetypes, notifications }) {
  return (
    <>
      <Notification notifications={notifications} />
      <header className={styles.stickyHeader}>
        <Newsletter />
        <NavToolbar />
      </header>
      <Menu destinations={destinations} packagetypes={packagetypes} />
    </>
  );
}

export { Header };
