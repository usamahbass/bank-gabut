import {combineReducers} from 'redux';
import * as auth from './auth';
import * as user from './user';

const rootReducer = combineReducers({
  auth: auth.authReducer,
  user: user.userReducer
  
});

export default rootReducer;
