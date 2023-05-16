import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./PostDetail.css"
import { Button } from "reactstrap"
import CommentForm from "./CommentForm"
import Comment from "./Comment"
import { useDispatch, useSelector } from "react-redux"
import { actionVote, getOnePost, getComments, actionDeletePost } from "./Reducers/actionCreator"
import { useNavigate } from "react-router-dom"
import PostForm from "./PostForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons"

const PostDetail = (props) => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [edit, setEdit] = useState(false)

    const selectOnePost = useSelector(state => state.posts[id])

    const selectPostComments = useSelector(state => state.comments[id])

    const handleDelete = () => {
        dispatch(actionDeletePost(id))
        navigate(props.link)
    }

    const editMode = () => {
        setEdit(false)
    }

    const handleVoteUp = () => {

        dispatch(actionVote("detail", selectOnePost.id, "up"))
    }
    const handleVoteDown = () => {

        dispatch(actionVote("detail", selectOnePost.id, "down"))
    }

    useEffect(() => {
        //get the detailed post
        if (!selectOnePost) {
            dispatch(getOnePost(id))
            dispatch(getComments(id))
        }
    }, [])

    return (edit ?
        <div className="Post">
            <h1>Edit Post</h1>
            <PostForm editMode={editMode} postid={id} link={props.link} editData={selectOnePost} />
        </div>
        :
        <div className="PostDetail">
            {selectOnePost ? (<>
                <div className="PostDetail-title">
                    <h1>{selectOnePost.title}</h1>
                    <div>
                        <Button onClick={() => setEdit(true)}>Edit</Button>
                        <Button onClick={handleDelete}>Delete</Button>
                    </div>
                </div>
                <div className="PostDetail-title">
                    <p><i>{selectOnePost.description}</i></p>
                    <div>
                        {selectOnePost.votes} votes
                        <button className="PostCard-vote" onClick={handleVoteUp}>
                            <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
                        </button>
                        <button className="PostCard-vote" onClick={handleVoteDown}>
                            <FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>
                <p>{selectOnePost.body}
                </p>
                <hr></hr>
                <h2>Comments</h2>
                <div className="PostDetail-comments">
                    {selectPostComments ?
                        selectPostComments.map(c => <Comment postid={id} c={c} key={c.id} />)
                        : ''}

                </div>
                <div className="PostDetail-form">

                    <CommentForm postid={id} />
                </div></>)
                : <p>No post found</p>}
        </div>


    )
}
export default PostDetail