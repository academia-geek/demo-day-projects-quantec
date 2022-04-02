import { collection, doc, getDocs } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesRedeem } from "../types/types"

export const listRedeemAsyn = () => {
    return async(dispatch) => {
        const getData = await getDocs(collection(db, 'Recompensas'))
        const redeem = []
        getData.forEach((doc) => {
            redeem.push({
                ...doc.data()
            })
        })
        dispatch(listRedeemSyn(redeem))
    }
}
export const listRedeemSyn = (puntos) => {
    return {
        type: typesRedeem.list,
        payload: puntos
    }
}