import React from 'react';
import {render} from 'react-dom';
import App from './app.js';
import "normalize.css";
import {GlobalStyles} from './global-styles';
import {firebase} from './components/lib/firebase.prod';
import {FirebaseContext} from './context/firebase'



render(
    <>
        <FirebaseContext.Provider value={{firebase}}>
        <GlobalStyles />
        <App />
        </FirebaseContext.Provider>
    </>,
document.getElementById("root")
);

