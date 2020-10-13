import { useEffect, useState } from 'react';

import { Banners, Newsletter } from '@/components/index';

import { Nav } from '../nav/index';

function Header({ destinations, banners, packagetypes }) {
  const [destinationList, setDestinationList] = useState([]);

  const destinationItems = destinations?.filter(item => item.id === 1);

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
      />
      <Banners
        destinations={destinationList}
        setDestinations={setDestinationList}
        banners={banners}
        packagetypes={packagetypes}
      />
    </>
  );
}

export { Header };
