import { Menu, NavToolbar, Newsletter } from '@/components/index';

function Header({ destinations, packagetypes, notification }) {
  return (
    <>
      {/*    
      {notification &&
        notification.map(item => (
          <div key={item.id} className="container-fluid text-center notification">
            <Link href={`/notification/${item.slug}`}>
              <a>{item.title}</a>
            </Link>
          </div>
        ))} 
        */}
      <header>
        <Newsletter />
        <NavToolbar />
      </header>
      <Menu destinations={destinations} packagetypes={packagetypes} />
    </>
  );
}

export { Header };
