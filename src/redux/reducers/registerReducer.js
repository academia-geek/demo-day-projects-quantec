import { types } from "../types/types";

export const registerReducer = (state = {}, action) => {
    switch (action.type) {
        case types.register:

            return{
            email: action.payload.email,
            password: action.payload.password,
            name: action.payload.displayname,
            photoURL: action.payload.photoURL
        }

        default:
          return state;
    }
}