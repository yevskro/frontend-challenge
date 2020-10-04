import { useState } from 'react';

function useSearchFilter(_data = [], _filters = []) {
  /* simple search filter one level deep */
  const [filters, setFilters] = useState(_filters);
  const [data] = useState(_data);

  function filterExists(filter, aFilters = filters, deleteIfExists = false) {
    const filterKey =
      typeof filter === 'object' ? Object.keys(filter)[0] : undefined;
    const filterValue = filterKey ? filter[filterKey] : filter;

    for (let idx = 0; idx < aFilters.length; idx += 1) {
      if (filterKey) {
        if (
          typeof filters[idx] === 'object' &&
          filters[idx][filterKey] &&
          filters[idx][filterKey] === filterValue
        ) {
          if (deleteIfExists) {
            aFilters.splice(idx, 1);
          }
          return true;
        }
      } else if (
        typeof filters[idx] !== 'object' &&
        filters[idx] === filterValue
      ) {
        if (deleteIfExists) {
          aFilters.splice(idx, 1);
        }
        return true;
      }
    }

    return false;
  }

  function addFilter(filter) {
    if (!filterExists(filter)) {
      const newFilters = [...filters];
      newFilters.push(filter);
      setFilters(newFilters);
      console.log({ newFilters });
    }
  }

  function removeFilter(filter) {
    const newFilters = [...filters];
    filterExists(filter, newFilters, true);
    setFilters(newFilters);
    console.log(newFilters);
  }

  function getFilters() {
    return filters;
  }

  function getFilteredData() {
    const newData = [];
    let filtered = false;
    for (let dIdx = 0; dIdx < data.length; dIdx += 1) {
      for (let fIdx = 0; fIdx < filters.length; fIdx += 1) {
        if (
          typeof data[dIdx] === 'object' &&
          typeof filters[fIdx] === 'object'
        ) {
          const filtersKey = Object.keys(filters[fIdx])[0];
          const filterValue = filters[fIdx][filtersKey];
          const dataValue = data[dIdx][filtersKey];
          if (dataValue) {
            if (Array.isArray(dataValue) && dataValue.includes(filterValue))
              filtered = true;
          }
          if (
            data[dIdx][filtersKey] &&
            data[dIdx][filtersKey] === filters[fIdx][filtersKey]
          )
            filtered = true;
        }
      }
      if (!filtered) {
        newData.push(data[dIdx]);
      } else filtered = false;
    }
    console.log(newData);
  }

  return { addFilter, removeFilter, getFilters, getFilteredData };
}

export default useSearchFilter;
