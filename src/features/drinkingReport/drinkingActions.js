import { FETCH_DRINKING_DATA } from './drinkingConstants';

export const fetchDrinkingData = (data) => {
  return {
    type: FETCH_DRINKING_DATA,
    payload: data,
  };
};
