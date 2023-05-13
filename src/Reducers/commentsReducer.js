import { addComment, deleteComment } from "./actionTypes"

const INITIAL_STATE = {}

export const commentsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case addComment:
            if (action.id in state) {
                //find the object and add it to the array
                return { ...state, [action.id]: [...state[action.id], action.comment] }
            } else {
                //put it in a new object
                return { ...state, [action.id]: [action.comment] }
            }
        case deleteComment:
            return state

        default:
            return state

    }
}