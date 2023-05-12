import React, { useState } from "react"
import { Form, Label, FormGroup, Input, Button } from "reactstrap"

import { Link } from "react-router-dom"

const CommentForm = () => {
    const [data, setData] = useState({ title: '', desc: '', body: '' })
    const handleChange = (e) => {
        const { name, value } = e.target
        setData(data => ({ ...data, [name]: value }))
    }
    return (
        <div className="CommentForm">

            <Form >
                <FormGroup>
                    <Input name="title" value={data.title} onChange={handleChange} placeholder="New comment" />
                </FormGroup>

                <FormGroup>
                    <Button>Add</Button>
                </FormGroup>
            </Form>
        </div>
    )
}
export default CommentForm