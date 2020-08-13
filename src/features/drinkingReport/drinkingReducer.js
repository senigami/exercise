import { createReducer } from '../../app/reducers/createReducer';
import { FETCH_DRINKING_DATA } from './drinkingConstants';

const initialState = {
  data: null,
};

export const fetchDrinkingData = (state, payload) => {
  return { data: payload.data };
};

export default createReducer(initialState, {
  [FETCH_DRINKING_DATA]: fetchDrinkingData,
});
