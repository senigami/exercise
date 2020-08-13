import _ from 'lodash';
import { createReducer } from '../../app/reducers/createReducer';
import { FETCH_DRINKING_DATA, SORT_DRINKING_DATA } from './drinkingConstants';

const initialState = {
  data: null,
  column: null,
  direction: null,
};

export const fetchDrinkingData = (state, payload) => {
  const reduced = payload.data.map((o) => {
    return { key: o[0], state: o[8], '2012': o[9], '2014': o[10] };
  });
  return { ...state, data: reduced };
};

export const sortDrinkingData = (state, payload) => {
  if (state.column === payload) {
    return {
      ...state,
      data: state.data.reverse(),
      direction: state.direction === 'ascending' ? 'descending' : 'ascending',
    };
  }

  return {
    column: payload,
    data: _.sortBy(state.data, [payload]),
    direction: 'ascending',
  };
};

export default createReducer(initialState, {
  [FETCH_DRINKING_DATA]: fetchDrinkingData,
  [SORT_DRINKING_DATA]: sortDrinkingData,
});
