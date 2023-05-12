import React from "react"
import "./NavBar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <h1>Microblog</h1>
            <h3>Let's blog!</h3>
            <p><Link to="/">Blog</Link>
                <Link to="/new">Add a new blog post</Link>
            </p>
        </nav>
    )
}
export default NavBar