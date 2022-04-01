/* eslint-disable no-plusplus */
import { useEffect, useState } from 'react';

import { useFilterContext } from '@/context/FilterContext';

const ClearFilters = () => {
  const [clearFilter, setClearFilters] = useState(false);

  const {
    checkedInterest,
    checkedTypes,
    checkedDays,
    checkedActvity,
    setCheckedInterest,
    setCheckedTypes,
    setCheckedDays,
    setCheckedActvity,
  } = useFilterContext();
  function checkFilterActive() {
    const currentdays = checkedDays.filter(day => day.checked === true);

    if (
      checkedInterest.length +
        checkedTypes.length +
        currentdays.length +
        checkedActvity.length >
      0
    ) {
      setClearFilters(true);
    } else {
      setClearFilters(false);
    }
  }

  function handleCleanFilter() {
    setCheckedTypes([]);
    setCheckedInterest([]);
    setCheckedActvity([]);

    const checkedDaysTemp = checkedDays;
    checkedDaysTemp.forEach(element => {
      if (element.checked === true) {
        // eslint-disable-next-line no-param-reassign
        element.checked = false;
      }
    });

    setCheckedDays(checkedDaysTemp);
  }
  useEffect(() => {
    checkFilterActive();
  }, [checkedInterest, checkedTypes, checkedDays, checkedActvity]);

  return (
    <>
      {clearFilter ? (
        <button
          type="button"
          className="btn btn-outline-primary w-100 fs-20 my-3"
          onClick={handleCleanFilter}>
          Clear Filters
        </button>
      ) : null}
    </>
  );
};

export { ClearFilters };
