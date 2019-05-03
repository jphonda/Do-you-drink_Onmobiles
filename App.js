/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    ImageBackground,
    Image,
    TouchableOpacity,
    FlatList,
    ListView
} from 'react-native';
import Octicon from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});


type Props = {};
export default class App extends Component<Props> {

    constructor(prop) {
        super(prop);
        this.state = {
            customers: [],
            name: [],
        }

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
    }

    componentDidMount() {
        console.log('test')
        axios.get(`http://10.252.253.203:5000/customers`)
            .then(res => {
                const customers = res.data;
                console.log(customers)
                this.setState({
                    customers
                })
                //
                // customers.map((item) => {
                //     this.setState({
                //         name: item.name
                //     })
                // })
                // // console.log('test2',customers[0].name)
                // console.log(this.state.name)
            })

    }

    _cardItem = (item) => (
        <TouchableOpacity
            activeOpacity={0.85}
            style={{
                flex: 1,
                height: 200,
                margin: 10,
                backgroundColor: "white",
                elevation: 10,
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center"
            }}>
            <View style={{
                width: "60%",
                height: "60%",
                backgroundColor: "#2B5CCD",
                borderRadius: 20
            }}/>
            <Text style={{
                paddingTop: 10,
                fontWeight: "bold",
                fontSize: 20,

            }}>
                {item.name}
            </Text>
        </TouchableOpacity>
    )


    render() {

        const Card = () => (

            <TouchableOpacity
                activeOpacity={0.85}
                style={{
                    flex: 1,
                    height: 200,
                    margin: 10,
                    backgroundColor: "white",
                    elevation: 10,
                    borderRadius: 30,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <View style={{
                    width: "60%",
                    height: "60%",
                    backgroundColor: "#2B5CCD",
                    borderRadius: 20
                }}/>
                <Text style={{
                    paddingTop: 10,
                    fontWeight: "bold",
                    fontSize: 20,

                }}>

                </Text>
            </TouchableOpacity>
        )

        const ContainerCard = () => (
            <View style={{flexDirection: "row"}}>
                <Card/>
                <Card/>

            </View>
        )


        const List = () => {
            const {customers} = this.state
            if(customers != null) {
                return (
                    <FlatList
                        numColumns={2}
                        data={customers}
                        keyExtractor={(item, index) => index}
                        renderItem={({item}) => this._cardItem(item)}
                    />
                )
            }else {
                return <Text>Loading...</Text>
            }

        }
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

                <ScrollView>

                    <View style={{marginTop: 10, flexDirection: "column", marginBottom: 20}}>
                        {/*<ContainerCard/>*/}
                        {/*<ContainerCard/>*/}
                        <List/>

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
