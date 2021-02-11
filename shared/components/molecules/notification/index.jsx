import Link from 'next/link';

import styles from './index.module.scss';

function Notification({ notifications }) {
  return (
    <>
      {notifications &&
        notifications.map(item => (
          <div
            key={item.id}
            className={`container-fluid text-center notification ${styles.notification}`}>
            <Link href={`/notification/${item.slug}`}>
              <a>{item.title}</a>
            </Link>
          </div>
        ))}
    </>
  );
}

export { Notification };
