import React, { useState } from "react"
import { Form, Label, FormGroup, Input, Button } from "reactstrap"
import "./Post.css"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addNewPost, actionEditPost } from "./Reducers/actionCreator"

const PostForm = ({ editMode = () => { }, postid = 0, link, editData = {} }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { title, description, body } = editData
    const INITIAL_VALUE = Object.keys(editData).length > 0 ? { title: title, body: body, description: description } : { title: '', description: '', body: '' }
    const [data, setData] = useState(INITIAL_VALUE)
    const handleChange = (e) => {
        const { name, value } = e.target
        setData(data => ({ ...data, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (Object.keys(editData).length > 0) {
            //edit the data 

            dispatch(actionEditPost(postid, data))
            editMode()
        } else {

            //add new post
            dispatch(
                addNewPost({
                    title: data.title,
                    description: data.description,
                    body: data.body
                })
            )
            navigate(link)
        }
    }


    return (


        <Form className="Post-form" onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="title">Title</Label>
                <Input name="title" value={data.title} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="description">Description</Label>
                <Input name="description" value={data.description} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="body">Body</Label>
                <Input type="textarea" name="body" value={data.body} onChange={handleChange} rows="10" />
            </FormGroup>
            <FormGroup>
                <Link to="/"><Button>Cancel</Button></Link>
                <Button >Save</Button>
            </FormGroup>
        </Form>
    )
}
export default PostForm