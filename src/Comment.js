import React from "react"
import { Button } from "reactstrap"
import "./Comment.css"
import { useDispatch } from "react-redux"
import { deleteComment } from "./Reducers/actionTypes"
import { actionRemoveComment } from "./Reducers/actionCreator"

const Comment = ({ postid, c }) => {
    const dispatch = useDispatch()

    const handleClick = (e) => {

        dispatch(actionRemoveComment(postid, c.id))
    }
    return (
        <div className="Comment">

            <Button onClick={handleClick}>X</Button>
            <span>{c.text}</span>
        </div>
    )
}

export default Comment