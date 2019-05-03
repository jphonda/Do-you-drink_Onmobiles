import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class FetchExample extends React.Component {


    render(){
        var myArray = [
            {
                "id": 824233,
                "project_id": 1457,
                "issue_id": 123420,
                "activity_id": 71,
                "comments": "Testing",
            },
            {
                "id": 824234,
                "project_id": 1457,
                "issue_id": 123420,
                "activity_id": 188,
                "comments": "test",
            },
            {
                "id": 824235,
                "project_id": 1457,
                "issue_id": 123420,
                "activity_id": 188,
                "comments": "Test",
            }
        ];

        fetch('http://10.252.253.203/water-project/API', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(myArray)
        })
    }
}
