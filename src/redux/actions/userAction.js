import { async } from "@firebase/util"
import { getAuth } from "firebase/auth"
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore"
import { toast } from "react-toastify"
import { db } from "../../firebase/firebaseConfig"
import { typesUser } from "../types/types"

export const addUserAsyn = (newUser) => {
    console.log(newUser);
    return async(dispatch) => {
        const auth = getAuth()
        const user = auth.currentUser;
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef)
        if(docSnap.exists()){
            console.log(docSnap.data());
        }else {
            await setDoc(doc(db,'users', user.uid), {
                ...newUser
            })
        }    
    }
}
export const loadUserDate = () => {
    return async(dispatch)=> {
        const auth = getAuth()
        const user = auth.currentUser;
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef)
        if(docSnap.exists()) {
            dispatch(loadUserSyn({...docSnap.data(), uid: user.uid}))
        }
    }
}
export const listUserAsyn = () => {
    return async(dispatch) => {
        const getUsers = await getDocs(collection(db, 'users'))
        const user = [];
        getUsers.forEach((doc) => {
            user.push({
                
                ...doc.data()
            })
        })
        dispatch(listUserSyn(user))
    }
}
export const editUserAsyn = (email, puntos) => {
    return async(dispatch) => {
               
        const docRef = doc(db, 'users', puntos.uid)
        const docSnap = await getDoc(docRef)
       if(docSnap.exists()) {
           const docRefUpdate = doc(db, 'users', docSnap.id)
           await updateDoc(docRefUpdate, puntos)
           .then(() => {
               dispatch(loadUserSyn(puntos))
           }).catch(error => {
               console.log(error);
           })
       }
       

    }
}
export const deleteUserAsyn = (email) => {
    console.log(email);
    return async(dispatch) => {
        deleteDoc(doc(db, 'users', email));
        dispatch(deleteUserSyn(email))
    }
}

//----------Sincronico---------------
export const addUserSyn = (user) => {
    return {
        type: typesUser.add,
        payload: user
    }
}
export const listUserSyn = (user) => {
    return {
        type: typesUser.list,
        payload: user
    }
}
export const editUserSyn = (user) => {
    return {
        type: typesUser.edit,
        payload: user
    }
}
export const loadUserSyn = (user) => {
    return {
        type: typesUser.load,
        payload: user
    }
}
export const deleteUserSyn = (email) => {
    return {
        type: typesUser.delete,
        payload: email
    }
}
