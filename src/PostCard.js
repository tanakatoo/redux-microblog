import React from "react"
import { Card, CardBody, CardTitle, CardText } from "reactstrap"
import { Link } from "react-router-dom"

const PostCard = () => {
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
                        <Link to="/postid">Special Title Treatment</Link>
                    </CardTitle>
                    <CardText>
                        With supporting text below as a natural lead-in to additional content.
                    </CardText>

                </CardBody>

            </Card>
        </>
    )
}
export default PostCard