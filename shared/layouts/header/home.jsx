import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Banners, Newsletter } from '@/components/index';

import { Nav } from '../nav/index';

function Header({ destinations, banners, packagetypes, interests, notification }) {
  const [destinationList, setDestinationList] = useState([]);

  const destinationItems = destinations?.filter(item => item.id === 1);

  useEffect(() => {
    setDestinationList(destinationItems);
  }, []);

  return (
    <>
      {notification &&
        notification.map(item => (
          <div key={item.id} className="container-fluid text-center notification">
            <Link href={`/notification/${item.slug}`}>
              <a>{item.title}</a>
            </Link>
          </div>
        ))}

      <header>
        <Newsletter />
      </header>
      <Nav
        destinations={destinationList}
        setDestinations={setDestinationList}
        countries={destinations}
        packagetypes={packagetypes}
      />
      <Banners
        destinations={destinationList}
        banners={banners}
        packagetypes={packagetypes}
        interests={interests}
      />
    </>
  );
}

export { Header };
