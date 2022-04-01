/* eslint-disable import/extensions */
import { Form } from 'react-bootstrap';

import { ClearFilters, CollapseContent1, FixedFilter, Icon } from '@/components/index';
import { useFilterContext } from '@/context/FilterContext';
import { activities, days } from '@/core/index';
import Close from '@/icons/close.svg';

import styles from './index.module.scss';

const SearchFilter = ({ packagetypes, interests, cities, title }) => {
  const {
    checkedInterest,
    checkedTypes,
    checkedDays,
    checkedActvity,
    checkedDestination,
    showFilters,
    setCheckedInterest,
    setCheckedTypes,
    setCheckedDays,
    setCheckedActvity,
    numberPackages,
    setShowFilters,
    setDestinations,
  } = useFilterContext();

  function actionFiltersDestinations(event, id) {
    const index = checkedDestination.findIndex(item => item.id === id);

    if (index === -1) {
      setDestinations([...checkedDestination, { id: id, name: event.target.value }]);
    } else {
      checkedDestination.splice(index, 1);
      setDestinations([...checkedDestination]);
    }
  }
  function actionFiltersInterest(event, id) {
    const index = checkedInterest.findIndex(item => item.id === id);

    if (index === -1) {
      setCheckedInterest([...checkedInterest, { id: id, name: event.target.value }]);
      return true;
    }

    checkedInterest.splice(index, 1);
    setCheckedInterest([...checkedInterest]);
    return false;
  }
  function actionFiltersTypes(event, id) {
    const index = checkedTypes.findIndex(item => item.id === id);

    if (index === -1)
      setCheckedTypes([...checkedTypes, { id: id, name: event.target.value }]);
    else {
      checkedTypes.splice(index, 1);
      setCheckedTypes([...checkedTypes]);
    }
  }

  function actionFiltersDays(event, id) {
    const currentday = checkedDays.find(day => day.id === id);
    currentday.checked = event.target.checked;
    setCheckedDays([...checkedDays]);
  }

  function actionFiltersActivities(event, id) {
    const index = checkedActvity.findIndex(item => item.id === id);
    if (index === -1)
      setCheckedActvity([...checkedActvity, { id: id, name: event.target.value }]);
    else {
      checkedActvity.splice(index, 1);
      setCheckedActvity([...checkedActvity]);
    }
  }
  function setActionChecked(id, state) {
    const index = state.findIndex(item => item.id === id);
    if (index === -1) {
      return false;
    }
    return true;
  }

  return (
    <>
      <FixedFilter />
      <div
        className={` ${
          showFilters ? 'd-lg-block' : 'd-none'
        } d-lg-block col-12 col-lg-3 ${styles.aside}`}>
        <div className={`${styles.aside__box}  m-0`}>
          <h2 className="pt-3">All our {title} Tours</h2>
          {numberPackages > 0 ? (
            <p className="py-3 mb-0">{numberPackages} Tours</p>
          ) : null}
          {/* <SearchBar packagetypes={packagetypes} packagesAll={packagesAll} /> */}
          <ClearFilters />
        </div>
        <div className={`${styles.asideHeaderMobile} d-flex d-lg-none pt-3 fixed-top`}>
          <h3 className="text-start ms-3 mb-0">Filters</h3>
          <a href="#" className={styles.close} onClick={() => setShowFilters(false)}>
            <Icon component={Close} viewBox="0 0 19 19" className="icon-size-l" />
          </a>
        </div>
        <Form>
          {cities ? (
            <CollapseContent1 open={1} index={0} title="Destinations">
              {cities.map(item => (
                <Form.Check
                  key={item.id}
                  checked={setActionChecked(item.id, checkedDestination)}
                  type="checkbox"
                  onChange={event => actionFiltersDestinations(event, item.id)}
                  name="type"
                  value={item.title}
                  id={`type${item.id}`}
                  label={item.title}
                />
              ))}
            </CollapseContent1>
          ) : null}
          {packagetypes ? (
            <CollapseContent1 open={1} index={0} title="Type of Travel">
              {packagetypes.map(item => (
                <Form.Check
                  key={item.id}
                  checked={setActionChecked(item.id, checkedTypes)}
                  type="checkbox"
                  onChange={event => actionFiltersTypes(event, item.id)}
                  name="type"
                  value={item.title}
                  id={`type${item.id}`}
                  label={item.title}
                />
              ))}
            </CollapseContent1>
          ) : null}
          <CollapseContent1 open={1} index={0} title="Duration (Days)">
            {days.map(item => (
              <Form.Check
                key={item.id}
                type="checkbox"
                checked={item.checked}
                onChange={event => actionFiltersDays(event, item.id)}
                name={`day${item.id}`}
                id={`day${item.id}`}
                label={`${item.start} - ${item.end}`}
              />
            ))}
          </CollapseContent1>
          <CollapseContent1 open={1} index={0} title="Activity Level">
            {activities.map(item => (
              <Form.Check
                key={item.id}
                type="checkbox"
                checked={setActionChecked(item.id, checkedActvity)}
                onChange={event => actionFiltersActivities(event, item.id)}
                name={`activity${item.id}`}
                id={`activity${item.id}`}
                label={item.label}
              />
            ))}
          </CollapseContent1>
          <CollapseContent1 open={1} index={0} title="Interests">
            {interests.map(item => (
              <Form.Check
                key={item.id}
                type="checkbox"
                checked={setActionChecked(item.id, checkedInterest)}
                onChange={event => actionFiltersInterest(event, item.id)}
                name={`interest${item.id}`}
                id={`interest${item.id}`}
                label={item.title}
              />
            ))}
          </CollapseContent1>
        </Form>
        {showFilters ? (
          <div className={` ${styles.asideMobileFooter} fixed-bottom py-2 px-3`}>
            <button
              type="button"
              onClick={() => setShowFilters(false)}
              className="btn btn-dark fs-15 py-1">
              SEE TRIPS
            </button>{' '}
          </div>
        ) : null}
      </div>
    </>
  );
};

export { SearchFilter };
