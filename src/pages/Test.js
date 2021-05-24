import React, { Component } from "react";
import { Container } from "react-bootstrap";
 import { STLViewer } from "react-stl-obj-viewer";
import firebase from "../util/firebase";

export default class test extends Component {
  constructor() {
    super();
    this.state = {
      stlFile: null,
      stlLink: null
    };
    this._state = {
        stlLink: window.location.href + 'bottle.stl',
    }
  }

//   componentDidMount() {
//     var storage = firebase.storage();
//     var pathReference = storage.ref('brain.stl');
//       this.setState({stlFile: pathReference})
//   }

  onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    this.setState({ fileUrl: await fileRef.getDownloadURL() });
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
        <div className="container" id="div4">
                    <label htmlFor="obj-link">
                        Load STL by link
                        <br/>
                        <input type="text"
                               name="obj-link"
                               onChange={(e) => {
                                   this._state.stlLink = e.target.value;
                               }}/>
                        <input type="button" value="upload URL" onClick={() => {
                            this.setState({
                                stlLink: this._state.stlLink,
                            })
                        }}/>
                    </label>
                    {this.state.stlLink ?
                        <STLViewer
                            onSceneRendered={(element) => {
                                console.log(element)
                            }}
                            sceneClassName="test-scene"
                            url={this.state.stlLink}
                            className="obj"
                            modelColor="#FF0000"/> : null
                    }
                </div>
    //   <>
    //     <Container>
    //       <label>
    //         Load STL by file
    //         <br />
    //         <input
    //           type="file"
    //           name="obj-file"
    //           onChange={(e) => {
    //             console.log(e.target.files[0]);
    //             var storage = firebase.storage();
    //  var pathReference = storage.ref('brain.stl');
    //    this.setState({stlFile: pathReference})
    //           }}
    //         />
    //       </label>
    //       {this.state.stlFile ? (
    //         <STLViewer
    //           onSceneRendered={(element) => {
    //             console.log(element);
    //           }}
    //           sceneClassName="test-scene"
    //           file={this.state.stlFile}
    //           className="obj"
    //           modelColor="#black"
    //           id="model"
    //         />
    //       ) : null}
    //     </Container>
    //   </>
    );
  }
}
