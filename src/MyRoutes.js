import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import PostDetail from "./PostDetail"
import NewPost from "./NewPost"

const MyRoutes = (props) => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<PostDetail />} />
            <Route path="/new" element={<NewPost link={props.linkToHome} />} />
            <Route path="*" element={<Home />} />
        </Routes>
    )
}
export default MyRoutes