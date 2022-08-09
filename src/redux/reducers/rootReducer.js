import { dashboardReducers } from "../slices/DashboardSlice";

export const rootReducer = {
  dashboard: dashboardReducers,
};
//we created root reducer, which contains all the reducer the store holds
