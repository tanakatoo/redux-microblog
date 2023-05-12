import { combineReducers } from "redux"
import { postReducer } from "./postReducer"
import { commentsReducer } from "./commentsReducer"

const rootReducer = (combineReducers({ posts: postReducer, comments: commentsReducer }))
export default rootReducer