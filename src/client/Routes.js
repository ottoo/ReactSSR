import React from 'react';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UsersListPage from './pages/UsersListPage';
import UserItem from './pages/UserItem';

export default [
  {
    ...HomePage,
    path: '/',
    exact: true
  },
  {
    ...UsersListPage,
    path: '/users',
    routes: [
      {
        ...UserItem,
        path: '/users/:id'
      }
    ]
  }
];
