import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import { STLViewer } from 'react-stl-obj-viewer';

export default class Test extends Component {
    constructor() {
        super();
        this.state = {
            stlFile: null
        }
    }

    render() {
        return (
            <>
                <Container>
                    <label>
                        Load STL by file
                        <br/>
                        <input type="file"
                               name="obj-file"
                               onChange={(e) => {
                                   console.log(e.target.files)
                                   this.setState({
                                       stlFile: e.target.files[0]
                                   })
                               }} />
                    </label>
                    {this.state.stlFile ?
                        <STLViewer
                            onSceneRendered={(element) => {
                                console.log(element)
                            }}
                            sceneClassName="test-scene"
                            file={this.state.stlFile}
                            className="obj"
                            modelColor="#black"
                            id="model"/> : null

                    }
                </Container>
            </>
        )
    }
}
