import { useEffect, useState } from 'react';

import { Banners, Newsletter } from '@/components/index';

import { Nav } from '../nav/index';

function Header({ destinations, banners, packagetypes, interests }) {
  const [destinationList, setDestinationList] = useState([]);

  const destinationItems = destinations?.filter(item => item.id === 1);

  console.log('interests', interests);
  useEffect(() => {
    setDestinationList(destinationItems);
  }, []);

  return (
    <>
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
