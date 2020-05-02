// import React, { useState } from 'react';
// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';
// import Navigator from './App';

// const getFonts = () => Font.loadAsync({
//     'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
//     // 'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
// });

// export default function Index() {
//     const [fontsLoaded, setFontsLoaded] = useState(false);

//     if (fontsLoaded) {
//         return (
//             <Navigator />
//         );
//     } else {
//         return (
//             <AppLoading
//                 startAsync={getFonts}
//                 onFinish={() => setFontsLoaded(true)}
//             />
//         )
//     }

// }

// import React, { Component } from 'react';
// import { View, } from "react-native";
// import { Button, Text } from 'native-base';
// import { Font } from 'expo';
// import { Ionicons } from '@expo/vector-icons';
// import Navigator from './App';

// export default class Index extends Component {

//     state = {
//         loading: true
//     }

//     async componentDidMount() {
//         await Font.loadAsync({
//             'Roboto': require('native-base/Fonts/Roboto.ttf'),
//             'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
//             ...Ionicons.font,
//         })
//         this.setState({ loading: false })
//     }

//     render() {
//         if (this.state.loading) {
//             return (
//                 <View></View>
//             );
//         }
//         return (
//             <View>
//                 {/* <Navigator /> */}
//             </View>
//         )
//     }
// }