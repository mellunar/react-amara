import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
  });
}
else {
  firebase.app();
};

export const firebaseAuth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();