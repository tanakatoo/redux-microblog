import React from "react"
import { useParams } from "react-router-dom"
import "./PostDetail.css"
import { Button } from "reactstrap"
import CommentForm from "./CommentForm"
import Comment from "./Comment"
import { useDispatch, useSelector } from "react-redux"

const PostDetail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const selectOnePost = useSelector(state => state.posts[id])
    const selectComments = useSelector(state => state.comments)
    console.log(selectComments)

    return (
        <div className="PostDetail">
            {selectOnePost ? (<>
                <div className="PostDetail-title">
                    <h1>{selectOnePost.title}</h1>
                    <div>
                        <Button className="NewPost-title-right">Edit</Button>
                        <Button className="NewPost-title-right">Delete</Button>
                    </div>
                </div>
                <p><i>{selectOnePost.desc}</i></p>
                <p>{selectOnePost.body}
                </p>
                <hr></hr>
                <h2>Comments</h2>
                <div className="PostDetail-comments">
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
                <div className="PostDetail-form">
                    <CommentForm postid={id} />
                </div></>)
                : <p>No post found</p>}
        </div>
    )
}
export default PostDetail