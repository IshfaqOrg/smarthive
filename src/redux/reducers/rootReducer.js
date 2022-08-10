import { registrationReducer } from '../slices/RegistrationSlice';

export const rootReducer = {
  registration: registrationReducer,
};
// we created root reducer, which contains all the reducer the store holds
