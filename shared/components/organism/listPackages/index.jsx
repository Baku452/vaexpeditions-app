import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ShowMore, SortingItemsRegular } from '@/components/index';
import { useFilterContext } from '@/context/FilterContext';
import { packages } from '@/core/index';

const ListPackages = ({ destinationID, packagetypes, activities }) => {
  const router = useRouter();

  const [packagesList, setPackagesList] = useState([]);
  const [offset, setOffset] = useState(0);
  const {
    checkedInterest,
    checkedTypes,
    checkedDays,
    checkedDestination,
    checkedActvity,
    numberPackages,
    setNumberPackages,
  } = useFilterContext();

  async function fetchPackages() {
    // setoffset(0);

    // Offset

    const offsetQuery = offset > 0 ? offset : 0;
    // Consultar types
    const query = {};

    // Agregar Destinations
    if (!destinationID) {
      const destinations = checkedDestination.map(item => item.id);
      // Consultar Destinations
      if (destinations.length > 0) {
        query.destination = destinations.toString();
      }
    } else {
      query.destination = destinationID;
    }
    const types = checkedTypes.map(item => item.id);
    const interest = checkedInterest.map(item => item.id);
    const activity = checkedActvity.map(item => item.id);

    // Consultar días
    const currentdays = checkedDays.filter(day => day.checked === true);
    if (currentdays.length > 0) {
      const { start: startDay } = currentdays[0];
      const { end: endDay } = currentdays[currentdays.length - 1];
      query.start = startDay;
      query.end = endDay;
    }

    // Consultar types

    if (types.length > 0) {
      query.types = types.toString();
    }
    // Consultar interest

    if (interest.length > 0) {
      query.interests = interest.toString();
    }
    // Consultar activity

    if (activity.length > 0) {
      query.activity = activity.toString();
    }

    const queryString = Object.keys(query)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
      .join('&');
    const { result } = await packages({ queryParams: queryString, offset: offsetQuery });
    if (offset > 0) {
      setPackagesList([...packagesList, ...result?.data.results]);
    } else {
      setPackagesList(result?.data.results);
    }
    setNumberPackages(result?.data.count);
  }

  // Handle Scroll
  const handleScroll = () => {
    // fetchMoreListItems();
    setOffset(prevState => prevState + 9);
  };

  useEffect(() => {
    fetchPackages();
    setOffset(0);
  }, [checkedDestination, checkedTypes, checkedDays, checkedInterest, checkedActvity]);

  useEffect(() => {
    fetchPackages();
  }, [offset]);
  useEffect(() => {
    fetchPackages();
  }, [router]);
  return (
    <>
      <SortingItemsRegular
        activities={activities}
        packagetypes={packagetypes}
        packagesList={packagesList}
        setPackagesList={setPackagesList}
      />
      {packagesList.length < numberPackages ? (
        <ShowMore eventHandler={handleScroll} />
      ) : null}
    </>
  );
};

export { ListPackages };
