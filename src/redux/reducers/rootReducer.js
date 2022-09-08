import { registerationReducer } from '../slices/RegisterationSlice';
import { loginReducer } from '../slices/LoginSlice';
import countryReducer from '../slices/CountrySlice';
import userSlice from '../slices/userSlice';
import notificationReducer from '../slices/notificationSlice';
import deviceAtRiskSlice from '../slices/deviceAtRiskSlice';
import deviceSlice from '../slices/DeviceSlice';

const rootReducer = {
  registeration: registerationReducer,
  country: countryReducer,
  login: loginReducer,
  notifications: notificationReducer,
  user: userSlice,
  getDevices: deviceSlice,
  devicesAtRisk: deviceAtRiskSlice,
};
// we created root reducer, which contains all the reducer the store holds
export default rootReducer;
