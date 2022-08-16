import { registrationReducer } from '../slices/RegistrationSlice';
import countryReducer from '../slices/CountrySlice';

const rootReducer = {
  registration: registrationReducer,
  country: countryReducer,
};
// we created root reducer, which contains all the reducer the store holds
export default rootReducer;
