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
};

export const createUserProfileDocument = async(userAuth, additionalData) =>
{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

   if(!snapShot.exists){
       const {displayName, email}= userAuth;
       const createdAt = new Date();

       try{
           await userRef.set ({
               displayName,
               email,
               createdAt,
               ...additionalData
           })
       } catch (error){
           console.log('error creating user', error.message);
       }
   }
   return userRef;
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt :'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
