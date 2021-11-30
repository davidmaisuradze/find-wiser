import { combineReducers } from 'redux';
import userReducer from '../screens/User/store/reducers';
import authReducer from '../screens/Auth/store/reducer';

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer
});

export default rootReducer;
