import { registerationReducer } from '../slices/RegisterationSlice';
import { loginReducer } from '../slices/LoginSlice';
import countryReducer from '../slices/CountrySlice';
import userSlice from '../slices/userSlice';
import notificationReducer from '../slices/notificationSlice';

const rootReducer = {
  registeration: registerationReducer,
  country: countryReducer,
  login: loginReducer,
  notifications: notificationReducer,
  user: userSlice,
};
// we created root reducer, which contains all the reducer the store holds
export default rootReducer;
