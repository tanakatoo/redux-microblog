import { titleEditVotes, editVotes, deleteAllComments, deletePost, editPost, setTitles, setComments, deleteComment, addPost, addComment } from "./actionTypes"
import axios from "axios"

const API_URL = "http://localhost:5000/api/posts"

export function removePost(postid) {
    return function (dispatch) {
        dispatch({ type: deleteAllComments, postid: postid })
        dispatch(removedPosts(postid))
    }
}

export function removedPosts(postid) {
    return { type: deletePost, postid: postid }
}

/* Titles */

export function getAllTitles() {
    return async function (dispatch) {
        const res = await axios.get(API_URL)
        dispatch(gotAllTitles(res.data))
    }
}

function gotAllTitles(titles) {

    return (
        {
            type: setTitles,
            allTitles: titles
        })
}


/* Posts */


export function getOnePost(postid) {
    return async function (dispatch) {
        const res = await axios.get(`${API_URL}/${postid}`)
        dispatch(addOnePost(res.data))
    }
}

function addOnePost(post) {
    return ({
        type: addPost,
        post: post
    })
}

export function addNewPost(data) {
    return async function (dispatch) {
        const res = await axios.post(API_URL, {
            title: data.title,
            description: data.description,
            body: data.body
        })
        dispatch(addOnePost(res.data))
    }
}

export function actionDeletePost(postid) {
    return async function (dispatch) {
        const res = await axios.delete(`${API_URL}/${postid}`)
        if (res.data.message === "deleted") {
            dispatch(actionDeletedPost(postid))
            dispatch(actionDeleteAllComments(postid))
        }
    }
}

function actionDeletedPost(postid) {
    return (
        {
            type: deletePost,
            postid: postid
        })
}

export function actionEditPost(postid, data) {
    return async function (dispatch) {
        const res = await axios.put(`${API_URL}/${postid}`, {
            id: postid,
            title: data.title,
            description: data.description,
            body: data.body
        })
        dispatch(actionEditedPost(res.data, postid))
    }
}

function actionEditedPost(post, postid) {
    return ({
        type: editPost,
        postid: postid,
        post: post
    })
}
/* Comments*/

export function getComments(postid) {
    return async function (dispatch) {
        const res = await axios.get(`${API_URL}/${postid}/comments`)
        if (res.data.length > 0) {
            dispatch(gotComments(res.data, postid))
        }
    }
}

function gotComments(comments, postid) {

    return (
        {
            type: setComments,
            comments: comments,
            postid: postid
        })
}

export function actionAddComment(postid, text) {
    return async function (dispatch) {
        const res = await axios.post(`${API_URL}/${postid}/comments`, { text: text, postid: postid })
        dispatch(actionPostedComments(res.data, postid))

    }
}

function actionPostedComments(comment, postid) {
    return ({ type: addComment, comment: comment, postid: postid })
}

export function actionRemoveComment(postid, commentid) {
    return async function (dispatch) {
        const res = await axios.delete(`${API_URL}/${postid}/comments/${commentid}`)
        if (res.data.message === "deleted") {
            dispatch(actionRemovedComment(postid, commentid))
        }
    }
}

function actionRemovedComment(postid, commentid) {
    return (
        {
            type: deleteComment,
            commentid: commentid,
            postid: postid
        })
}

function actionDeleteAllComments(postid) {
    return ({ type: deleteAllComments, postid: postid })
}

/* Votes */

export function actionVote(origin, postid, voteDirection) {
    return async function (dispatch) {
        const res = await axios.post(`${API_URL}/${postid}/vote/${voteDirection}`, {
            id: postid,
            direction: voteDirection
        })
        if (origin == 'title') {

            dispatch(actionVotedTitle(postid, res.data.votes))
        } else {
            dispatch(actionVotedPost(postid, res.data.votes))
        }

    }
}
function actionVotedTitle(postid, votes) {
    return ({ type: titleEditVotes, postid: postid, votes: votes })
}


function actionVotedPost(postid, votes) {

    return ({ type: editVotes, postid: postid, votes: votes })
}
