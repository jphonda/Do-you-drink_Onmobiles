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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Button, Divider, List, Checkbox} from 'react-native-paper';


const MainMenu = ({title}) => (

    <View>

        <List.Accordion
            style={{padding: 20}}
            title={<Text style={{fontWeight: "bold"}}>{title}</Text>}
            left={props => <MaterialCommunityIcons
                name={'coffee-outline'}
                size={30}
                color={'#C28E79'}
            />}

        >
            <List.Item title="First item"
                       style={{left:50}}
                       left={props =>
                           <MaterialCommunityIcons
                               name={'coffee-outline'}
                               size={30}
                               color={'#C28E79'}
                           />}
            />
            <List.Item title="First item"
                       style={{left:50}}
                       left={props =>
                           <MaterialCommunityIcons
                               name={'coffee-outline'}
                               size={30}
                               color={'#C28E79'}
                           />}
            />
            <List.Item title="First item"
                       style={{left:50}}
                       left={props =>
                           <MaterialCommunityIcons
                               name={'coffee-outline'}
                               size={30}
                               color={'#C28E79'}
                           />}
            />
            <List.Item title="First item"
                       style={{left:50}}
                       left={props =>
                           <MaterialCommunityIcons
                               name={'coffee-outline'}
                               size={30}
                               color={'#C28E79'}
                           />}
            />
        </List.Accordion>

        <Divider/>


    </View>
)


type Props = {};
export default class App extends Component<Props> {


    state = {
        expanded: true,
    };


    _handlePress = () =>
        this.setState({
            expanded: !this.state.expanded
        });

    render() {

        return (

            <View style={styles.container}>

                <View style={{flexDirection: "row", justifyContent: "space-between", padding: 10}}>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <MaterialIcons
                            name={"keyboard-arrow-left"}
                            size={40}
                            color={"#C28E79"}
                        />
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 30,
                            fontWeight: "bold",

                            color: "#C28E79"
                        }}>Pay</Text>
                        <View>
                            <MaterialIcons
                                name={"keyboard-arrow-right"}
                                size={40}
                                color={"#C28E79"}
                            />
                        </View>
                    </View>
                </View>
                <Divider/>
                <View style={{
                    flexDirection:"row",
                    width: "100%",
                    position:'absolute',
                    bottom: 70,
                    backgroundColor: "#C28E79",
                    justifyContent:"space-between",
                    alignItems:"center",
                    padding:20,
                    zIndex:1

                }}>
                    <MaterialCommunityIcons
                        name={'point-of-sale'}
                        size={40}
                        color={"white"}
                    />
                    <Text style={{fontSize:30, color:"white", fontWeight:"bold"}}>2,000 THB.</Text>
                </View>
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

                <ScrollView>
                    <View style={{flex: 1, flexDirection: "column"}}>
                        <MainMenu title={'Espresso'}/>
                        <MainMenu title={'Cappuccino'}/>
                        <MainMenu title={'Craft Coffee'}/>
                        <MainMenu title={'Mocha'}/>
                        <MainMenu title={'Latte'}/>
                        <MainMenu title={'Espresso'}/>
                        <MainMenu title={'Cappuccino'}/>
                        <MainMenu title={'Craft Coffee'}/>
                        <MainMenu title={'Mocha'}/>
                        <MainMenu title={'Latte'}/>
                        <MainMenu title={'Espresso'}/>
                        <MainMenu title={'Cappuccino'}/>
                        <MainMenu title={'Craft Coffee'}/>
                        <MainMenu title={'Mocha'}/>
                        <MainMenu title={'Latte'}/>
                        <MainMenu title={'Espresso'}/>
                        <MainMenu title={'Cappuccino'}/>
                        <MainMenu title={'Craft Coffee'}/>
                        <MainMenu title={'Mocha'}/>
                        <MainMenu title={'Latte'}/>
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
