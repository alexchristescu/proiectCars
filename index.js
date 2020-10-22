/**
 * @format
 */

import {AppRegistry} from 'react-native';
import navigator from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => navigator);
