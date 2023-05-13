import { addPost, deletePost, editPost } from "./actionTypes"

const INITIAL_STATE = {}

export const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case addPost:
            return {
                ...state, [action.id]: {
                    title: action.title,
                    desc: action.desc,
                    body: action.body
                }
            }
        case deletePost:
            return state
        case editPost:
            return state
        default:
            return state

    }
}