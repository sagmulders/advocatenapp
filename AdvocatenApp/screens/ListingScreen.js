import React from 'react';
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
    ImageBackground
} from 'react-native';


export default class ListingScreen extends React.Component {
    // removes white space (header) on the top
    static navigationOptions = {
        header: null,
    };


    render() {

        return (
            <ImageBackground source={require('../assets/images/bg.jpg')} style={{ width: '100%', height: '100%' }}>
                <View>
                    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
                            <Text style={{ fontSize: 30 }}> Advocaten app</Text>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
});
