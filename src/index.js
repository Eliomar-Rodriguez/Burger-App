import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import axios from 'axios';
import axios from 'axios';

// general settings, if I'll need 
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';// this url is global for all request with axios
//axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

//intercepta request
var requestInterceptor = axios.interceptors.request.use(request=>{
    console.log(request)
    //edit request configuration
    return request;
}, error=>{ // global error handler
    console.log(error)
    return Promise.reject(error);
})
//It is something like " Now my work is done, now, don't intercept it anymore"
axios.interceptors.request.eject(requestInterceptor); 

var responseInterceptor = axios.interceptors.response.use(response=>{
    console.log(response);
    //edit response configuration
    return response;
}, error=>{
    console.log(error);
    return Promise.reject(error);
})
//It is something like " Now my work is done, now, don't intercept it anymore"
axios.interceptors.response.eject(responseInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
