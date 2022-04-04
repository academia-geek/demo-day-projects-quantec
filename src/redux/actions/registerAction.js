import {typesRegister} from '../types/types';
import {  getAuth, createUserWithEmailAndPassword, updateProfile  } from "@firebase/auth";
import Swal from 'sweetalert2';
import { async } from '@firebase/util';

//---------------------------Asincrono----------------------
export const registroEmailPasswordNombre = (data) => {    
    return(dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,data.email,data.password)
        .then(async ({user}) => {

           await updateProfile(auth.currentUser, {displayName: data.displayName}, {photoURL: data.photoURL})

           dispatch(registerSincrono(user.email,user.uid,user.displayName, user.photoURL))
           Swal.fire({
            html: '<br/><br/><h4 >¡Tu cuenta ha sido creada correctamente!<h3><br/><img class="checked" src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647621171/proyecto-final/Group_349_v0ofdt.svg" alt=""/>',
            showConfirmButton: false,
            timer: 2000,
        })
            console.log(user);
        })
        .catch(e =>{
            console.log(e);
        })
    }
}

 // ----------------------- Sincrono ---------------------
export const registerSincrono = (email,password,name, photoURL) => {

    return{
       type: typesRegister.register,
       payload: {
           email,
           password,
           name,
           photoURL
       }
    }
}
export const deleteUserSyn = () => {
    return {
        type: typesRegister.delete
    }
}
// export const updateUserSyn = () => {
//     return {
//         type: typesRegister.update,
//         payload: user
//     }
// }
