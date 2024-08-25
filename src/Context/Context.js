import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../Firebase/Firebase';



export const Authcontex=createContext();

const auth=getAuth(app);



const Context = ({children}) => {
const [user,setuser]=useState(null)
const [loading,setloading]=useState(true)
    const createuser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singinuser=(email,password)=>{
        setloading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = () => {
       
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentuser=>{
            setuser(currentuser);
            setloading(false)
        })

        return ()=>{
            unsubscribe();
        }
    },[])

    const Authinfo={user,loading,createuser,singinuser,logout};
    return (
        <div>
            <Authcontex.Provider value={Authinfo}>
                {children}
            </Authcontex.Provider>
        </div>
    );
};

export default Context;