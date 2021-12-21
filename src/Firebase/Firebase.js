import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.REACT_APP_apiKey,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    appId: process.env.REACT_APP_appId,
  });
}
else {
  firebase.app();
};

export const db = firebase.firestore();