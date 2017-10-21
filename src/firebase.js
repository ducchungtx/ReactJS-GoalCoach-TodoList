import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDdX1hGZDv8xQGZPj8-wV9TxvuxL59qhYQ",
    authDomain: "goalcoach-95dde.firebaseapp.com",
    databaseURL: "https://goalcoach-95dde.firebaseio.com",
    projectId: "goalcoach-95dde",
    storageBucket: "goalcoach-95dde.appspot.com",
    messagingSenderId: "770147825442"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');