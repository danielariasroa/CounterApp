import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp.js';
import PrimeraApp from './PrimeraApp.js'

import './index.css';


const divRoot = document.querySelector('#app');

ReactDOM.render( <PrimeraApp saludo ='Hola, soy daniel' />, divRoot);
//ReactDOM.render( <CounterApp value ={0} />, divRoot);