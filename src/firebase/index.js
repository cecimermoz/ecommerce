import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCSGW0GuxP7vVxWwNK5OLsmf6n2JQ92F5o",
    authDomain: "eccomerce-coder.firebaseapp.com",
    projectId: "eccomerce-coder",
    storageBucket: "eccomerce-coder.appspot.com",
    messagingSenderId: "774470878410",
    appId: "1:774470878410:web:01bb2ea78b4ca53c44e033"
})

export function getFirebase() {
    return app
}

export function getFirestore() {
    return firebase.firestore(app);
}