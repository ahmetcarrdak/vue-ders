import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCF2b6zqCZ_ihLOGne-urxYxx8wNg33Yec",
    authDomain: "vue-ders-66ca1.firebaseapp.com",
    projectId: "vue-ders-66ca1",
    storageBucket: "vue-ders-66ca1.appspot.com",
    messagingSenderId: "26517481221",
    appId: "1:26517481221:web:718e8745372934aa25396c"
};


const fb = initializeApp(firebaseConfig);
export { fb }