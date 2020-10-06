import {
  SET_DATA,
  ADD_FILTER,
  REMOVE_FILTER,
  CLEAR_FILTERS,
  FILTER_DATA,
} from './actionTypes';

/* 
  there are different ways we can filter the data.
  one way is to store filters as map of an array of values
  that belong to a property to filter such as.
  tools: ['SASS', 'REACT];
  but this will not keep the order of the filters applied
  by the user. 
  rules apply when working with this reducer: 
  1. the filters are an array that hold filter objects. 
  2. the filter object is a key value pair with a single primitive i.e.
     filters = [{tools: 'SASS'}, {tools: 'REACT}, {company: 'Yevs Shop Of Horrors'}] <- valid
  3. the data array holds objects.
  3. the filter key corresponds to the object's property and the value responds to
  to the value that the object's property holds. 
  4. the object's property can hold a primitive or an array. i.e.
    data = [{..., tools: ['SASS', REACT']}, {..., company: 'Yevs Shop Of Horrors'}]; <- valid
*/
function filterData(filters = [], data = []) {
  const newData = [];

  /* example what data might look like
    data = [{..., tools: ['SASS', REACT']}, {..., company: 'Yevs Shop Of Horrors'}]; */
  for (let idx = 0; idx < data.length; idx += 1) {
    /* loop through the data object */
    let fidx = 0;
    let filtered = true;
    /* here we use a while loop because an object has to accomadate
    all the filters not just one. 
    once filtered is flagged false it means the data object does not fit 
    one of the filters and we can end iterating over the filters and
    continue on to the next data object */
    while (filtered && fidx < filters.length) {
      const filterKey = Object.keys(filters[fidx])[0];
      const filterValue = filters[fidx][filterKey];
      const dataValue = data[idx][filterKey];

      if (dataValue) {
        /* see if the filter key exists on data's object */
        /* if the data object's property is an array */
        if (Array.isArray(dataValue)) {
          /* see if the array does not include the filter value(primitive) */
          if (!dataValue.includes(filterValue)) filtered = false;
        } else if (filterValue !== dataValue)
          filtered = false; /* data object property holds a primitive */
      }
      fidx += 1; /* next filter */
    }
    /* if filtered wasn't flagged false then data's object
       accomadates all the filters and we can save it */
    if (filtered) newData.push(data[idx]);
  }
  return newData;
}

function addFilter(filter, filters = []) {
  /* we have to create a newFilter array so we don't
  mutate state directly and cause side effects */
  const filterKey = Object.keys(filter)[0];
  const filterValue = filter[filterKey];
  const newFilters = [];

  /* we can't create a copy of filters through your typical
  copying array functionality like spread/splice/from because
  the filters will hold objects and those references would be copied
  causing side effects on mutation */
  /* we're going to loop through the array and copy each one except 
  and then at the add we are going to add the new filter */
  for (let idx = 0; idx < filters.length; idx += 1) {
    if (filters[idx][filterKey] && filters[idx][filterKey] === filterValue)
      return filters;
    newFilters[idx] = { ...filters[idx] };
  }

  newFilters.push(filter);

  return newFilters;
}

function removeFilter(filter, filters = []) {
  /* we have to create a newFilter array so we don't
    mutate state directly and cause side effects */
  const filterKey = Object.keys(filter)[0];
  const filterValue = filter[filterKey];
  const newFilters = [];

  /* we can't create a copy of filters through your typical
    copying array functionality like spread/splice/from because
    the filters will hold objects and those references would be copied
    causing side effects on mutation */
  /* we're going to loop through the array and copy each one except the
  filter that is to be removed */
  let nfidx = 0;
  for (let idx = 0; idx < filters.length; idx += 1) {
    if (!(filters[idx][filterKey] && filters[idx][filterKey] === filterValue)) {
      newFilters[nfidx] = { ...filters[idx] };
      nfidx += 1;
    }
  }

  return newFilters;
}

function wrapper() {
  let initialData; /* we store the initial data state and make it possible to
    be accessed by the reducer through lexical scope
  */
  return function reducer(state, action) {
    if (!initialData)
      initialData =
        state.data || []; /* initial data is undefined save it as [] */

    let filters;
    let data;
    switch (action.type) {
      case SET_DATA:
        /* set data will clear the initial data */
        initialData = action.payload.data;
        data = initialData;
        return { ...state, data };
      case ADD_FILTER:
        filters = addFilter(action.payload.filter, state.filters);
        return { ...state, filters };
      case REMOVE_FILTER:
        filters = removeFilter(action.payload.filter, state.filters);
        return { ...state, filters };
      case CLEAR_FILTERS:
        filters = [];
        return { ...state, filters };
      case FILTER_DATA:
        /* state filters may be undefined if not initialized */
        data =
          state.filters && state.filters.length !== 0
            ? filterData(state.filters, initialData)
            : initialData;
        return { ...state, data };
      default:
        throw new Error('action does not exist');
    }
  };
}

export default wrapper();
