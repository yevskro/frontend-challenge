import {
  SET_DATA,
  ADD_FILTER,
  REMOVE_FILTER,
  CLEAR_FILTERS,
  FILTER_DATA,
} from './actionTypes';

/* action creators */
export function setData(data) {
  return { type: SET_DATA, payload: { data } };
}

export function addFilter(filter) {
  return { type: ADD_FILTER, payload: { filter } };
}

export function removeFilter(filter) {
  return { type: REMOVE_FILTER, payload: { filter } };
}

export function clearFilters() {
  return { type: CLEAR_FILTERS };
}

export function filterData() {
  return { type: FILTER_DATA };
}
