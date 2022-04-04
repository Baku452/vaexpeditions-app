import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

import {
  Collapse,
  CollapseContent1,
  Hero3,
  Icon,
  SearchBar,
  ShowMore,
  SortingItemsRegular,
} from '@/components/index';
import { activities, days, packagesDestination, years } from '@/core/index';
import Close from '@/icons/close.svg';
import { Base } from '@/layouts/index';

import styles from '../../index.module.scss';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function SearchDestination({
  SSRDestination,
  destinations,
  packagetypes,
  interests,
  notifications,
  packagesAll,
}) {
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
  const [option, setOption] = useState(0);

  const handleCleanFilter = () => {
    router.push({
      pathname: `/destination/${SSRDestination.slug}/search`,
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

    router.push(
      {
        pathname: `/destination/${SSRDestination.slug}/search`,
        query: { ...router.query, types: checkedTypes.join() },
      },
      undefined,
      { scroll: false },
    );
  }

  function actionFiltersInterest(value, id) {
    const index = checkedInterest.findIndex(item => item === String(id));

    if (index === -1) checkedInterest.push(id);
    else checkedInterest.splice(index, 1);

    router.push(
      {
        pathname: `/destination/${SSRDestination.slug}/search`,
        query: { ...router.query, interests: checkedInterest.join() },
      },
      undefined,
      { scroll: false },
    );
  }

  function actionFiltersActivities(value, id) {
    const index = checkedActvity.findIndex(item => item === String(id));

    if (index === -1) checkedActvity.push(id);
    else checkedActvity.splice(index, 1);

    router.push(
      {
        pathname: `/destination/${SSRDestination.slug}/search`,
        query: { ...router.query, activity: checkedActvity.join() },
      },
      undefined,
      { scroll: false },
    );
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
        pathname: `/destination/${SSRDestination.slug}/search`,
        query: { ...router.query, start, end, status: statusDays.slice(0, -1) },
      });
    } else {
      router.push(
        {
          pathname: `/destination/${SSRDestination.slug}/search`,
          query: { ...router.query, start: '', end: '', status: '' },
        },
        undefined,
        { scroll: false },
      );
    }
  }

  function actionFiltersWheretoGo(event, id) {
    const index = checkedDestination.findIndex(item => item === String(id));
    if (index === -1) checkedDestination.push(String(id));
    else checkedDestination.splice(index, 1);

    router.replace(
      {
        pathname: `/destination/${SSRDestination.slug}/search`,
        query: { ...router.query, where_to_go: checkedDestination.join() },
      },
      undefined,
      { scroll: false },
      // `/destination/${SSRDestination.slug}/search`,
    );
  }

  function setActionChecked(id, state) {
    return state.find(item => item === String(id)) === String(id);
  }

  const handleChange = event => {
    setOption(event.target.value);
  };

  async function fetchPackages() {
    const [, querySet] = router.asPath.split('?');
    const queryParams = querySet ? `${querySet}` : '';
    const { result } = await packagesDestination({
      queryParams,
      destination: SSRDestination.slug,
    });
    setPackagesList(result?.data.results);
    setNumberPackages(result?.data.count);
    setOffset(9);
  }

  async function fetchMorePackages() {
    setOffset(prevState => prevState + 9);
    const [, querySet] = router.asPath.split('?');
    const queryParams = querySet ? `${querySet}` : '';
    const { result } = await packagesDestination({
      queryParams,
      offset,
      destination: SSRDestination.slug,
    });
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

    if (router?.query?.where_to_go) {
      setCheckedDestination(router?.query?.where_to_go.split(','));
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
      pixels={680}>
      <Head>
        <title>Search Tour Trips in {SSRDestination.title} - Va Expeditions</title>
        <meta name="description" content="Search our Tours on Va Expeditions" />
      </Head>
      <Hero3
        title={SSRDestination.title}
        images={SSRDestination.images}
        navigation
        pagination={false}
        isHome
        isDestination
      />
      <div className="container d-block d-lg-none pt-3 pb-3 overflow-hidden sticky">
        <div className="row">
          <div className="dropdown col-6 ">
            <button
              type="button"
              data-toggle="dropdown"
              className="w-100 btn btn-primary btn-block filter-actions dropdown-toggle"
              onClick={() => setShowFilters(true)}>
              Filter By
            </button>
          </div>
          <div className="dropdown col-6">
            <select
              className="w-100 btn btn-primary btn-block text-white"
              onBlur={handleChange}
              value={option}>
              <option value={0}>Top rated tours</option>
              <option value={1}>Name A - Z</option>
              <option value={2}>Name Z - A</option>
              <option value={3}>Shortest - Longest</option>
              <option value={4}>Longest - Shortest</option>
            </select>
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
                      <h2 className="fw-bold fs-20 pt-3">
                        All our Tours in {SSRDestination.title}
                      </h2>
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
                  {/* <Collapse open={1}>
                    <CollapseContent index={0} title="Destinations"> */}
                  <Collapse open={1}>
                    <CollapseContent1 index={0} title="Where to Go">
                      {SSRDestination.where.map(
                        item =>
                          item.active && (
                            <Form.Check
                              key={item.id}
                              checked={setActionChecked(item.id, checkedDestination)}
                              type="checkbox"
                              onChange={event => actionFiltersWheretoGo(event, item.id)}
                              name={item.slug}
                              id={item.id}
                              label={`${item.title}`}
                            />
                          ),
                      )}
                    </CollapseContent1>
                  </Collapse>
                  {/* </CollapseContent>
                  </Collapse> */}
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
export async function getStaticPaths() {
  const response = await fetch(`${PUBLIC_API}/destinations/`);
  const countriesResponse = await response.json();

  const paths = countriesResponse.map(item => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: 'blocking' };
}
export async function getStaticProps({ params }) {
  const destinationsResponse = await fetch(`${PUBLIC_API}/destinations/`);
  const destinations = await destinationsResponse.json();

  const fetchDestination = await fetch(`${PUBLIC_API}/destinations/${params.slug}`);
  const SSRDestination = await fetchDestination.json();

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
      SSRDestination,
    },
  };
}

export default SearchDestination;
