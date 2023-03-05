import { CLEAR_STATE, SET_USER } from "../actions/types";
import { Action, UserState } from "./types";

const initialState = {
    username: ''
};

export default (state: UserState = initialState, action: Action) => {
    switch(action.type) {
        case SET_USER: {
            return {
                ...state,
                username: action.payload
            }
        };

        case CLEAR_STATE:
            return initialState;

        default:
            return state;
    }
}