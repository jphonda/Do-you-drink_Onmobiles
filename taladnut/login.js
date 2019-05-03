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

const loginSty = {
    headTitle: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#623DEA",

    },
    postTimeLine: {
        flexDirection: "row",
        backgroundColor: "white",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 30,
        elevation: 1
    },

}

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

const BoxCus = {

    box: {
        backgroundColor: "white",
        marginTop: 30,
        borderRadius: 20,
        margin: 10,
        elevation: 0,
        padding: 20,

    },

    cusID: {
        flexDirection: "row",

    }
}


const PostUser = () => (

    <View style={BoxCus.box} >
        <View style={BoxCus.cusID}>
            <View style={{flex: 0.4}}>
                <View style={{backgroundColor: "#ddd", width: 35, height: 35, borderRadius: 100}}>

                </View>
            </View>
            <View style={{flex: 2}}>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>วิสิฐ ภูศรี</Text>
                <Text style={{fontSize: 15, fontWeight: "bold"}}>พฤ. เวลา 12:00</Text>
            </View>
            <View style={{flex: 0.5, alignItems:'flex-end'}}>
                <View style={{backgroundColor: "white", width: 35, height: 35, borderRadius: 100, justifyContent:"center", alignItems:"center"}}>
                    <MaterialCommunityIcons
                        name={'dots-horizontal'}
                        size={20}
                        color={'#ccc'}
                    ></MaterialCommunityIcons>

                </View>
            </View>

        </View>
        <View style={{marginTop: 20}}>
            <Text style={{fontSize: 20}}>หาชุดไปเที่ยวผับ แนวเท่ห์ๆ สาวติดตึมครับผม ขอแบบราคา
                กันเองๆหน่อย รวมส่งด้วย</Text>
        </View>
        <View style={{marginTop: 20}}>
            <View style={BoxCus.cusID}>
                <View style={{flex: 0.4}}>
                    <View
                        style={{backgroundColor: "#EDF6FE", width: 35, height: 35, borderRadius: 100, justifyContent:"center", alignItems:"center"}}>
                        <AntDesign
                            style={{
                                marginTop:5
                            }}
                            name={'hearto'}
                            size={20}
                            color={'#ccc'}
                        >
                        </AntDesign>
                    </View>
                </View>
                <View style={{flex: 2}}>
                    <View
                        style={{backgroundColor: "#EDF6FE", width: "80%", height: 35, borderRadius: 100, padding:5}}>
                        <View style={{flexDirection: "row", alignItems: 'center'}}>
                            <MaterialCommunityIcons
                                name={'android-messages'}
                                size={20}
                                color={'#ccc'}
                            ></MaterialCommunityIcons>
                            <Text style={{fontSize:20, marginLeft:10 ,color:"#ccc"}}>ตอบกลับ</Text>
                        </View>


                    </View>
                </View>
                <View style={{flex: 0.5, alignItems:'flex-end'}}>
                    <View
                        style={{backgroundColor: "#623DEA", width: 35, height: 35, borderRadius: 100,justifyContent:"center", alignItems:"center"}}>
                        <MaterialCommunityIcons
                            name={'message-bulleted'}
                            size={20}
                            color={'white'}
                        ></MaterialCommunityIcons>

                    </View>
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
                <View style={loginSty.headTitle}>
                    <Text style={{fontWeight: "bold", color: "white", fontSize: 40}}>Shopping Pop</Text>
                </View>
                <View style={loginSty.postTimeLine}>
                    <View style={{flex: 0.5}}>
                        <View style={{backgroundColor: "#ddd", width: 45, height: 45, borderRadius: 100}}>

                        </View>
                    </View>
                    <View style={{flex: 1.7}}>
                        <View style={{backgroundColor: "#EDF6FE", width: "100%", height: 45, borderRadius: 100, padding:10 }}>
                            <Text style={{fontSize:20, color:"#ccc"}}>คุณกำลังหาอะไรอยู่...</Text>
                        </View>
                    </View>
                    <View style={{flex: 0.8, marginLeft: 10}}>
                        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                            <View style={{flex: 1}}>
                                <View style={{backgroundColor: "white", width: 45, height: 45, borderRadius: 100, justifyContent:"center", alignItems:"center"}}>
                                    <Ionicons
                                        name={'md-images'}
                                        size={35}
                                        color={'#ccc'}
                                    ></Ionicons>
                                </View>
                            </View>
                            <View style={{flex: 1, marginLeft: 10}}>
                                <View style={{backgroundColor: "white", width: 45, height: 45, borderRadius: 100,justifyContent:"center", alignItems:"center"}}>
                                    <MaterialCommunityIcons
                                        name={'dots-horizontal'}
                                        size={30}
                                        color={'#ccc'}
                                    ></MaterialCommunityIcons>
                                </View>
                            </View>
                        </View>

                    </View>
                </View>

                <ScrollView>
                    <View style={{marginBottom: 80}}>
                        <PostUser/>
                        <PostUser/>
                        <PostUser/>
                        <PostUser/>
                        <PostUser/>
                        <PostUser/>
                        <PostUser/>
                        <PostUser/>

                    </View>
                </ScrollView>
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
