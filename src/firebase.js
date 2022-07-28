// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/compat/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBgPo_lz0UXQe5mrbEPBUqJATqoUSLxrTc',
  authDomain: 'nwitter-385ff.firebaseapp.com',
  projectId: 'nwitter-385ff',
  storageBucket: 'nwitter-385ff.appspot.com',
  messagingSenderId: '330206253207',
  appId: '1:330206253207:web:cb4a45ee9e9d47310a19d2',
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
