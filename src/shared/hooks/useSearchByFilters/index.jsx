import { useState } from 'react';

function useSearchByFilters(_data = []) {
  /* simple search filter works only one deep on primitive values and objects */
  const [data] = useState(_data);
  const [filters, setFilters] = useState([]);
  const [filteredData, setFilteredData] = useState(data);

  function filterData(aFilters) {
    const newData = [];
    for (let dIdx = 0; dIdx < data.length; dIdx += 1) {
      let fIdx = 0;
      let filtered = false;
      while (!filtered && fIdx < aFilters.length) {
        if (
          typeof data[dIdx] === 'object' &&
          typeof aFilters[fIdx] === 'object'
        ) {
          const filterKey = Object.keys(aFilters[fIdx])[0];
          const filterValue = aFilters[fIdx][filterKey];
          const dataValue = data[dIdx][filterKey];
          if (dataValue) {
            if (Array.isArray(dataValue)) {
              if (!dataValue.includes(filterValue)) filtered = true;
            } else if (dataValue !== filterValue) filtered = true;
          }
        }
        fIdx += 1;
      }
      if (!filtered) {
        console.log('newData being pushed');
        newData.push(data[dIdx]);
      }
    }
    return newData;
  }

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
      setFilteredData(filterData(newFilters));
    }
  }

  function removeFilter(filter) {
    const newFilters = [...filters];
    filterExists(filter, newFilters, true);
    setFilters(newFilters);
    setFilteredData(filterData(newFilters));
  }

  function clearFilters() {
    setFilters([]);
    setFilteredData(data);
  }

  return { filteredData, filters, addFilter, removeFilter, clearFilters };
}

export default useSearchByFilters;
