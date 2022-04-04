import { async } from "@firebase/util"
import { getAuth } from "firebase/auth"
import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore"
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
        console.log(email, puntos);
        const getCollection = collection (db, 'users')
        const q = query(getCollection, where('email', '==', email))
        const datosQ = await getDocs(q)
        let id
        datosQ.forEach(async(docu) => {
            id = docu.id
        })
        const docRef = doc(db, 'users', id)
        await updateDoc(docRef, puntos)
        .then(() => {
            listUserAsyn()
            toast.success('Has ganamdo 10 puntos de xp!', {
                position: "top-right",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            
        }).catch(error => {
            console.log(error);
        })     
       

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
