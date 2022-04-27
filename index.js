import React from 'react';
import { Navigation as RNN } from 'react-native-navigation';
import { Provider } from 'react-redux';

import ComponentNames from './src/navigation/componentNames';
import Main from './src/screens/Main';
import store from './src/store';

RNN.registerComponent(
  ComponentNames.Main,
  () => props =>
    (
      <Provider store={store}>
        <Main />
      </Provider>
    ),
  () => Main,
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
              name: ComponentNames.Main,
            },
          },
        ],
      },
    },
  });
});
