/* eslint-disable no-undef */
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

import {
  Collapse,
  CollapseContent1,
  Icon,
  SearchBar,
  ShowMore,
  SortingItemsRegular,
} from '@/components/index';
import { activities, days, packages, years } from '@/core/index';
import Close from '@/icons/close.svg';
import { Base } from '@/layouts/index';

import styles from './index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Search({ destinations, packagetypes, interests, notifications, packagesAll }) {
  const router = useRouter();
  const [clearFilter, setClearFilter] = useState(false);
  const [packagesList, setPackagesList] = useState([]);
  const [checkedDestination, setCheckedDestination] = useState([]);
  const [checkedDays, setCheckedDays] = useState([]);
  const [checkedActvity, setCheckedActvity] = useState([]);
  const [checkedTypes, setCheckedTypes] = useState([]);
  const [checkedInterest, setCheckedInterest] = useState([]);
  const [numberPackages, setNumberPackages] = useState(0);
  const [offset, setOffset] = useState(0);

  const [showFilters, setShowFilters] = useState(false);
  const handleCleanFilter = () => {
    router.push({
      pathname: '/search',
    });

    setCheckedDestination([]);
    setCheckedDays([]);
    setCheckedActvity([]);
    setCheckedTypes([]);
    setCheckedInterest([]);
  };

  function actionFiltersTypes(value, id) {
    const index = checkedTypes.findIndex(item => item === String(id));

    if (index === -1) checkedTypes.push(id);
    else checkedTypes.splice(index, 1);

    router.push({
      pathname: '/search',
      query: { ...router.query, types: checkedTypes.join() },
    });
  }

  function actionFiltersInterest(value, id) {
    const index = checkedInterest.findIndex(item => item === String(id));

    if (index === -1) checkedInterest.push(id);
    else checkedInterest.splice(index, 1);

    router.push({
      pathname: '/search',
      query: { ...router.query, interests: checkedInterest.join() },
    });
  }

  function actionFiltersActivities(value, id) {
    const index = checkedActvity.findIndex(item => item === String(id));

    if (index === -1) checkedActvity.push(id);
    else checkedActvity.splice(index, 1);

    router.push({
      pathname: '/search',
      query: { ...router.query, activity: checkedActvity.join() },
    });
  }

  function actionFiltersDays(event, id) {
    const currentday = checkedDays.find(day => day.id === id);
    currentday.checked = event.target.checked;
    const currentdays = checkedDays.filter(day => day.checked === true);

    const statusDays = checkedDays.reduce((accumulator, day) => {
      const iteratorDay = day.checked ? 1 : 0;
      return `${accumulator + iteratorDay},`;
    }, '');

    if (currentdays.length > 0) {
      const { start } = currentdays[0];
      const { end } = currentdays[currentdays.length - 1];
      router.push({
        pathname: '/search',
        query: { ...router.query, start, end, status: statusDays.slice(0, -1) },
      });
    } else {
      router.push({
        pathname: '/search',
        query: { ...router.query, start: '', end: '', status: '' },
      });
    }
  }

  function actionFiltersDestinations(value, id) {
    const index = checkedDestination.findIndex(item => item === String(id));
    if (index === -1) checkedDestination.push(String(id));
    else checkedDestination.splice(index, 1);

    if (checkedDestination.length > 0) {
      router.push(
        {
          pathname: '/search',
          query: { ...router.query, destination: checkedDestination.join() },
        },
        null,
        { shallow: true },
      );
    } else {
      delete router.query.destination;
      router.push(
        {
          pathname: '/search',
          query: { ...router.query },
        },
        null,
        { shallow: true },
      );
    }
  }

  function setActionChecked(id, state) {
    return state.find(item => item === String(id)) === String(id);
  }

  async function fetchPackages() {
    const [, querySet] = router.asPath.split('?');
    const queryParams = querySet ? `${querySet}` : '';
    const { result } = await packages({ queryParams });
    setPackagesList(result?.data.results);
    setNumberPackages(result?.data.count);
    setOffset(9);
  }

  async function fetchMorePackages() {
    setOffset(prevState => prevState + 9);
    const [, querySet] = router.asPath.split('?');
    const queryParams = querySet ? `${querySet}` : '';
    const { result } = await packages({ queryParams, offset });
    setPackagesList([...packagesList, ...result?.data.results]);
  }

  function handleMoreitems() {
    fetchMorePackages();
  }
  useEffect(() => {
    if (Object.entries(router.query).length === 0) {
      setClearFilter(false);
    } else {
      setClearFilter(true);
    }
    const destinationActiveItems = [];
    if (router?.query?.destination) {
      const destinationsActive = router?.query?.destination.split(',');
      setCheckedDestination(destinationsActive);

      destinationsActive.forEach(active => {
        destinations.forEach(destination => {
          const destinationActiveItem = destination.destinations.find(
            item => String(item.id) === active,
          );
          if (destinationActiveItem) destinationActiveItems.push(destinationActiveItem);
        });
      });
    }

    if (router?.query?.start || router?.query?.end) {
      const statusDays = router?.query?.status?.split(',') || [];

      days.forEach((status, index) => {
        days[index].checked = !!Number(statusDays[index]);
      });
      setCheckedDays(days);
    } else setCheckedDays(days);

    if (router?.query?.activity) {
      setCheckedActvity(router?.query?.activity.split(','));
    }

    if (router?.query?.types) {
      setCheckedTypes(router?.query?.types.split(','));
    }

    if (router?.query?.interests) {
      setCheckedInterest(router?.query?.interests.split(','));
    }

    if (router?.query?.months) {
      const statusYearMonth = router?.query?.ym?.split(',') || [];

      statusYearMonth.forEach(yearMonth => {
        const [myYearIndex, myMonthIndex] = yearMonth.split('-');
        years[myYearIndex].months[myMonthIndex].checked = true;
      });
    }
    fetchPackages();
  }, [router]);

  return (
    <Base
      destinations={destinations}
      packagetypes={packagetypes}
      notifications={notifications}
      packagesAll={packagesAll}
      continents={destinations}
      pixels={10}>
      <Head>
        <title>Search Tour Trips in Va Expeditions</title>
        <meta name="description" content="Search our Tours on VA Expeditions" />
      </Head>
      <div className="container d-block d-lg-none pt-3 pb-3 overflow-hidden sticky">
        <div className="row ">
          <div className="offset-2 col-8">
            <button
              type="button"
              className="btn btn-primary btn-block filter-actions"
              onClick={() => setShowFilters(true)}>
              Show filters
            </button>
          </div>
        </div>
      </div>
      <section id="tours_all">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div
                  className={`${styles.aside} ${
                    showFilters ? 'd-block' : 'd-none'
                  }  d-none d-lg-block col-12 col-lg-3 p-0`}>
                  <div
                    // eslint-disable-next-line max-len
                    className={`${styles.asideHeaderMobile} d-block d-lg-none pt-3 pb-3 fixed-top`}>
                    <h3 className="text-start ms-3 mb-0">Filters</h3>
                    {/* <link href="#"> */}
                    <a
                      href="#"
                      className={styles.close}
                      onClick={() => setShowFilters(false)}>
                      <Icon
                        component={Close}
                        viewBox="0 0 19 19"
                        className="icon-size-l"
                      />
                    </a>
                    {/* </link> */}
                  </div>
                  {!showFilters ? (
                    <div className={`${styles.boxaside}  m-0`}>
                      <h2 className="fw-bold fs-20 pt-3">All our Tours</h2>
                      {packagesList.length > 0 ? (
                        <h4 className="fs-18 py-3 mb-0">{numberPackages} Tours</h4>
                      ) : null}
                      <SearchBar packagetypes={packagetypes} packagesAll={packagesAll} />
                      {clearFilter ? (
                        <button
                          type="button"
                          className="btn btn-outline-primary w-100 fs-20 my-3"
                          onClick={() => handleCleanFilter()}>
                          Clear Filters
                        </button>
                      ) : null}
                    </div>
                  ) : (
                    <div className={`${styles.boxaside}  m-0`}>
                      {clearFilter ? (
                        <button
                          type="button"
                          className="btn btn-outline-primary w-100 fs-20"
                          onClick={() => handleCleanFilter()}>
                          Clear Filters
                        </button>
                      ) : null}
                    </div>
                  )}

                  <Collapse open={1}>
                    <CollapseContent1 index={0} title="destinations">
                      {destinations.map(item => (
                        <Form.Check
                          key={item.id}
                          checked={setActionChecked(item.id, checkedDestination)}
                          type="checkbox"
                          onChange={event => actionFiltersDestinations(event, item.id)}
                          name={`type${item.id}`}
                          id={`type${item.id}`}
                          label={item.title}
                        />
                      ))}
                    </CollapseContent1>
                  </Collapse>

                  <Collapse open={1}>
                    <CollapseContent1 index={0} title="Duration (Days)">
                      {days.map(item => (
                        <Form.Check
                          key={item.id}
                          checked={item.checked}
                          type="checkbox"
                          onChange={event => actionFiltersDays(event, item.id)}
                          name={`day${item.id}`}
                          id={`day${item.id}`}
                          label={`${item.start} - ${item.end}`}
                        />
                      ))}
                    </CollapseContent1>
                  </Collapse>

                  <Collapse open={1}>
                    <CollapseContent1 index={0} title="Type of Travel">
                      {packagetypes.map(item => (
                        <Form.Check
                          key={item.id}
                          checked={setActionChecked(item.id, checkedTypes)}
                          type="checkbox"
                          onChange={event => actionFiltersTypes(event, item.id)}
                          name={`type${item.id}`}
                          id={`type${item.id}`}
                          label={item.title}
                        />
                      ))}
                    </CollapseContent1>
                  </Collapse>

                  <Collapse open={1}>
                    <CollapseContent1 index={0} title="Interests">
                      {interests.map(item => (
                        <Form.Check
                          key={item.id}
                          checked={setActionChecked(item.id, checkedInterest)}
                          type="checkbox"
                          onChange={event => actionFiltersInterest(event, item.id)}
                          name={`interest${item.id}`}
                          id={`interest${item.id}`}
                          label={item.title}
                        />
                      ))}
                    </CollapseContent1>
                  </Collapse>

                  <Collapse open={1}>
                    <CollapseContent1 index={0} title="Activity Level">
                      {activities.map(item => (
                        <Form.Check
                          key={item.id}
                          checked={setActionChecked(item.id, checkedActvity)}
                          type="checkbox"
                          onChange={event => actionFiltersActivities(event, item.id)}
                          name={`activity${item.id}`}
                          id={`activity${item.id}`}
                          label={item.label}
                        />
                      ))}
                    </CollapseContent1>
                  </Collapse>
                </div>
                {packagesList.length > 0 ? (
                  <div className="col-12 col-lg-9">
                    <SortingItemsRegular
                      activities={activities}
                      packagetypes={packagetypes}
                      packagesList={packagesList}
                      setPackagesList={setPackagesList}
                    />
                    {packagesList.length < numberPackages ? (
                      <ShowMore eventHandler={handleMoreitems} />
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
}

export async function getStaticProps() {
  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/home/`);
  const destinations = await destinationsResponse.json();

  const packagetypesResponse = await fetch(`${PUBLIC_API}/packages/types/home/`);
  const packagetypes = await packagetypesResponse.json();

  const interestResponse = await fetch(`${PUBLIC_API}/packages/interests/`);
  const interests = await interestResponse.json();

  const packagesRes = await fetch(`${PUBLIC_API}/packages/titles/`);
  const packagesAll = await packagesRes.json();

  const notificationResponse = await fetch(`${PUBLIC_API}/notification/`);
  const notifications = await notificationResponse.json();

  return {
    props: {
      destinations,
      packagetypes,
      interests,
      notifications,
      packagesAll,
    },
  };
}

export default Search;
