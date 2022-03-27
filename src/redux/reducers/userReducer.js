import { typesUser } from "../types/types";


const initialState = {
    user: []
}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesUser.add:
            return {
                user: [action.payload]
            }
        case typesUser.list:
            return {
                user: [...action.payload]
            }
            case typesUser.edit:
                return {
                    ...state
                }
            case typesUser.delete:
                return {
                    ...state
                }
    
        default:
            return state;
    }
}