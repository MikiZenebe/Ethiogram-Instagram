import firebase from "firebase";


const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyBBDSKTtgKKE70RNc8Ss6azbPKzwSfdfqI",
        authDomain: "ethio-insta-e76fc.firebaseapp.com",
        databaseURL: "https://ethio-insta-e76fc-default-rtdb.firebaseio.com",
        projectId: "ethio-insta-e76fc",
        storageBucket: "ethio-insta-e76fc.appspot.com",
        messagingSenderId: "856368027706",
        appId: "1:856368027706:web:bf4df13bc0ca43ce9cbd03",
        measurementId: "G-DQK3F5P5LB"
    }
);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage }
