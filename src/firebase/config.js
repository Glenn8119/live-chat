import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCqiyM_9g49il4SBXKdJRDW0iDyLLXCplc',
  authDomain: 'udemy-vue-firebase-sites-3e7ee.firebaseapp.com',
  projectId: 'udemy-vue-firebase-sites-3e7ee',
  storageBucket: 'udemy-vue-firebase-sites-3e7ee.appspot.com',
  messagingSenderId: '819262900636',
  appId: '1:819262900636:web:4fee96d7f489d890526059',
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirebase = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirebase, timestamp };
