/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, ImageBackground, Image, TouchableOpacity} from 'react-native';
import Octicon from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
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


const mainMenu = {
    box: {
        width: "100%",
        height: 70,
        backgroundColor: "white",
        elevation: 1,
        flexDirection: "row",
        position: 'absolute',
        bottom: 0,
        alignItems: "center",
        justifyContent: "center"
    },
    row: {
        flex: 1,
        alignItems: "center"
    }
}

const BoxTitle = {
    box: {
        backgroundColor: "white",
        flexDirection: "row",
        padding: 20,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    }
}

const BoxNonti = {
    box: {
        flexDirection: "row",
        backgroundColor: "white",
        padding: 20,
        borderRadius: 20
    },

}


const BoxNontifycation = () => (
    <View style={{marginTop: 10}}>
        <View style={BoxNonti.box}>
            <View style={{flex: 0.5}}>
                <View style={{backgroundColor: "#ccc", height: 35, width: 35, borderRadius: 100}}>

                </View>
            </View>
            <View style={{flex: 2}}>
                <View style={{flexDirection: "row"}}>
                    <Text style={{fontWeight: "bold", fontSize: 15}}>นายจักรพงษ์ สารครศรี </Text>
                    <Text>สนใจโพสของคุณ</Text>
                </View>
                <Text>5 นาทีที่แล้ว</Text>
            </View>
            <View style={{flex: 0.5, alignItems: "flex-end"}}>
                <View style={{
                    backgroundColor: "#F93E7D",
                    height: 35,
                    width: 35,
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Ionicons
                        style={{marginTop: 4}}
                        name={'ios-heart'}
                        size={25}
                        color={'white'}
                    />
                </View>
            </View>

        </View>
    </View>
)


type Props = {};
export default class App extends Component<Props> {


    render() {

        return (

            <View style={styles.container}>

                <View style={mainMenu.box}>
                    <View style={mainMenu.row}>
                        <AntDesign
                            name={'home'}
                            size={30}
                            color={'#ccc'}
                        ></AntDesign>
                    </View>
                    <View style={mainMenu.row}>
                        <Ionicons
                            name={'ios-notifications-outline'}
                            size={35}
                            color={'#ccc'}
                        ></Ionicons>
                    </View>
                    <View style={mainMenu.row}>
                        <View style={{
                            backgroundColor: "#623DEA",
                            width: 80,
                            height: 80,
                            position: "absolute",
                            bottom: -10,
                            borderRadius: 100,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <View style={{
                                backgroundColor: "white",
                                width: 70,
                                height: 70,
                                position: "absolute",
                                borderRadius: 100,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <View style={{
                                    backgroundColor: "#623DEA",
                                    width: 60,
                                    height: 60,
                                    position: "absolute",
                                    borderRadius: 100,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={mainMenu.row}>
                        <Ionicons
                            name={'ios-list'}
                            size={35}
                            color={'#ccc'}
                        ></Ionicons>
                    </View>
                    <View style={mainMenu.row}>
                        <SimpleLineIcons
                            name={'settings'}
                            size={30}
                            color={'#ccc'}
                        ></SimpleLineIcons>
                    </View>

                </View>
                <View>
                    <View style={BoxTitle.box}>

                        <Ionicons
                            style={{position: "absolute", left: 20}}
                            name={'ios-arrow-round-back'}
                            size={40}
                            color={'#444'}
                        />
                        <Text style={{fontSize: 30, color: "#444"}}>การแจ้งเตือน</Text>

                    </View>
                    <ScrollView>
                        <View style={{marginBottom: 80}}>
                            <BoxNontifycation/>
                            <BoxNontifycation/>
                            <BoxNontifycation/>
                            <BoxNontifycation/>
                            <BoxNontifycation/>
                            <BoxNontifycation/>
                            <BoxNontifycation/>
                            <BoxNontifycation/>
                            <BoxNontifycation/>


                        </View>
                    </ScrollView>
                </View>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#EDF6FE',

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
