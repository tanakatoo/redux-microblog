import React from "react"
import { useParams } from "react-router-dom"
import "./PostDetail.css"
import { Button } from "reactstrap"
import CommentForm from "./CommentForm"
import Comment from "./Comment"

const PostDetail = () => {
    const { id } = useParams()
    console.log(id)
    return (
        <div className="PostDetail">
            <div className="PostDetail-title">
                <h1>Why is the sky blue?</h1>
                <div>
                    <Button className="NewPost-title-right">Edit</Button>
                    <Button className="NewPost-title-right">Delete</Button>
                </div>
            </div>
            <p><i>Some descrption here</i></p>
            <p>the body here. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores ad asperiores architecto eius debitis dicta excepturi perferendis, eos nesciunt
                dolorum voluptates assumenda mollitia saepe, deserunt est suscipit. Sit, optio provident!
            </p>
            <hr></hr>
            <h2>Comments</h2>
            <div className="PostDetail-comments">
                <Comment />
                <Comment />
                <Comment />
            </div>
            <div className="PostDetail-form">
                <CommentForm />
            </div>
        </div>
    )
}
export default PostDetail