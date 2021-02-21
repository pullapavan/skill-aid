// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBC5l9rFjA5wZXv_3wXz3Qdmio4y5qzqvU",
    authDomain: "skill-aid.firebaseapp.com",
    databaseURL: "https://skill-aid-default-rtdb.firebaseio.com",
    projectId: "skill-aid",
    storageBucket: "skill-aid.appspot.com",
    messagingSenderId: "187230121267",
    appId: "1:187230121267:web:611befdcd624997364a246",
    measurementId: "G-2D83PT27FH"
})

export const auth = app.auth()
export default app