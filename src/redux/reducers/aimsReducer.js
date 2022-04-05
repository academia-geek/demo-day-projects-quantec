import { typesAims } from "../types/types";

const initialStates = {
    aims: []
}
export const aimsReducer = (state = initialStates, action) => {
    switch (action.type) {
        case typesAims.add:
            return {
                aims: [action.payload,
                        ...state.aims]
            }
        case typesAims.edit:
            return {
                aims: [action.payload]
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
                ...state
            }
        
    
        default:
            return state;
    }
}