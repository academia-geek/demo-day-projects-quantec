import { async } from "@firebase/util"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesTips } from "../types/types"

export const listTipsAsyn = () => {
    return async(dispatch) => {
        const tipsCollection = await getDocs(collection(db, 'tips'))
        const tip = []
        tipsCollection.forEach((doc) => {
            tip.push({
                ...doc.data()
            })
        })
        dispatch(listTipsSyn(tip))
    }
}

export const listTipsSyn = (tip) => {
    return {
        type: typesTips.list,
        payload: tip
    }
}