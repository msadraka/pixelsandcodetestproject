/* @flow */

import App from './app';

import {
  asyncLogin,
  asyncHallOfFame,
  asyncFameDetail,
  NotFound
} from './pages';

import { loadAll as loadAllFames } from 'actions/fames.action';


export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: asyncLogin
      },
      {
        path: '/hallOfFame',
        exact: true,
        component: asyncHallOfFame,
        loadData: () => [loadAllFames()]
      },
      {
        path: '/fame-detail/:id',
        exact: true,
        component: asyncFameDetail
      },
      {
        component: NotFound
      }
    ]
  }
];
