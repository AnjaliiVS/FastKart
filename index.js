/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrendSearch from './src/components/TrendSearch';
import Search from './src/screens/Search'
import ItemSearch from './src/components/ItemSearch'
import HeaderOffer from './src/components/headeroffer';
import ContainerOffer from './src/components/ContainerOffer';
import Cart from './src/screens/Cart'
import HeaderCart from './src/components/headercart';
AppRegistry.registerComponent(appName, () => App);
