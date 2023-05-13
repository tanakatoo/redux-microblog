import React from "react"
import { Card, CardBody, CardTitle, CardText } from "reactstrap"
import { Link } from "react-router-dom"

const PostCard = ({ id, post }) => {
    return (
        <>
            <Card
                className="my-2"
                style={{
                    width: '30rem'
                }}
            >
                <CardBody>
                    <CardTitle tag="h5">
                        <Link to={`/${id}`}>{post.title}</Link>
                    </CardTitle>
                    <CardText>
                        {post.desc}
                    </CardText>

                </CardBody>

            </Card>
        </>
    )
}
export default PostCard