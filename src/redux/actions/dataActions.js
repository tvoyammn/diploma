import { SET_VIDEOS, LOADING_DATA, LIKE_VIDEO, UNLIKE_VIDEO } from '../types'
import axios from 'axios'


//get all videos
export const getVideos = () => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios.get('/videos')
        .then(res => {
            dispatch({
                type: SET_VIDEOS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: SET_VIDEOS,
                payload: []
            })
        })
}

//like a video
export const likeVideo = (videoId) => (dispatch) => {
    axios.get(`/video/${videoId}/like`)
        .then(res => {
            dispatch({
                type: LIKE_VIDEO,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}

//unlike a video
export const unlikeVideo = (videoId) => (dispatch) => {
    axios.get(`/video/${videoId}/unlike`)
        .then(res => {
            dispatch({
                type: UNLIKE_VIDEO,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}