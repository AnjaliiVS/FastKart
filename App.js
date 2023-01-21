import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTab from './src/navigation/BottomTab'
import StackNavigation from './src/navigation/StackNavigation'
import DrawerNavigation from './src/navigation/DrawerNavigation'
const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
      
     
    </NavigationContainer>
  )
}

 export default App
// import * as React from 'react';
// import { Searchbar } from 'react-native-paper';
// import AntDesign from 'react-native-vector-icons/AntDesign'
// import Octicons from 'react-native-vector-icons/Octicons'
// const MyComponent = () => {
//   const [searchQuery, setSearchQuery] = React.useState('');

//   const onChangeSearch = query => setSearchQuery(query);

//   return (
//     <Searchbar
//       placeholder="Search"
//       onChangeText={onChangeSearch}
//       value={searchQuery}
//       icon={() => <VctrIcon />}
//     />
//   );
// };

//export default MyComponent;