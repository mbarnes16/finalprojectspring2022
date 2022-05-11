import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyCjOmVn9IVguGBtelfF2ey5Wq4YLPlzRPc",
    authDomain: "finalproject-books.firebaseapp.com",
    projectId: "finalproject-books",
    storageBucket: "finalproject-books.appspot.com",
    messagingSenderId: "824835629532",
    appId: "1:824835629532:web:304682ba09e9b479f9af19",
    measurementId: "G-QJR6YMDSCP"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage().ref();

export {firebase, db, auth, storage};
