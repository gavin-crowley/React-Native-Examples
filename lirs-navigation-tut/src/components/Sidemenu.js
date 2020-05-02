import React from 'react'
import { View, Image, SafeAreaView, ScrollView } from 'react-native';
import { Text, List, ListItem } from 'native-base';
import { IMAGE } from '../../image'


export class SideMenu extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ height: 150, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={IMAGE.ICON_ACCOUNT}
                        style={{ height: 100, width: 100, borderRadius: 60 }}
                    />
                </View>
                <ScrollView>
                    <List>
                        <ListItem onPress={() => this.props.navigation.navigate('Settings')}>
                            <Text>Settings</Text>
                        </ListItem>
                        <ListItem onPress={() => this.props.navigation.navigate('Profile')}>
                            <Text>Profile</Text>
                        </ListItem>
                    </List>
                </ScrollView>

                <List>
                    <ListItem noBorder onPress={() => this.props.navigation.navigate('auth')}>
                        <Text>Logout</Text>
                    </ListItem>
                </List>

            </SafeAreaView>
        )
    }
}