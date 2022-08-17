import { lazy } from 'react';
import appRoutes from '../../constants/RouteConstant/Routes';
/*
Approutes is passed down to authmiddleware in order to authenticate the user
and give path and component to element in router
components which do not require authentication are given true isPublicRoute value
*/

const AppRoutes = [
  {
    path: appRoutes.Home,
    component: lazy(() => import('../../pages/SignUp')),
    meta: {
      isPublicRoute: true,
    },
  },
  // {
  //   path: appRoutes.Form,
  //   component: lazy(() => import('../../Form/components/Form')),
  //   meta: {
  //     isPublicRoute: true,
  //   },
  // },
  // {
  //     path: appRoutes.GetOtp,
  //     component: lazy(() => import('../../Form/components/GetOtp')),
  //     meta: {
  //       isPublicRoute: true,
  // },
  // },
];

export default AppRoutes;
