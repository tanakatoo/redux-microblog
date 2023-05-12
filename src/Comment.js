import React from "react"
import { Button } from "reactstrap"
import "./Comment.css"

const Comment = () => {
    return (
        <div className="Comment">
            <Button>X</Button>
            <span>This is a comment. This blog is great. It's got no content whstasovever.</span>
        </div>
    )
}

export default Comment