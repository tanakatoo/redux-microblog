import React from "react"
import "./Home.css"
import PostCard from "./PostCard"
import { useSelector } from "react-redux"

const Home = () => {
    const posts = useSelector(state => state.posts)

    return (
        <div className="Home">
            <p>
                Welcome to Microblog. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Ut tenetur nostrum maxime minus ad, dolore sit error dolorem non consequuntur in
                unde repellat. Sequi eligendi eius explicabo maiores suscipit repudiandae.
            </p>
            <div className="Home-cards">
                {Object.keys(posts).length > 0 ? Object.keys(posts).map((p, idx) => <PostCard id={p} post={posts[p]} key={p} />) : ''}
            </div>
        </div>

    )
}
export default Home