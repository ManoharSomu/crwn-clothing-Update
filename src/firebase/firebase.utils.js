import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBd7V2JhfttHTY6sUNwbK82GBlJRY6eXe4",
    authDomain: "crown-db-15443.firebaseapp.com",
    databaseURL: "https://crown-db-15443.firebaseio.com",
    projectId: "crown-db-15443",
    storageBucket: "crown-db-15443.appspot.com",
    messagingSenderId: "541879831791",
    appId: "1:541879831791:web:b2190e2433cce775729f1a",
    measurementId: "G-6753084BDT"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt :'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
