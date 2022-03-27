import { async } from "@firebase/util"
import { addDoc, collection, doc, getDocs } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesUser } from "../types/types"

export const addUserAsyn = (newUser) => {
    return (dispatch) => {
        addDoc(collection(db, 'users'), newUser)
        .then(resp => {
            dispatch(addUserSyn(newUser))
            dispatch(listUserAsyn())
        }).catch(error => {
            console.log(error);
        })
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