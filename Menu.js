/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Button} from 'react-native-paper';

const MainMenu = () => (
    <View style={{flexDirection: "row", padding:20,}}>
        <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
            <MaterialCommunityIcons
                name={"coffee-outline"}
                size={30}
                color={'#C28E79'} />
        </View>
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontWeight:"bold" , fontSize:20}}>Espresso</Text>
        </View>
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Button style={{width:50, borderRadius:20}} icon="" mode="outlined" onPress={() => console.log('Pressed')}>
                Buy
            </Button>
        </View>
    </View>
)


type Props = {};
export default class App extends Component<Props> {


    render() {

        return (

            <View style={styles.container}>


                <Text style={{
                    textAlign: 'center',
                    fontSize: 30,
                    fontWeight: "bold",
                    padding: 20,
                    color: "#C28E79"
                }}>Menu</Text>

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
                    style={{width: 400, height: 400, position: 'absolute', bottom: -20, right: -10, opacity: 0.03}}
                    source={require('./images/store.png')}
                />
                <Image
                    style={{width: "100%", height: 230, position: 'absolute', marginTop:70}}
                    source={require('./images/Group.png')}
                />

                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 220}}>
                    <View style={{flex: 1}}>
                        <Image
                            style={{width: 200, height: 200}}
                            source={require('./images/store2.png')}
                        />
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={{
                            padding: 10,
                            textAlign: "center",
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: "#C28E79"
                        }}>
                            Solve coffee recipes according to your style
                        </Text>
                        <Button style={{margin: 10, borderRadius: 30, backgroundColor: '#C28E79'}} color={'#000'}
                                mode="contained" onPress={() => console.log('Pressed')}>
                            Press me
                        </Button>
                    </View>

                </View>

                <ScrollView>
                    <View style={{flex: 1, flexDirection: "column"}}>
                        <MainMenu/>
                        <MainMenu/>
                        <MainMenu/>
                        <MainMenu/>
                        <MainMenu/>
                        <MainMenu/>
                        <MainMenu/>
                        <MainMenu/>
                        <MainMenu/>
                        <MainMenu/>
                        <MainMenu/>
                        <MainMenu/>
                        <MainMenu/>
                        <MainMenu/>
                        <MainMenu/>
                        <MainMenu/>
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
