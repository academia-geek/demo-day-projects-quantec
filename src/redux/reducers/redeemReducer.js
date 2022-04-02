import { typesRedeem } from "../types/types";

const initialState = {
    redeem: []
}
export const redeemReducer = (state=initialState, action) => {
    switch (action.type) {
        case typesRedeem.list:
            return {
                redeem: [...action.payload]
            }             
        default:
            return state;
    }
}