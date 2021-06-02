import { Menu, NavToolbar, Newsletter, Notification } from '@/components/index';

function Header({ destinations, packagetypes, notifications, packagesAll }) {
  return (
    <>
      <Notification notifications={notifications} />
      <header>
        <Newsletter packagetypes={packagetypes} packagesAll={packagesAll} />
        <NavToolbar destinations={destinations} packagetypes={packagetypes} />
      </header>
      <Menu destinations={destinations} packagetypes={packagetypes} />
    </>
  );
}

export { Header };
