import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import AppWrapper from './src/App'
// import Main from './src/main'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppWrapper);