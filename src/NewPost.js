import "./Post.css"
import PostForm from "./PostForm"

const NewPost = (props) => {

    return (
        <div className="Post">
            <h1>New Post</h1>
            <PostForm link={props.link} />
        </div>
    )
}
export default NewPost