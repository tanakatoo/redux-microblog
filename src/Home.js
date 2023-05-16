import React, { useEffect } from "react"
import "./Home.css"
import PostCard from "./PostCard"
import { useDispatch, useSelector } from "react-redux"
import { getAllTitles } from "./Reducers/actionCreator"
import { actionVote } from "./Reducers/actionCreator"

const Home = () => {
    const dispatch = useDispatch()
    const titles = useSelector(state => state.titles)
    const handleVoteUp = (id) => {
        dispatch(actionVote("title", id, "up"))
    }
    const handleVoteDown = (id) => {
        dispatch(actionVote("title", id, "down"))
    }

    useEffect(() => {
        dispatch(getAllTitles())
    }, [])

    return (
        <div className="Home">
            <p>
                Welcome to Microblog. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Ut tenetur nostrum maxime minus ad, dolore sit error dolorem non consequuntur in
                unde repellat. Sequi eligendi eius explicabo maiores suscipit repudiandae.
            </p>
            <div className="Home-cards">
                {Object.keys(titles).length > 0 ? Object.keys(titles).map((p, idx) => <PostCard handleVoteDown={handleVoteDown} handleVoteUp={handleVoteUp} title={titles[p]} key={p} />) : ''}
            </div>
        </div>
    )
}
export default Home