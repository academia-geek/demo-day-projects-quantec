import { typesUser } from "../types/types";


const initialState = {
    users: []
}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesUser.add:
            return {
                users: [action.payload]
            }
        case typesUser.list:
            return {
                users: [...action.payload]
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