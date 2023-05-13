import React, { useState } from "react"
import { Form, Label, FormGroup, Input, Button } from "reactstrap"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addComment } from "./Reducers/actionTypes"

const CommentForm = ({ postid }) => {
    const dispatch = useDispatch()
    const [data, setData] = useState({ comment: '' })
    const handleChange = (e) => {
        const { name, value } = e.target
        setData(data => ({ ...data, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: addComment,
            id: postid,
            comment: data.comment
        })
    }
    return (
        <div className="CommentForm">

            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Input name="comment" value={data.comment} onChange={handleChange} placeholder="New comment" />
                </FormGroup>

                <FormGroup>
                    <Button>Add</Button>
                </FormGroup>
            </Form>
        </div>
    )
}
export default CommentForm