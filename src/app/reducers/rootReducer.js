import { combineReducers } from 'redux';
import defenseReducer from '../../features/defenseReport/reportReducer';

const rootReducer = combineReducers({
  defenseReport: defenseReducer,
  report2: null,
});

export default rootReducer;
