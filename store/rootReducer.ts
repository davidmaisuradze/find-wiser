import { combineReducers } from 'redux';
import userReducer from '../screens/User/store/reducers';

const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;
