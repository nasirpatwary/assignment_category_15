import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)


    const createUser = (email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) =>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }
    const signInGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const signInGitHub = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    const updateUserProfile = (name, profile) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: profile
          })
    }
    useEffect(() =>{
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
       })
        return (() =>{
            unSubscribe()
        })
    },[])
    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInGoogle,
        signInGitHub,
        updateUserProfile,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;