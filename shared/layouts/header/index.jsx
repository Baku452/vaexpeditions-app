import { useEffect, useState } from 'react';

import { Newsletter } from '@/components/index';
import { destinations } from '@/core/index';

import { Nav } from '../nav/index';

function Header() {
  const [countries, setCountries] = useState([]);
  const [destinationList, setDestinationList] = useState([]);

  async function fetchDestinations() {
    const { result } = await destinations();
    setCountries(result?.data);
    const destination = result?.data?.filter(item => item.id === 1);
    setDestinationList(destination);
  }

  useEffect(() => {
    fetchDestinations();
  }, []);

  return (
    <>
      <header>
        <Newsletter />
      </header>
      <Nav
        destinations={destinationList}
        setDestinations={setDestinationList}
        countries={countries}
      />
    </>
  );
}

export { Header };
