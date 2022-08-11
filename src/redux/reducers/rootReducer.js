import { registrationReducer } from '../slices/RegistrationSlice';

const rootReducer = {
  registration: registrationReducer,
};
// we created root reducer, which contains all the reducer the store holds
export default rootReducer;
