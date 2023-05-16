import { addPost, deletePost, editPost, editVotes } from "./actionTypes"

const INITIAL_STATE = {}

export const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case addPost:
            //adds the post to the state for faster retrieval next time
            return { ...state, [action.post.id]: action.post }
        case deletePost:
            if (action.postid in state) {
                const { [action.postid]: x, ...newList } = state
                return newList
            }

        case editPost:
            if (action.postid in state) {
                return { ...state, [action.postid]: { title: action.post.title, body: action.post.body, description: action.post.description } }
            }
            return state
        case editVotes:

            if (action.postid in state) {

                return { ...state, [action.postid]: { ...state[action.postid], votes: action.votes } }
            }
            return state
        default:
            return state

    }
}