import { typesTips } from "../types/types";

const initialState = {
    tips: []
}
export const tipsReducer = (state=initialState, action) => {
    switch (action.type) {
        case typesTips.list:
            return {
                tips: [...action.payload]
            }
        default:
            return state;
    }
}