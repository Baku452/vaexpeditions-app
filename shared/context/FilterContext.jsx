import { createContext, useContext, useState } from 'react';

import { days } from '@/core/index';

const FilterContext = createContext();

export function FilterContextWrapper({ children }) {
  const [checkedDestination, setDestinations] = useState([]);
  const [checkedInterest, setCheckedInterest] = useState([]);
  const [checkedTypes, setCheckedTypes] = useState([]);
  const [checkedDays, setCheckedDays] = useState(days);
  const [checkedActvity, setCheckedActvity] = useState([]);
  const [numberPackages, setNumberPackages] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const propsToPass = {
    checkedInterest,
    checkedTypes,
    checkedDays,
    checkedActvity,
    checkedDestination,
    numberPackages,
    showFilters,
    setCheckedInterest,
    setCheckedTypes,
    setCheckedDays,
    setCheckedActvity,
    setNumberPackages,
    setShowFilters,
    setDestinations,
  };

  return <FilterContext.Provider value={propsToPass}>{children}</FilterContext.Provider>;
}

export function useFilterContext() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilterContext must be into a Provider');
  }

  return context;
}
