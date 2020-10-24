import { useEffect, useState } from 'react';

import { Newsletter } from '@/components/index';

// import { destinations } from '@/core/index';
import { Nav } from '../nav/index';

function Header({ destinations, packagetypes }) {
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
        packagetypes={packagetypes}
      />
    </>
  );
}

export { Header };
