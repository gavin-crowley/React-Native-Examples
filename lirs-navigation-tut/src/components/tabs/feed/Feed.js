import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'native-base';
import { CustomHeader } from '../../CustomHeader'


export class Feed extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <CustomHeader title="Feed" isHome={true} navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Feed Screen</Text>
                    <Button light onPress={() => this.props.navigation.navigate('FeedDetail')}>
                        <Text>Go to Feed Detail</Text>
                    </Button>
                </View>
            </View>
        );
    }
}