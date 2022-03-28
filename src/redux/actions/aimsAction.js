import { async } from "@firebase/util"
import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import Swal from "sweetalert2"
import { db } from "../../firebase/firebaseConfig"
import { typesAims } from "../types/types"


//-------------------Asincrono-----------------
export const addAimsAsyn = (newAims) => {
    return (dispatch) => {
        addDoc(collection(db, 'AimsQuantec'), newAims)
        .then(resp => {
            dispatch(addAimsSyn(newAims))
            dispatch(listAimsAsyn())
            Swal.fire({
                html: '<br/><br/><h4 >¡Se ha añadido un nuevo objetivo a tu portafolio!<h3><br/><img class="checked" src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647621171/proyecto-final/Group_349_v0ofdt.svg" alt=""/>',
                showConfirmButton: false,
                timer: 2000,
            })
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
            Swal.fire({
                html: '<br/><br/><h4 >¡Se ha añadido un nuevo objetivo a tu portafolio!<h3><br/><img class="checked" src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647621171/proyecto-final/Group_349_v0ofdt.svg" alt=""/>',
                showConfirmButton: true,
                timer: 2000,
            })
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
