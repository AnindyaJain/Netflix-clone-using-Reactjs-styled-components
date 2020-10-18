import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCC92TcmU4SXqndMir8wJXJ9dj-MYEj60Y",
    authDomain: "netflix-173c3.firebaseapp.com",
    databaseURL: "https://netflix-173c3.firebaseio.com",
    projectId: "netflix-173c3",
    storageBucket: "netflix-173c3.appspot.com",
    messagingSenderId: "343298223381",
    appId: "1:343298223381:web:6ab2f7714cd4807325cd1c",
};

const firebase = Firebase.initializeApp(config);

export {firebase};
