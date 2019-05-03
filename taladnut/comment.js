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
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { TabView, SceneMap } from 'react-native-tab-view';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});


const BoxComment = {
    box: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: "white",

    }
}

const BoxCus = {

    box: {
        backgroundColor: "white",
        borderRadius: 20,
        margin: 10,
        elevation: 0,
        padding: 20,

    },

    cusID: {
        flexDirection: "row",

    }
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
        justifyContent: "center",
        padding: 20
    },
    row: {
        flex: 1,
        alignItems: "center"
    }
}
const PostUser = () => (

    <View style={BoxCus.box}>
        <View style={BoxCus.cusID}>
            <View style={{flex: 0.4}}>
                <View style={{backgroundColor: "#ddd", width: 35, height: 35, borderRadius: 100}}>

                </View>
            </View>
            <View style={{flex: 2}}>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>วิสิฐ ภูศรี</Text>
                <Text style={{fontSize: 15, fontWeight: "bold"}}>พฤ. เวลา 12:00</Text>
            </View>
            <View style={{flex: 0.5, alignItems: 'flex-end'}}>
                <View style={{
                    backgroundColor: "white",
                    width: 35,
                    height: 35,
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <MaterialCommunityIcons
                        name={'dots-horizontal'}
                        size={20}
                        color={'#ccc'}
                    ></MaterialCommunityIcons>

                </View>
            </View>

        </View>
        <View style={{marginTop: 20}}>
            <View style={{flexDirection: "row"}}>
                <View style={{flex: 1}}>
                    <View style={{
                        backgroundColor: "#ccc",
                        height: 200,
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                        margin: 1
                    }}>

                    </View>
                </View>
                <View style={{flex: 1}}>
                    <View style={{
                        backgroundColor: "#ccc",
                        height: 200,
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                        margin: 1
                    }}>

                    </View>
                </View>
                <View style={{flex: 1}}>
                    <View style={{flexDirection: "column"}}>
                        <View style={{backgroundColor: "#ccc", height: 100, borderRadius: 10, margin: 1}}>
                        </View>
                        <View style={{backgroundColor: "#ccc", height: 100, borderRadius: 10, margin: 1}}>
                        </View>
                    </View>
                </View>
            </View>
        </View>
        <View style={{marginTop: 10, flexDirection: "row"}}>
            <View style={{
                padding: 7,
                alignItems: "center",
                borderWidth: 1,
                width: 120,
                borderColor: "#ccc",
                borderRadius: 5,
                margin: 5
            }}>
                <Text>ราคารวมค่าจัดส่ง</Text>
            </View>
            <View style={{
                padding: 7,
                alignItems: "center",
                borderWidth: 1,
                width: 120,
                borderColor: "#ccc",
                borderRadius: 5,
                margin: 5
            }}>
                <Text>ห้ามต่อรอง</Text>
            </View>
        </View>
        <View style={{marginTop: 15}}>
            <View style={BoxCus.cusID}>
                <View style={{flex: 0.4}}>
                    <View
                        style={{
                            backgroundColor: "#EDF6FE",
                            width: 35,
                            height: 35,
                            borderRadius: 100,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <AntDesign
                            style={{
                                marginTop: 5
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
                        style={{backgroundColor: "#EDF6FE", width: "80%", height: 35, borderRadius: 100, padding: 5}}>
                        <View style={{flexDirection: "row", alignItems: 'center'}}>
                            <MaterialCommunityIcons
                                name={'android-messages'}
                                size={20}
                                color={'#ccc'}
                            ></MaterialCommunityIcons>
                            <Text style={{fontSize: 20, marginLeft: 10, color: "#ccc"}}>ตอบกลับ</Text>
                        </View>


                    </View>
                </View>
                <View style={{flex: 0.5, alignItems: 'flex-end'}}>
                    <View
                        style={{
                            backgroundColor: "#623DEA",
                            width: 35,
                            height: 35,
                            borderRadius: 100,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
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

const PostSale = () => (


    <View style={BoxCus.box}>
        <View style={BoxCus.cusID}>
            <View style={{flex: 0.4}}>
                <View style={{backgroundColor: "#ddd", width: 35, height: 35, borderRadius: 100}}>

                </View>
            </View>
            <View style={{flex: 2}}>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>วิสิฐ ภูศรี</Text>
                <Text style={{fontSize: 15, fontWeight: "bold"}}>พฤ. เวลา 12:00</Text>
            </View>
            <View style={{flex: 0.5, alignItems: 'flex-end'}}>
                <View style={{
                    backgroundColor: "white",
                    width: 35,
                    height: 35,
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <MaterialCommunityIcons
                        name={'dots-horizontal'}
                        size={20}
                        color={'#ccc'}
                    ></MaterialCommunityIcons>

                </View>
            </View>

        </View>
        <View style={{marginTop: 20}}>
            <View style={BoxCus.cusID}>

                <View style={{flex: 2.5}}>
                    <Text style={{fontSize: 20}}> ตามจ้า ++++</Text>
                </View>
                <View style={{flex: 0.5, alignItems: 'flex-end'}}>
                    <View
                        style={{
                            backgroundColor: "#623DEA",
                            width: 35,
                            height: 35,
                            borderRadius: 100,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
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
                    <View style={{flex: 0.5, alignItems: "center"}}>
                        <MaterialCommunityIcons
                            name={'store'}
                            size={30}
                            color={"#333"}
                        />
                        <Text>ตั้งราคา</Text>
                    </View>
                    <View style={{flex: 2}}>
                        <View style={{
                            backgroundColor: "#EDF6FE",
                            height: 35,
                            justifyContent: "center",
                            padding: 10,
                            borderRadius: 100
                        }}>
                            <Text>เขียนข้อความ</Text>
                        </View>
                    </View>
                    <View style={{flex: 0.5, alignItems: "flex-end"}}>
                        <View
                            style={{
                                backgroundColor: "#623DEA",
                                width: 35,
                                height: 35,
                                borderRadius: 100,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <Ionicons
                                style={{marginLeft: 4, marginTop: 2}}
                                name={'md-send'}
                                size={20}
                                color={'white'}
                            ></Ionicons>

                        </View>
                    </View>
                </View>
                <View style={{padding:20}}>
                <View style={BoxComment.box}>

                    <View style={{flexDirection: "row"}}>
                        <View style={{flex: 0.4, justifyContent: "center"}}>
                            <View style={{ height:55, borderRadius:100 , justifyContent:"center", alignItems:"center"}}>
                                <Ionicons
                                    name={'ios-arrow-round-back'}
                                    size={40}
                                    color={'#ccc'}
                                />
                            </View>
                        </View>
                        <View style={{flex: 2, justifyContent: "center"}}>
                            <Text>หาชุดไปเที่ยวผับ แนวเท่ห์ๆ
                                สาวติดตึมครับผม ขอ ...
                            </Text>
                        </View>
                        <View style={{flex: 0.5,justifyContent: "center",alignItems:"center"}}>
                            <View style={{ borderWidth:1, borderRadius:100, borderColor:"#ccc", width:40, height:40, justifyContent:"center", alignItems:"center"}}>
                                <Ionicons
                                    name={'ios-heart-empty'}
                                    size={30}
                                    color={'#ccc'}
                                />
                            </View>
                        </View>


                    </View>
                </View>
                </View>

                <ScrollView>
                    <View style={{marginBottom: 80}}>
                        <PostUser/>
                        <PostSale/>
                        <PostSale/>
                        <PostSale/>
                        <PostSale/>
                        <PostSale/>
                        <PostSale/>
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
