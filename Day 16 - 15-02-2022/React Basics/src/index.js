// Using Class Component
// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// class Greet extends React.Component {
//     render() {
//         return <h1> Hello! </h1>;
//     }
// }
// ReactDOM.render( < Greet / > , document.getElementById('root'));

//Using Function Component

// import React from 'react';
// import ReactDOM from 'react-dom';

// const Index = () => {
//     const fname="Karthik";
//     return <>
//     <h1>Hello, {fname}</h1>
//     <h1>Hi..!</h1>
//     </>
// }


// ReactDOM.render( < Index / > , document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const EvenOdd = () => {
    const num = 21;
    if (num % 2 === 0) {
        return < >
            <
            h1 className = 'text-primary' > { num }
        is a Even Number. < /h1> <
            />
    } else {
        return < >
            <
            h1 className = 'text-primary' > { num }
        is a Odd Number. < /h1> <
            />
    }
}

ReactDOM.render( < EvenOdd / > , document.getElementById("root"));

const Sample = () => {
    const count = 4;

    return < >
        <
        h1 className = { count < 4 ? 'text-primary' : 'text-warning' } > Hello < /h1> <
        />
}
ReactDOM.render( < Sample / > , document.getElementById("root"));


const Array = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return < >
        <
        App / >
        <
        h1 > { arr.map((item) => `${item}, `) } < /h1> <
        />
}
ReactDOM.render( < Array / > , document.getElementById("root"));