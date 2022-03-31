import { async } from "@firebase/util"
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc, where } from "firebase/firestore"
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
export const listAimsAsyn = (user) => {
    return async(dispatch) => {
        console.log(user);         
        const q = query(collection(db, "AimsQuantec"), where("user", "==", user));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const objetives = [];
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
        objetives.push({
            idDocument: doc.id,
            ...doc.data()
        })
            
    });
    console.log("Current Objetives in USER: ", objetives);
    dispatch(listAimsSyn(objetives))
})
}      
}
export const deleteAimsAsyn = (cod) => {
    return async(dispatch) => {
        
            deleteDoc(doc(db, 'AimsQuantec', cod));
            Swal.fire({
                html: '<br/><br/><h4 >¡Se ha eliminado el objetivo de tu portafolio!<h3><br/><img class="checked" src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647621171/proyecto-final/Group_349_v0ofdt.svg" alt=""/>',
                showConfirmButton: true,
                timer: 2000,
            })
        
        dispatch(deleteAimsSyn(cod))
    }
}
export const editAimsAsyn = (id, aims) => {
    return async(dispatch) => {
        console.log(id, aims);
        const docRef = doc(db, 'AimsQuantec', id)
        await updateDoc(docRef, aims)
        .then(() => {
            listAimsAsyn()
            Swal.fire({
                html: '<br/><br/><h4 >¡Se ha actualizado objetivo exitosamente!<h3><br/><img class="checked" src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647621171/proyecto-final/Group_349_v0ofdt.svg" alt=""/>',
                showConfirmButton: false,
                timer: 2000,
            })
        })
       

    }
}

//-------------------Sincorono------------------
export const addAimsSyn = (aims) => {
    return {
        type: typesAims.add,
        payload: aims
    }
}
export const editAimsSyn = (id, aims) => {
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

export const cleanAimsSyn = () => {
    return {
        type: typesAims.clean
    }
}