import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import firebase from '../../util/firebase'


export default function VideosList() {
    
    const [videosList, setVideosList] = useState()

    useEffect(() => {
        const videoRef = firebase.database().ref("Videos")
        videoRef.on("value", (snapshot) => {
            const videos = snapshot.val();
            const videosList = []
            for (let id in videos){
                videosList.push(videos[id])
            }
            setVideosList(videosList)
        })
    }, [])
        return (
            <>
                { videosList ? videosList.map(video => {
                    return(
                        <div key={ video.id } className="video" style={{ borderBottom: "1px solid #000"}}>
                            <h4>{ video.title }</h4>
                            <ReactPlayer width='480px' height='240px' controls url={video.url} />
                        </div>
                    )
                }) : ''}
            </> 
        )
    
}