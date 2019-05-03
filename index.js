/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';



const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'tomato',
        accent: 'yellow',
    },
};


class Index extends Component {


    render() {

        return (
            <PaperProvider theme={theme}>
                <App/>
            </PaperProvider>
        )
    }


}

AppRegistry.registerComponent(appName, () => Index);
