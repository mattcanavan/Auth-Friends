import React, { Component } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default class LoginForm extends Component {
    state = {
        credentials: {
          username: "",
          password: ""
        }
      };
    
      onChange = (e) => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };

      login = (e) => {
        e.preventDefault();

        //make POST request, send credents obj to API
        axiosWithAuth()
          .post("/api/login", this.state.credentials)
          .then(res => {
            window.localStorage.setItem('token', res.data.payload);
            this.props.history.push('/protected')
          })
          .catch(err => console.log(err))
      };

    render() {
        return (
            <div>
                <h1>Friends API Login</h1>
                <form onSubmit={this.login}> 
                    <div>
                        <label>Username: </label>
                        <input 
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange= {this.onChange} />
                    </div>
                    <br />
                    <div>
                        <label>Password: </label>
                        <input 
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange= {this.onChange} />
                    </div>
                    <br />
                    <button type='submit'>Login</button>


                </form>
            </div>
        )
    }
}
