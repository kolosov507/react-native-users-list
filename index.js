import React from 'react';
import { Navigation as RNN } from 'react-native-navigation';
import { Provider } from 'react-redux';

import ComponentNames from './src/navigation/componentNames';
import UsersList from './src/features/UsersList';
import store from './src/store';

RNN.registerComponent(
  ComponentNames.UsersList,
  () => props =>
    (
      <Provider store={store}>
        <UsersList />
      </Provider>
    ),
  () => UsersList,
);

RNN.events().registerAppLaunchedListener(() => {
  RNN.setDefaultOptions({
    topBar: {
      visible: false,
    },
  });

  RNN.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: ComponentNames.UsersList,
            },
          },
        ],
      },
    },
  });
});
