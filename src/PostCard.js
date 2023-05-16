import React from "react"
import { Card, CardBody, CardTitle, CardText, CardFooter } from "reactstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons"
import "./PostCard.css"

import { useDispatch } from "react-redux"


const PostCard = ({ handleVoteDown, handleVoteUp, title }) => {

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
                        <Link to={`/${title.id}`}>{title.title}</Link>
                    </CardTitle>
                    <CardText>
                        {title.description}
                    </CardText>

                </CardBody>
                <CardFooter>
                    {title.votes} votes
                    <button className="PostCard-vote" onClick={() => handleVoteUp(title.id)}>
                        <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
                    </button>
                    <button className="PostCard-vote" onClick={() => handleVoteDown(title.id)}>
                        <FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon>
                    </button>
                </CardFooter>
            </Card>
        </>
    )
}
export default PostCard