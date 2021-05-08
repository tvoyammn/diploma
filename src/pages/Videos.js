import React, { useState, Component } from 'react'
import axios from 'axios'
import { Container, Button } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid'

import AddVideoModal from '../components/AddVideoModal'
import VideosList from '../components/VideosList'
import Video from '../components/Video'


export default class videos extends Component {
    state = {
        videos: null
    }
    componentDidMount() {
        axios
            .get('/videos')
            .then(res => {
                console.log(res.data)
                this.setState({
                    videos: res.data
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        let recentVideosMarkup = this.state.videos ? (
            this.state.videos.map(video => <Video key={video.videoId} video={video} />)
        ) : <p>Loading...</p>
        return (
          <Grid container spacing={10}>
              <Grid item sm={4} xs={12}>
                  <p>Filter...</p>
              </Grid>
              <Grid item sm={8} xs={12}>
                  {recentVideosMarkup}
              </Grid>
           </Grid>
        )
    }
}


// export default function Videos() {
//     const [isOpen, setOpen] = useState(false)

//     const openModal = () => setOpen(true);

//     const closeModal = () => setOpen(false);

//     return (
//         <>
//         <Container>
//             <h1>Videos</h1>
//             <Button onClick={openModal}>Add Video</Button>
//             { isOpen ? 
//             <AddVideoModal 
//                 closeModal={closeModal} 
//                 isOpen={isOpen}
//                 id={1}
//             />
//                 : 
//                 null 
//             }

//             <VideosList />
//         </Container>
//         </>
//     )
    
// }
