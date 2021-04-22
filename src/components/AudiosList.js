import React, { useEffect, useState } from 'react'
import firebase from '../util/firebase'


export default function AudiosList() {
    
    const [audiosList, setAudiosList] = useState()

    useEffect(() => {
        const audioRef = firebase.database().ref("Audios")
        audioRef.on("value", (snapshot) => {
            const audios = snapshot.val();
            const audiosList = []
            for (let id in audios){
                audiosList.push(audios[id])
            }
            setAudiosList(audiosList)
        })
    }, [])
        return (
            <>
                { audiosList ? audiosList.map(audio => {
                    return(
                        <div key={ audio.id } className="audio" style={{ borderBottom: "1px solid #000"}}>
                            <h4>{ audio.title }</h4>
                            <audio controls src={audio.url} />
                        </div>
                    )
                }) : ''}
            </> 
        )
    
}