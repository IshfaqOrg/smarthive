import { registrationReducer } from '../slices/RegistrationSlice';
import { loginReducer } from '../slices/LoginSlice';
import countryReducer from '../slices/CountrySlice';
// import notificationReducer from '../slices/notificationSlice';

const rootReducer = {
  registration: registrationReducer,
  country: countryReducer,
  login: loginReducer,
  // notification: notificationReducer,
};
// we created root reducer, which contains all the reducer the store holds
export default rootReducer;
