/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect} from "react";
//import { db } from "../../firebase/config"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

export const AuthContext=createContext()

export const useAuth= ()=>{
    const context= useContext(AuthContext)
    if (!context){
        throw new Error("useAuth debe ser usado dentro de un AuthProvider")
    }
    return context
}

export const AuthProvider= ({children}) =>{
    const [user, setuser]= useState(null)
    const [loading, setLoading]= useState(null)
    const auth= getAuth()
    const db=getFirestore()

    const signup= (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login= (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout= ()=>{
        signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, async (currentUser)=>{
            if (currentUser){
                const userDocRef= doc(db,"usuarios", currentUser.uid)//
                const userDocSnap= await getDoc(userDocRef)
                if (userDocSnap.exists()&& userDocSnap.data().rol==="admin"){
                    setuser({...currentUser, rol: "admin"})//
                }else{
                    setuser({...currentUser, rol: "user"})
                }
            }else{
                setuser(null)
            }
            setLoading(false)
        })
        return ()=> unsubscribe()
    }, [auth,db])

    const value= {
        user,
        loading,
        signup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}//final auth provider

/*

*/