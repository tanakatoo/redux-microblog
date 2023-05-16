import { combineReducers } from "redux"
import { titleReducer } from "./titleReducer"
import { postReducer } from "./postReducer"
import { commentsReducer } from "./commentsReducer"

const rootReducer = (combineReducers({ posts: postReducer, comments: commentsReducer, titles: titleReducer }))
export default rootReducer