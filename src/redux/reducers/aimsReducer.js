import { typesAims } from "../types/types";

const initialStates = {
    aims: []
}
export const aimsReducer = (state = initialStates, action) => {
    switch (action.type) {
        case typesAims.add:
            return {
                aims: [action.payload]
            }
        case typesAims.edit:
            return {
                ...state
            }
        case typesAims.list:
            return {
                aims: [...action.payload]
            }
        case typesAims.delete:
            return {
                aims: state.aims.filter(a => a.idDocument !== action.payload)
            }
        case typesAims.filter:
            return {
                aims: state.aims.filter(a => a.user === action.payload)
            }
        
    
        default:
            return state;
    }
}