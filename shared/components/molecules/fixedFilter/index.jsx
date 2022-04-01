import { useState } from 'react';

import { useFilterContext } from '@/context/FilterContext';

import styles from './index.module.scss';

const FixedFilter = () => {
  const [option, setOption] = useState(0);
  const { showFilters, setShowFilters } = useFilterContext();

  const handleChange = event => {
    setOption(event.target.value);
  };
  return (
    <div className={` d-block d-lg-none p-3 mb-5 sticky ${styles.fixedFilter}`}>
      <div className="row">
        <div className="dropdown col-6 ">
          <button
            type="button"
            data-toggle="dropdown"
            className="w-100 btn btn-primary btn-block filter-actions "
            onClick={() => setShowFilters(!showFilters)}>
            Filter By
          </button>
        </div>
        <div className="dropdown col-6">
          <select
            className="w-100 btn btn-primary btn-block text-white"
            onChange={handleChange}
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
  );
};

export { FixedFilter };
