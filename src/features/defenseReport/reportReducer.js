import { FETCH_DEFENSE_DATA } from './reportConstants';
import { createReducer } from '../../app/reducers/createReducer';

const initialState = {
  data: null,
};

export const fetchDefenseData = (state, payload) => {
  return { data: payload.dataset };
};

export default createReducer(initialState, {
  [FETCH_DEFENSE_DATA]: fetchDefenseData,
});
