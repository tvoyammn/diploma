import React, { useState, Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getVideos } from "../redux/actions/dataActions";

import Grid from "@material-ui/core/Grid";

import VideosList from "../components/video/VideosList";
import Video from "../components/video/Video";
import VideoSkeleton from '../util/VideoSkeleton'

class videos extends Component {
  componentDidMount() {
    this.props.getVideos();
  }

  render() {
    const { videos, loading } = this.props.data;
    let recentVideosMarkup = !loading ? (
      videos.map((video) => <Video key={video.videoId} video={video} />)
    ) : (
      <VideoSkeleton />
    );
    return (
      <Grid container spacing={10}>
        <Grid item sm={4} xs={12}>
          <p>Filter...</p>
        </Grid>
        <Grid item sm={8} xs={12}>
          {recentVideosMarkup}
        </Grid>
      </Grid>
    );
  }
}

videos.propTypes = {
  getVideos: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getVideos })(videos);

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
