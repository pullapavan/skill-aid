import React, { useContext, useState, useEffect } from 'react'
import { auth } from "../firebase/config";
import firebase from "firebase/app"
import 'firebase/firestore';
import Skeleton from '@material-ui/lab/Skeleton';
import { useCustomStyles } from "../utils/styles";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const classes = useCustomStyles();


    const [currentUser, setcurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    const facebookProvider = new firebase.auth.FacebookAuthProvider()

    const db = firebase.firestore()

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function googleSignup() {
        return auth.signInWithPopup(googleProvider)
    }

    function facebookSignup() {
        return auth.signInWithPopup(facebookProvider)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function logout(email) {
        return auth.signOut()
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setcurrentUser(user)
            setLoading(false)
        });

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        googleSignup,
        facebookSignup,
        db
    }

    return (
        <AuthContext.Provider value={value}>
            {loading ? <Skeleton animation="wave" variant="rect" className={classes.skeleton_media}/> : children}
        </AuthContext.Provider>
    )
}
