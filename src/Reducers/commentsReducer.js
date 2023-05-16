import { addComment, deleteComment, deleteAllComments, setComments } from "./actionTypes"

const INITIAL_STATE = {}

export const commentsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case setComments:
            //make object from incoming array
            return { ...state, [action.postid]: action.comments }
        case addComment:
            if (action.postid in state) {
                //find the object and add it to the array

                return { ...state, [action.postid]: [...state[action.postid], { id: action.comment.id, text: action.comment.text }] }

            } else {
                //this has no comments yet
                return {
                    ...state, [action.postid]: [{ id: action.comment.id, text: action.comment.text }]
                }
            }

        case deleteComment:

            if (action.postid in state && state[action.postid].find(ele => ele.id === action.commentid)) {
                return { ...state, [action.postid]: state[action.postid].filter(ele => ele.id !== action.commentid) }
            }
        case deleteAllComments:
            if (action.postid in state) {
                const { [action.postid]: x, ...newList } = state
                return newList
            }

        default:
            return state

    }
}