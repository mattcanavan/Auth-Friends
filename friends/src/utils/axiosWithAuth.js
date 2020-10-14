import axios from 'axios';

export const axiosWithAuth = () => {
    //get token form localStorage
    const token = window.localStorage.getItem('token');

    //create new "instance" of axios with the config obj built-in
    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'http://localhost:5000'
    })
}