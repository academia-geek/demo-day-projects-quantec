import { async } from "@firebase/util"
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore"
import { typesAims } from "../types/types"


//-------------------Asincrono-----------------
export const addAimsAsyn = (newAims) => {
    return (dispatch) => {
        addDoc(collection(db, 'AimsQuantec'), newAims)
        .then(resp => {
            dispatch(addAimsSyn(newAims))
            dispatch(listAimsAsyn())
        }).catch(error => {
            console.log(error);
        })
    }
}
export const listAimsAsyn = () => {
    return async(dispatch) => {
        const aimsCollection = await getDocs(collection(db, 'AimsQuantec'))
        const aims = []
        aimsCollection.forEach((doc) => {
            aims.push({
                ...doc.data()
            })
        })
        dispatch(listAimsSyn(aims))
    }
}
export const deleteAimsAsyn = (aim) => {
    return async(dispatch) => {
        const getAims = collection(db, 'AimsQuantec');
        const q = query(getAims, where('aim', '==', aim))
        const datos = await getDocs(q);
        datos.forEach((docu) => {
            deleteDoc(doc(db, 'AimsQuantec', docu.id));
        })
        dispatch(deleteAimsSyn(aim))
    }
}
//-------------------Sincorono------------------
export const addAimsSyn = (aims) => {
    return {
        type: typesAims.add,
        payload: aims
    }
}
export const editAimsSyn = (aims) => {
    return {
        type: typesAims.edit,
        payload: aims
    }
}
export const listAimsSyn = (aims) => {
    return {
        type: typesAims.list,
        payload: aims
    }
}
export const deleteAimsSyn = (aim) => {
    return {
        type: typesAims.delete,
        payload: aim
    }
}
