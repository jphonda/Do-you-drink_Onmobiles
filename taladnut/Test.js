import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Animated
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const HEADER_MAX_HEIGHT = 120
const HEADER_MIN_HEIGHT = 50
const PROFILE_IMAGE_MAX_HEIGHT = 130
const PROFILE_IMAGE_MIN_HEIGHT = 40

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center',padding:20}}>
                <View style={{height:200, backgroundColor: "red", width:"100%", borderRadius:20}}>
                </View>
            </View>
        );
    }
}


export default class App extends Component {



    constructor(props) {
        super(props)

        this.state = {
            scrollY: new Animated.Value(0)
        }
    }




    render() {



        const headerHeight = this.state.scrollY.interpolate({
            // 120-70 = 50
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: 'clamp'
        })
        const profileImageHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
            extrapolate: 'clamp'
        })

        const profileImageMarginTop = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HEIGHT / 2), HEADER_MAX_HEIGHT + 5],
            extrapolate: 'clamp'
        })
        const headerZindex = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, 120],
            outputRange: [0, 0, 1000],
            extrapolate: 'clamp'
        })

        const headerTitleBottom = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
                HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
                HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT
                + 100
            ],
            outputRange: [-170, -170, -170, -50],
            extrapolate: 'clamp'
        })


        const {name, badgeCount, color, size} = this.props;
        return (


            <View style={{flex: 1}}>

                <Animated.View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'lightskyblue',
                    height: headerHeight,
                    zIndex: headerZindex,
                    alignItems: "center",


                    // elevation: headerZindex,//required for android
                }}>

                    <Animated.View style={{
                        position: 'absolute',
                        bottom: headerTitleBottom,
                        width: "100%",
                        flexDirection: "row",
                        backgroundColor: 'white',
                    }}>
                        <View style={{alignItems: "center", flex: 1}}>
                            <Ionicons name={'ios-options'} size={25} color={'#d4d4d4'}/>
                                <View><Text>sss</Text></View>
                        </View>
                        <View style={{alignItems: "center", flex: 1}}>
                            <Ionicons name={'ios-options'} size={25} color={'#d4d4d4'}/>
                            <View><Text>sss</Text></View>
                        </View>
                        <View style={{alignItems: "center", flex: 1}}>
                            <Ionicons name={'ios-options'} size={25} color={'#d4d4d4'}/>
                            <View><Text>sss</Text></View>
                        </View>
                        <View style={{alignItems: "center", flex: 1}}>
                            <Ionicons name={'ios-options'} size={25} color={'#d4d4d4'}/>
                            <View><Text>sss</Text></View>
                        </View>
                        <View style={{alignItems: "center", flex: 1}}>
                            <Ionicons name={'ios-options'} size={25} color={'#d4d4d4'}/>
                            <View><Text>sss</Text></View>
                        </View>
                    </Animated.View>
                </Animated.View>

                <ScrollView style={{flex: 1}}
                            scrollEventThrottle={16}
                            onScroll={Animated.event(
                                [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
                            )}
                >
                    <View style={{alignItems: "center", }}>
                        <Animated.View style={{
                            height: profileImageHeight,
                            width: profileImageHeight,
                            borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
                            borderColor: 'white',
                            borderWidth: 3,
                            overflow: 'hidden',
                            marginTop: profileImageMarginTop,
                            marginLeft: 10,
                        }}>

                        </Animated.View>
                        <View><Text style={{fontWeight: 'bold', fontSize: 26, paddingLeft: 10, marginTop: 20}}>Varun
                            Nath</Text></View>
                    </View>
                    <View style={{height: 100}}></View>
                    <SettingsScreen/>
                    <SettingsScreen/>
                    <SettingsScreen/>
                    <SettingsScreen/>
                    <SettingsScreen/>
                </ScrollView>

            </View>



        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});