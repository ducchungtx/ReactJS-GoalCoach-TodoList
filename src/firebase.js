import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDdX1hGZDv8xQGZPj8-wV9TxvuxL59qhYQxxx",
    authDomain: "goalcoach-xxx.firebaseapp.com",
    databaseURL: "https://goalcoach-xxx.firebaseio.com",
    projectId: "goalcoach-xxx",
    storageBucket: "goalcoach-xxx.appspot.com",
    messagingSenderId: "770147825442"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
