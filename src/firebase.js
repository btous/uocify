import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBDWhOfhI83mXZIstrXOz5IrjZMYo9Tb5w",
    authDomain: "uocify-app.firebaseapp.com",
    databaseURL: "https://uocify-app.firebaseio.com",
    projectId: "uocify-app",
    storageBucket: "uocify-app.appspot.com",
    messagingSenderId: "988096537037",
    appId: "1:988096537037:web:27b044c0183aeae9b92484"
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.database();