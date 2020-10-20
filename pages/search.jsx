// import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import { ContextAwareToggle, Icon, PackageItem } from '@/components/index';
import { activities, days, packages, years } from '@/core/index';
import Close from '@/icons/close.svg';
import { Base } from '@/layouts/index';

const PUBLIC_API = process.env.NEXT_PUBLIC_API;

function Search({ destinationList, packageTypeList }) {
  const router = useRouter();
  const [packagesList, setPackagesList] = useState([]);
  // const [destinationList, setDestinationList] = useState([]);
  // const [packageTypeList, setPackageTypeList] = useState([]);
  const [checkedDestination, setCheckedDestination] = useState([]);
  const [checkedDays, setCheckedDays] = useState([]);
  const [checkedActvity, setCheckedActvity] = useState([]);
  const [checkedTypes, setCheckedTypes] = useState([]);
  const [checkedMonths, setCheckedMonths] = useState([]);
  const [checkedYearMonth, setCheckedYearMonth] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState([]);

  function actionFiltersMonths(event, id, yearIndex, monthIndex) {
    years[yearIndex].months[monthIndex].checked = event.target.checked;

    const idYearMonth = `${yearIndex}-${monthIndex}`;

    const indexCurrentYM = checkedYearMonth.findIndex(
      item => item === String(idYearMonth),
    );

    if (indexCurrentYM === -1) {
      checkedYearMonth.push(idYearMonth);
      checkedMonths.push(id);
    } else {
      checkedYearMonth.splice(indexCurrentYM, 1);
      checkedMonths.splice(indexCurrentYM, 1);
    }

    router.push({
      pathname: '/search',
      query: {
        ...router.query,
        months: checkedMonths.join(),
        ym: checkedYearMonth.join(),
      },
    });
  }

  function actionFiltersTypes(value, id) {
    const index = checkedTypes.findIndex(item => item === String(id));

    if (index === -1) checkedTypes.push(id);
    else checkedTypes.splice(index, 1);

    router.push({
      pathname: '/search',
      query: { ...router.query, types: checkedTypes.join() },
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

    router.push({
      pathname: '/search',
      query: { ...router.query, destination: checkedDestination.join() },
    });
  }

  function setActionChecked(id, state) {
    return state.find(item => item === String(id)) === String(id);
  }

  async function fetchPackages() {
    const [, querySet] = router.asPath.split('?');

    const queryParams = querySet ? `?${querySet}` : '';
    const { result } = await packages({ queryParams });
    setPackagesList(result?.data);
  }

  useEffect(() => {
    console.log('object', router);
    const destinationActiveItems = [];
    if (router?.query?.destination) {
      const destinationsActive = router?.query?.destination.split(',');
      setCheckedDestination(destinationsActive);

      destinationsActive.forEach(active => {
        destinationList.forEach(destination => {
          const destinationActiveItem = destination.destinations.find(
            item => String(item.id) === active,
          );
          if (destinationActiveItem) destinationActiveItems.push(destinationActiveItem);
        });
      });

      // setCheckedDestination(router?.query?.destination.split(','));
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

    if (router?.query?.months) {
      const statusMonths = router?.query?.months?.split(',') || [];
      const statusYearMonth = router?.query?.ym?.split(',') || [];

      statusYearMonth.forEach(yearMonth => {
        const [myYearIndex, myMonthIndex] = yearMonth.split('-');
        years[myYearIndex].months[myMonthIndex].checked = true;
      });

      setCheckedMonths(statusMonths);
      setCheckedYearMonth(statusYearMonth);
    }

    fetchPackages();
  }, [router]);

  return (
    <Base>
      <div className="filters-header">
        <button
          type="button"
          className="btn filter-actions"
          onClick={() => setShowFilters(true)}>
          Filters
        </button>
      </div>
      <section id="tours_all">
        <div className="container">
          <div className="row pt-5 pb-4">
            <div className="col-12 mx-auto">
              <div className="row">
                <h2 className="title text-center font-weight-bold fs-25 pl-3">
                  All our Tours
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div
                  className={` ${
                    showFilters ? 'filter-show' : ''
                  } col-12 col-md-3 p-0 filters-overlay`}>
                  {/* <Accordion defaultActiveKey="F0">
                    <Accordion.Toggle
                      as={Card.Header}
                      className="card-parent"
                      eventKey="F0">
                      Filters
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="F0">
                      <Card.Body>akajka</Card.Body>
                    </Accordion.Collapse>
                  </Accordion> */}

                  <div className="card-parent header-fill">
                    <h3 className="text-center pt-3">Filters</h3>
                    <a
                      href="#"
                      className="filter-close"
                      onClick={() => setShowFilters(false)}>
                      <Icon component={Close} viewBox="0 0 16 16" className="icon" />
                    </a>
                  </div>

                  <Accordion defaultActiveKey="A0">
                    <Card.Header className="card-header-filters">
                      <ContextAwareToggle eventKey="A0" className="content-gray">
                        <h2 className="fs-16 m-0 font-weight-bold p-0">Destinations</h2>
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="A0">
                      <Card.Body>
                        {destinationList.map(country => (
                          <Accordion defaultActiveKey={country.id} key={country.id}>
                            <Card.Header className="card-header-filters">
                              <ContextAwareToggle
                                eventKey={country.id}
                                className="content-gray">
                                <h2 className="fs-16 m-0 font-weight-bold p-0">
                                  {country.name}
                                </h2>
                              </ContextAwareToggle>
                            </Card.Header>

                            <Accordion.Collapse eventKey={country.id}>
                              <Card.Body>
                                {country.destinations.map(destination => (
                                  <Form.Check
                                    key={destination.id}
                                    checked={setActionChecked(
                                      destination.id,
                                      checkedDestination,
                                    )}
                                    type="checkbox"
                                    onChange={event =>
                                      actionFiltersDestinations(event, destination.id)
                                    }
                                    name={destination.slug}
                                    id={destination.id}
                                    label={`${destination.title}`}
                                  />
                                ))}
                              </Card.Body>
                            </Accordion.Collapse>
                          </Accordion>
                        ))}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Accordion>

                  <Accordion defaultActiveKey="A1">
                    <Card.Header className="card-header-filters">
                      <ContextAwareToggle eventKey="A1" className="content-gray">
                        <h2 className="fs-16 m-0 font-weight-bold p-0">
                          Duration (Days)
                        </h2>
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="A1">
                      <Card.Body>
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
                      </Card.Body>
                    </Accordion.Collapse>
                  </Accordion>

                  <Accordion defaultActiveKey="A2">
                    <Card.Header className="card-header-filters">
                      <ContextAwareToggle eventKey="A2" className="content-gray">
                        <h2 className="fs-16 m-0 font-weight-bold p-0">Type of Travel</h2>
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="A2">
                      <Card.Body>
                        {packageTypeList.map(item => (
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
                      </Card.Body>
                    </Accordion.Collapse>
                  </Accordion>

                  <Accordion defaultActiveKey="A3">
                    <Card.Header className="card-header-filters">
                      <ContextAwareToggle eventKey="A3" className="content-gray">
                        <h2 className="fs-16 m-0 font-weight-bold p-0">Activity Level</h2>
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="A3">
                      <Card.Body>
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
                      </Card.Body>
                    </Accordion.Collapse>
                  </Accordion>

                  <Accordion defaultActiveKey="A4">
                    <Card.Header className="card-header-filters">
                      <ContextAwareToggle eventKey="A4" className="content-gray">
                        <h2 className="fs-16 m-0 font-weight-bold p-0">
                          Month of Travel
                        </h2>
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="A4">
                      <Card.Body>
                        {years.map((year, yearIndex) => (
                          <Accordion defaultActiveKey={year.id} key={year.id}>
                            <Accordion.Toggle
                              as={Card.Header}
                              className="card-child"
                              eventKey={year.id}>
                              {year.name}
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={year.id}>
                              <div className="card-month">
                                {year.months.map((month, monthIndex) => (
                                  <Form.Check
                                    disabled={month.disabled}
                                    key={year.id + month.id}
                                    checked={month.checked}
                                    type="checkbox"
                                    onChange={event =>
                                      actionFiltersMonths(
                                        event,
                                        month.id,
                                        yearIndex,
                                        monthIndex,
                                      )
                                    }
                                    name={year.id + month.id}
                                    id={year.id + month.id}
                                    label={month.id.substring(0, 3)}
                                  />
                                ))}
                              </div>
                            </Accordion.Collapse>
                          </Accordion>
                        ))}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Accordion>
                </div>
                <div className="col-12 col-md-9">
                  <div className="row">
                    {packagesList.length > 0 &&
                      packagesList.map(item => <PackageItem key={item.id} {...item} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
}

export async function getStaticProps() {
  const destinations = await fetch(`${PUBLIC_API}/destinations/`);
  const destinationList = await destinations.json();

  const packageTypes = await fetch(`${PUBLIC_API}/packagestype/`);
  const packageTypeList = await packageTypes.json();

  return { props: { destinationList, packageTypeList } };
}

export default Search;
