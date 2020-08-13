import { FETCH_DRINKING_DATA, SORT_DRINKING_DATA } from './drinkingConstants';

export const fetchDrinkingData = (data) => {
  return {
    type: FETCH_DRINKING_DATA,
    payload: data,
  };
};

export const sortDrinkingData = (column) => {
  return {
    type: SORT_DRINKING_DATA,
    payload: column ?? 'state',
  };
};
