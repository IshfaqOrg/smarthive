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
    component: lazy(() => import('../../pages/Home')),
    nestedRoute: [{
      path: appRoutes.Signup,
      index: true,
      component: lazy(() => import('../../pages/SignUp/components/Form')),
      meta: {
        isPublicRoute: true,
      },
    }, {
      path: appRoutes.Login,
      index: false,
      component: lazy(() => import('../../pages/Login')),
      meta: {
        isPublicRoute: true,
      },
    },
    ],
    meta: {
      isPublicRoute: true,
    },
  }, {
    path: appRoutes.Dashboard,
    component: lazy(() => import('../../pages/Dashboard')),
    nestedRoute: [{
      path: appRoutes.Profile,
      index: false,
      component: lazy(() => import('../../pages/Profile')),
      meta: {
        isPublicRoute: true,
      },
    },
    ],
    meta: {
      isPublicRoute: true,
    },
  },
  {
    path: appRoutes.Resilence,
    component: lazy(() => import('../../pages/Resilence/Resilence')),
    meta: {
      isPublicRoute: true,
    },
  },

];

export default AppRoutes;
