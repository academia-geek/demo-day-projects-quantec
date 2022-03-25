import { addDoc, collection } from "firebase/firestore"
import { typesAims } from "../types/types"


//-------------------Asincrono-----------------
export const addAimsAsyn = () => {
    return (dispatch) => {
        addDoc(collection(db, 'AimsQuantec'))
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
