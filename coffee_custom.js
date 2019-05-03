/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, ImageBackground, Image, Dimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MultiSwitch from "react-native-multi-switch";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel, {Pagination} from 'react-native-snap-carousel';


import _ from 'lodash';

const {width, height} = Dimensions.get('window');

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});


type Props = {};
export default class App extends Component<Props> {

    state = {
        slides: [
            {
                title: <Entypo name={"shopping-bag"} size={50}/>,
                name:'Espresso'

            },
            {
                title: <Entypo name={"shopping-bag"} size={50}/>,
                name:'Cappuccino'
            },
            {
                title: <Entypo name={"shopping-bag"} size={50}/>,
                name:'Mocha'
            },
            {
                title: <Entypo name={"shopping-bag"} size={50}/>,
                name:'Latte'
            },
            {
                title: <Entypo name={"shopping-bag"} size={50}/>,
                name:'boicome'
            }

        ],
        activeSlide: 5
    };

    _renderItem({item, index}) {
        return (
            <View style={styles.slide}>
                <View style={{backgroundColor: "white", padding: 40, borderRadius: 100,  elevation: 3}}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>

                <Text style={{paddingTop:20, fontWeight:'bold'}}>{item.name}</Text>
            </View>

        );
        // return <MySlideComponent data={item}/>
    }

    // get pagination() {
    //     const { slides, activeSlide } = this.state;
    //     return (
    //         <View style={{width:"30%"}}>
    //         <Pagination
    //             dotsLength={slides.length}
    //             activeDotIndex={activeSlide}
    //             containerStyle={{backgroundColor:'black'}}
    //             dotStyle={{
    //                 width: 10,
    //                 height: 10,
    //                 borderRadius: 5,
    //                 marginHorizontal: 8,
    //                 backgroundColor: 'rgba(255, 255, 255, 0.92)'
    //             }}
    //             inactiveDotStyle={{
    //                 // Define styles for inactive dots here
    //             }}
    //             inactiveDotOpacity={0.4}
    //             inactiveDotScale={0.6}
    //         />
    //         </View>
    //     );
    // }

    render() {

        return (

            <View style={styles.container}>

                <Text style={{
                    textAlign: 'center',
                    fontSize: 30,
                    fontWeight: "bold",
                    backgroundColor: "white",
                    padding: 20,
                    color: "#C28E79"
                }}>Do Your Drink</Text>


                <Image
                    style={{width: 400, height: 400, position: 'absolute', bottom: -20, right: -10, opacity: 0.02}}
                    source={require('./images/store.png')}
                />
                <View style={{
                    alignItems: "center",
                    padding: 20
                }}>
                    <MultiSwitch
                        choiceSize={50}
                        activeItemStyle={[{color: 'white'}, {color: 'black'}, {color: 'white'},]}
                        layout={{vertical: 1, horizontal: -1}}
                        containerStyles={[{
                            backgroundColor: '#ddd',
                            borderRadius: 30,
                            borderWidth: 1,
                            borderColor: "lightgrey",
                            alignItems: "center",
                        },
                            {
                                backgroundColor: '#ddd',
                                borderRadius: 30,
                                borderWidth: 1,
                                borderColor: "lightgrey",
                                alignItems: "center",


                            },
                            {
                                backgroundColor: '#ddd',
                                borderRadius: 30,
                                borderWidth: 1,
                                borderColor: "lightgrey",

                                alignItems: "center",

                            },
                            {
                                backgroundColor: '#ddd',
                                borderRadius: 30,
                                borderWidth: 1,
                                borderColor: "lightgrey",
                                alignItems: "center",

                            }]}
                        activeContainerStyle={[
                            {backgroundColor: 'white', borderRadius: 100}
                            , {backgroundColor: 'white', borderRadius: 100}
                            , {backgroundColor: 'white', borderRadius: 100}
                            , {backgroundColor: 'white', borderRadius: 100}
                        ]}
                        inactiveContainerStyle={[{borderRadius: 100,}
                            , {borderRadius: 100,}
                            , {borderRadius: 100,}
                            , {borderRadius: 100,}
                        ]}
                        activeItemStyle={[{color: 'black'}, {color: 'black'}, {color: 'black'}]}
                        inactiveItemStyle={[{color: 'black'}, {color: 'black'}, {color: 'black'}]}
                        active={1}>
                        <View style={{alignItems: "center"}}>
                            <Icon name="home" style={{fontSize: 25,}}></Icon>
                        </View>
                        <View style={{alignItems: "center"}}>
                            <Icon name="home" style={{fontSize: 25,}}></Icon>
                        </View>
                        <View style={{alignItems: "center"}}>
                            <Icon name="home" style={{fontSize: 25,}}></Icon>
                        </View>
                        <View style={{alignItems: "center"}}>
                            <Icon name="home" style={{fontSize: 25,}}></Icon>
                        </View>

                    </MultiSwitch>
                </View>
                <View style={{alignItems: "center", justifyContent: "center", padding: 60}}>
                    <Image source={require('./images/glass.png')} resizeMode={'contain'}
                           style={{width: 250, height: 300}}/>
                </View>
                <View>
                    <Carousel

                        data={this.state.slides}
                        renderItem={this._renderItem}
                        sliderWidth={width}
                        itemWidth={width - 250}
                    />
                </View>

                <View style={{position: "absolute", top: 200, left: 20}}>
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>Hello, Jakkapong</Text>
                    <Text>2 more ingradient</Text>
                </View>

                <View style={{
                    justifyContent: "center",
                    alignItems: "center",
                    position: 'absolute',
                    bottom: 0,
                    width: "100%",
                }}>
                    <View style={{
                        backgroundColor: "white",
                        padding: 20,
                        width: 300,
                        alignItems: "center",
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        justifyContent: 'center',
                        elevation: 2
                    }}>
                        <View style={{justifyContent: "center"}}>
                            <Text style={{fontWeight: "bold", fontSize: 21}}>Glass Size</Text>
                        </View>
                        <View style={{position: "absolute", right: 10}}>
                            <View style={{backgroundColor: "#C28E79", borderRadius: 100}}>
                                <MaterialIcons
                                    name={"keyboard-arrow-right"}
                                    size={40}
                                    color={"white"}
                                />
                            </View>
                        </View>
                    </View>
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
    slide: {
        alignItems: "center"
    }
});
