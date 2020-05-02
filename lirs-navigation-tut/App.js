import React, { useState } from 'react';
import { Image, Dimensions } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { IMAGE } from './image'
import { createDrawerNavigator } from 'react-navigation-drawer'

import * as Font from 'expo-font';
import { AppLoading } from 'expo';


import {
  SideMenu, Feed, FeedDetail, Search, SearchDetail, Profile,
  Settings, Login, Register
} from './src/components'

const navOptionHandler = (navigation) => ({
  header: null
})

const FeedStack = createStackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: navOptionHandler
  },
  FeedDetail: {
    screen: FeedDetail,
    navigationOptions: navOptionHandler
  }
})

const SearchStack = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: navOptionHandler
  },
  SearchDetail: {
    screen: SearchDetail,
    navigationOptions: navOptionHandler
  }
})

// Formerly TabNavigator
const MainTabs = createBottomTabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={IMAGE.ICON_FEED}
          resizeMode="contain"
          style={{ width: 20, height: 20 }}
        />
      )
    }
  },
  Search: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={IMAGE.ICON_SEARCH}
          resizeMode="contain"
          style={{ width: 20, height: 20 }}
        />
      )
    }
  }
});

const MainStack = createStackNavigator({
  Home: {
    screen: MainTabs,
    navigationOptions: navOptionHandler
  },
  Settings: {
    screen: Settings,
    navigationOptions: navOptionHandler
  },
  Profile: {
    screen: Profile,
    navigationOptions: navOptionHandler
  },
}, { initialRouteName: 'Home' })

const appDrawer = createDrawerNavigator(
  {
    drawer: MainStack
  },
  {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width * 3 / 4
  }
)

const authStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: navOptionHandler
  },
  Register: {
    screen: Register,
    navigationOptions: navOptionHandler
  }
})

const MainApp = createSwitchNavigator(
  {
    app: appDrawer,
    auth: authStack
  },
  {
    initialRouteName: 'auth'
  }
)

export default createAppContainer(MainApp);
// const Navigator = createAppContainer(MainApp);



// const getFonts = () => Font.loadAsync({
//   'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
//   // 'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
// });

// export default function App() {
//   const [fontsLoaded, setFontsLoaded] = useState(false);

//   if (fontsLoaded) {
//     return (
//       <Navigator />
//     );
//   } else {
//     return (
//       <AppLoading
//         startAsync={getFonts}
//         onFinish={() => setFontsLoaded(true)}
//       />
//     )
//   }

// }