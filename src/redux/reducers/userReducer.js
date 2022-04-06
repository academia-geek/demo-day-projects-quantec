import { typesUser } from "../types/types";


const initialState = {
    users: {}
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
                    users: state.users.filter(u => u.email !== action.payload)
                }
            case typesUser.load:
                return{
                    users: {...action.payload}
                }
            case typesUser.clear:
                return {
                    ...state
                }
    
        default:
            return state;
    }
}