import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


function Sample() {
    console.log("hello");
    return (
        <App> </App>

    );
}

ReactDOM.render( <Sample/> , document.getElementById('root'));