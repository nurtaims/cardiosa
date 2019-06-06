import React from 'react';
import './Control.css';
import LineChartComponent from './LineChartComponent';
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDPQCTXfO0brNVvnMcfWDJ_O2aEXay0SxY",
    authDomain: "cardiosa-c7df3.firebaseapp.com",
    databaseURL: "https://cardiosa-c7df3.firebaseio.com",
    projectId: "cardiosa-c7df3",
    storageBucket: "cardiosa-c7df3.appspot.com",
    messagingSenderId: "57338619072",
    appId: "1:57338619072:web:32d65f32f202824b"
};


class Control extends React.Component {
    constructor() {
        super()
        this.app = firebase.initializeApp(firebaseConfig)
        this.database = this.app.database().ref().child('users')
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.database.on('value', snap => {
            var userData = []
            var values = []
            snap.forEach(eachSnap => {
                eachSnap.forEach(dataSnap => {
                    values.push(dataSnap.val())
                })
                userData.push({ name: eachSnap.key, data: values })
                values = []
            })
            this.setState({
                users: userData
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.users.map(function (item, i, arr) {
                        return <div key={i} style={{ marginBottom: 10 }}>
                            <LineChartComponent
                                data={item['data']}
                                username={item['name']}
                            />
                        </div>
                    })
                }
            </div>
        );
    }
}


export default Control;