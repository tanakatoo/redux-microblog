import React from "react"
import "./Home.css"
import PostCard from "./PostCard"

const Home = () => {
    return (
        <div className="Home">
            <p>
                Welcome to Microblog. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Ut tenetur nostrum maxime minus ad, dolore sit error dolorem non consequuntur in
                unde repellat. Sequi eligendi eius explicabo maiores suscipit repudiandae.
            </p>
            <div className="Home-cards">
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />

            </div>
        </div>

    )
}
export default Home