import { addComment, deleteComment } from "./actionTypes"

const INITIAL_STATE = {}

export const commentsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case addComment:
            return state
        case deleteComment:
            return state

        default:
            return state

    }
}