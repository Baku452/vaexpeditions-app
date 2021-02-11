import { Menu, NavToolbar, Newsletter, Notification } from '@/components/index';

function Header({ destinations, packagetypes, notifications }) {
  return (
    <>
      <Notification notifications={notifications} />
      <header>
        <Newsletter />
        <NavToolbar />
      </header>
      <Menu destinations={destinations} packagetypes={packagetypes} />
    </>
  );
}

export { Header };
