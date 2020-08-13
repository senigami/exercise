import { FETCH_DEFENSE_DATA } from './reportConstants';

export const fetchDefenseData = (data) => {
  return {
    type: FETCH_DEFENSE_DATA,
    payload: data,
  };
};
