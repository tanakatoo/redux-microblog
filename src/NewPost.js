import React, { useState } from "react"
import { Form, Label, FormGroup, Input, Button } from "reactstrap"
import "./NewPost.css"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addPost } from "./Reducers/actionTypes"
import { v4 as uuid } from "uuid"
import { useNavigate } from "react-router-dom"

const NewPost = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data, setData] = useState({ title: '', desc: '', body: '' })
    const handleChange = (e) => {
        const { name, value } = e.target
        setData(data => ({ ...data, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: addPost,
            id: uuid(),
            title: data.title,
            desc: data.desc,
            body: data.body
        })
        navigate(props.link)
    }
    return (
        <div className="NewPost">
            <h1>New Post</h1>
            <Form className="NewPost-form" onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="title">Title</Label>
                    <Input name="title" value={data.title} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="desc">Description</Label>
                    <Input name="desc" value={data.desc} onChange={handleChange} />
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
        </div>
    )
}
export default NewPost