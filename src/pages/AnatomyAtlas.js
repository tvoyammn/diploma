import React, { Component } from 'react'
import AnatomyAtlasWindow from '../components/AnatomyAtlasWindow'
import { Container } from 'react-bootstrap'
import Skin from '../components/anatomyAtlasModels/Skin'

export default class AnatomyAtlas extends Component {
    render() {
        return (
            <>
            <Container>
              <h1>Anatomy Atlas</h1>
              <Skin />
            </Container>
            </>
        )
    }
}
