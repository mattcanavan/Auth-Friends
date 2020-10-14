import React, { Component } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default class FriendsList extends Component {
    
    componentDidMount() {
        axiosWithAuth()
        .get('api/friends')
        .then(res => console.log(res))
    }
    
    render() {
        return (
            <div>
                <h1>Friends List:</h1>
                <hr />
            </div>
        )
    }
}
