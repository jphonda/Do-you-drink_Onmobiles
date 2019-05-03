/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView,ImageBackground,Image, TouchableOpacity,FlatList} from 'react-native';
import Octicon from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});






type Props = {};
export default class App extends Component<Props> {



    render() {

        return (

            <View style={styles.container}>

                <Text style={{
                    textAlign: 'center',
                    fontSize: 30,
                    fontWeight: "bold",
                    backgroundColor:"white",
                    padding:20,
                    color: "#C28E79"
                }}>Do Your Drink</Text>

                <View style={{ width: "100%", height: 70, backgroundColor: "white", elevation: 10, flexDirection:"row", position: 'absolute', bottom: 0}}>
                    <View style={{flex:1, backgroundColor:"white",justifyContent:"center", alignItems:"center",}}>
                        <AntDesign
                            name={'home'}
                            size={30}
                            color={'#C28E79'}
                        />
                        <Text style={{fontWeight:'bold', color: "#C28E79"}}>Home</Text>
                    </View>
                    <View style={{flex:1, backgroundColor:"white",justifyContent:"center", alignItems:"center",}}>
                        <MaterialCommunityIcons
                            name={'map-marker-path'}
                            size={30}
                            color={'#C28E79'}
                        />
                        <Text style={{fontWeight:'bold', color: "#C28E79"}}>Location</Text>

                    </View>
                    <View style={{flex:1, backgroundColor:"white",justifyContent:"center", alignItems:"center",}}>
                        <MaterialCommunityIcons
                            name={'coffee-outline'}
                            size={30}
                            color={'#C28E79'}
                        />
                        <Text style={{fontWeight:'bold', color: "#C28E79"}}>Bill</Text>
                    </View>
                    <View style={{flex:1, backgroundColor:"white",justifyContent:"center", alignItems:"center",}}>
                        <Feather
                            name={'user'}
                            size={30}
                            color={'#C28E79'}
                        />
                        <Text style={{fontWeight:'bold', color: "#C28E79"}}>Account</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <FlatList
                        data={[
                            {key: 'Devin'},
                            {key: 'Jackson'},
                            {key: 'James'},
                            {key: 'Joel'},
                            {key: 'John'},
                            {key: 'Jillian'},
                            {key: 'Jimmy'},
                            {key: 'Julie'},
                        ]}
                        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                    />
                </View>
                <Image
                    style={{width: 400, height: 400, position:'absolute',bottom: -20, right:-10,opacity:0.2}}
                    source={require('./images/store.png')}
                />




            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fbfbfb',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
