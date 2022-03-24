import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { facebook, google } from "../../firebase/firebaseConfig";
import { types } from "../types/types"
//--------Login Facebook-----------
export const loginFacebook = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, facebook)
        .then(({user}) => {
            dispatch(loginSyn(user.uid, user.displayName))
            console.log(`Bienvenido ${user.displayName}`);
        }).catch(error => {
            console.log((error));
        })
    }
}
//----------Login Google------------
export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, google)
        .then(({user}) => {
            dispatch(loginSyn(user.uid, user.displayName))
            console.log(`Bienvenido ${user.displayName}`);
        }).catch(error => {
            console.log(error);
        })
    }
}
//------------Login Asincrono------------
export const loginAsyn = (email, password) => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(
                loginSyn(user.uid, user.displayName)
            )
            console.log(`Bienvenido ${user.displayName}`);
        }).catch(error => {
            console.log('El usuario no existe');
            
        })
    }
}
//--------------Login Sincrono-------------
export const loginSyn = (id, displayname) => {
    return{
        id: types.login,
        payload: {
            id,
            displayname
        }
    }
}
//---------------Logout Asincrono-------------
export const logoutAsyn = () => {
    return (dispatch) => {
        const auth = getAuth();
        signOut(auth)
        .then(user => {
            dispatch(logoutSyn())
        }).catch(error => {
            console.log(error);
        })
    }
}
//----------------Logout Sincrono--------------
export const logoutSyn = () => {
    return {
        id: types.logout
    }
}