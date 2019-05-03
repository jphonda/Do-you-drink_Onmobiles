import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class FetchExample extends React.Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    componentDidMount(){
        return fetch('http://10.252.253.203/water-project/API')
            .then((response) => response.json())
            .then((responseJson) => {

                console.log(responseJson)

                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }



    render(){

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return(
            <View style={{flex: 1, paddingTop:20}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>{item.id}, {item.id}</Text>}
                    keyExtractor={({id}, index) => id}
                />
            </View>
        );
    }
}
