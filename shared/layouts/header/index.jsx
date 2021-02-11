import { Menu, NavToolbar, Newsletter } from '@/components/index';
import styles from './index.module.scss';


function Header({ destinations, packagetypes, notification }) {
  return (
    <div className={styles.stickyHeader}>

      {notification &&
        notification.map(item => (
          <div key={item.id} className="container-fluid text-center notification">
            <Link href={`/notification/${item.slug}`}>
              <a>{item.title}</a>
            </Link>
          </div>
        ))}
      <h1>{notification}</h1>
      <header>
        <Newsletter />
        <NavToolbar />
      </header>
      <Menu destinations={destinations} packagetypes={packagetypes} />
    </div>
  );
}

export { Header };
