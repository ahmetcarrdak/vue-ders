import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCF2b6zqCZ_ihLOGne-urxYxx8wNg33Yec",
    authDomain: "vue-ders-66ca1.firebaseapp.com",
    projectId: "vue-ders-66ca1",
    storageBucket: "vue-ders-66ca1.appspot.com",
    messagingSenderId: "26517481221",
    appId: "1:26517481221:web:158b7afccd2562d725396c"
};


firebase.initializeApp(firebaseConfig);
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export {projectAuth, projectFirestore, timestamp};