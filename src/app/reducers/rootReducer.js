import { combineReducers } from 'redux';
import defenseReducer from '../../features/defenseReport/reportReducer';
import drinkingReducer from '../../features/drinkingReport/drinkingReducer';

const rootReducer = combineReducers({
  defenseReport: defenseReducer,
  drinkingReport: drinkingReducer,
});

export default rootReducer;
