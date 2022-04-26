import { Navigation as RNN } from 'react-native-navigation';

import ComponentNames from './src/navigation/componentNames';
import Main from './src/screens/Main';

RNN.registerComponent(ComponentNames.Main, () => Main);

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
