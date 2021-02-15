import { Menu, NavToolbar, Newsletter, Notification } from '@/components/index';
import styles from './index.module.scss';

function Header({ destinations, packagetypes, notifications }) {
  return (
    <div className={styles.stickyHeader}>
      <Notification notifications={notifications} />
      <header>
        <Newsletter />
        <NavToolbar />
      </header>
      <Menu destinations={destinations} packagetypes={packagetypes} />
    </div>
  );
}

export { Header };
