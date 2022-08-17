import { registrationReducer } from '../slices/RegistrationSlice';
import { loginReducer } from '../slices/LoginSlice';
import countryReducer from '../slices/CountrySlice';

const rootReducer = {
  registration: registrationReducer,
  country: countryReducer,
  login: loginReducer,
};
// we created root reducer, which contains all the reducer the store holds
export default rootReducer;
