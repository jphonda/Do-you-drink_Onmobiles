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
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MapView, {PROVIDER_GOOGLE, Marker, LatLng} from 'react-native-maps';
import SlidingUpPanel from 'rn-sliding-up-panel';
import {Button} from "react-native-paper";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});


const Test = {
    container: {
        flex: 1,
        backgroundColor: 'white',

        marginTop: 70
    }
}

const Address = {
    Title: {
        marginTop: 30,
        fontWeight: "bold",
        fontSize: 20
    },
    Content:{
        marginTop:10,
        fontSize: 20
    }
}

type Props = {};
export default class App extends Component<Props> {

    state = {
        location: null,
        kuy: 'asdasd'
    };

    componentDidMount() {
        this._callGeoLocation()
    }

    _callGeoLocation = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({location: position});
            },
            error => Alert.alert(error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
    };

    render() {


        // const {location, kuy} = this.state;
        const {location} = this.state;

        const loadMapView = location != null ? <MapView
                provider={PROVIDER_GOOGLE}
                style={{flex: 1}}
                region={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                <Marker
                    coordinate={{latitude: location.coords.latitude, longitude: location.coords.longitude,}}
                    image={require('./images/car(1).png')}

                />

                <Marker
                    coordinate={{latitude: 16.4186389, longitude: 102.8301865,}}
                    image={require('./images/phone(1).png')}

                />

            </MapView> :
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>Loading</Text></View>;

        // loadMapView = this.state.location != null ? <Text>Location: {location.coords.latitude}, {location.coords.longitude}</Text> : <View/>;

        return (

            <View style={styles.container}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 30,
                    fontWeight: "bold",
                    backgroundColor: "white",
                    padding: 20,
                    color: "#C28E79",
                    zIndex: 99,
                    elevation: 2
                }}>Do Your Drink</Text>

                <View style={{
                    width: "100%",
                    height: 70,
                    backgroundColor: "white",
                    elevation: 10,
                    flexDirection: "row",
                    position: 'absolute',
                    bottom: 0
                }}>
                    <View style={{flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center",}}>
                        <AntDesign
                            name={'home'}
                            size={30}
                            color={'#C28E79'}
                        />
                        <Text style={{fontWeight: 'bold', color: "#C28E79"}}>Home</Text>
                    </View>
                    <View style={{flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center",}}>
                        <MaterialCommunityIcons
                            name={'map-marker-path'}
                            size={30}
                            color={'#C28E79'}
                        />
                        <Text style={{fontWeight: 'bold', color: "#C28E79"}}>Location</Text>

                    </View>
                    <View style={{flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center",}}>
                        <MaterialCommunityIcons
                            name={'coffee-outline'}
                            size={30}
                            color={'#C28E79'}
                        />
                        <Text style={{fontWeight: 'bold', color: "#C28E79"}}>Bill</Text>
                    </View>
                    <View style={{flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center",}}>
                        <Feather
                            name={'user'}
                            size={30}
                            color={'#C28E79'}
                        />
                        <Text style={{fontWeight: 'bold', color: "#C28E79"}}>Account</Text>
                    </View>
                </View>
                <Image
                    style={{width: 400, height: 400, position: 'absolute', bottom: -20, right: -10, opacity: 0.2}}
                    source={require('./images/store.png')}
                />
                <View style={{position: 'absolute', bottom: 70, zIndex: 100, width: "100%",}}>
                    <Button style={{borderRadius: 0, backgroundColor: "#C28E79", textColor: "white"}} mode="contained"
                            onPress={() => this._panel.show()}>
                        <Text style={{fontSize: 20, fontWeight: "bold", color: "white"}}>View Detail</Text>
                    </Button>
                </View>
                {loadMapView}
                <SlidingUpPanel ref={c => this._panel = c}>
                    <View style={Test.container}>
                        <View style={{padding: 30}}>
                            <Text style={{fontSize: 30, fontWeight: "bold"}}>
                                Bluekoff
                            </Text>
                            <View style={{flexDirection: "row"}}>
                                <View style={{flex: 1}}>
                                    <Text style={{fontSize: 20}}>
                                        4.23 mi
                                    </Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={{fontSize: 20}}>
                                        20 min
                                    </Text>
                                </View>

                            </View>
                            <View style={{marginTop: 30, width: "100%",}}>
                                <Button style={{borderRadius: 100, backgroundColor: "#C28E79", textColor: "white"}}
                                        mode="contained"
                                        onPress={() => this._panel.show()}>
                                    <Text style={{fontSize: 20, fontWeight: "bold", color: "white"}}>View Menu</Text>
                                </Button>
                            </View>
                            <View>
                                <Text style={Address.Title}>
                                    Address
                                </Text>
                                <Text style={Address.Content}>
                                    3 Michel Bakhoum Dokki , Chairo
                                </Text>
                            </View>
                            <View>
                                <Text style={Address.Title}>
                                    To Address
                                </Text>
                                <Text style={Address.Content}>
                                    212 Los santos, USA , Chairo
                                </Text>
                            </View>
                        </View>
                        <Button title='Hide' onPress={() => this._panel.hide()}/>
                    </View>
                </SlidingUpPanel>

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
