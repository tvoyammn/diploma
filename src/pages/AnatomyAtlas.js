import React, { Component, useState } from 'react'
import AnatomyAtlasWindow from '../components/AnatomyAtlasWindow'
import { Container, DropdownButton, Dropdown } from 'react-bootstrap'
import Skin from '../components/anatomyAtlasModels/Skin'
import Heart from '../components/anatomyAtlasModels/Heart'
import Airways from '../components/anatomyAtlasModels/Airways'

function ModelsSwitch(props) {
    
    const modelName = props.modelName;
    if (modelName === 'Skin')
        return <Skin />;
    else if(modelName === 'Heart')
        return <Heart />;
    else if(modelName === 'Airways')
        return <Airways />;
}

export default function AnatomyAtlas() {
        const [modelName, setModelName] = useState('Skin')

        const setModelHeart = () => setModelName('Heart');
        const setModelSkin = () => setModelName('Skin');
        const setModelAirways = () => setModelName('Airways');

        return (
            <>
            <Container>
              <h1>Anatomy Atlas</h1>
              <ModelsSwitch modelName={modelName}/>
              <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item onClick={setModelHeart}>Heart</Dropdown.Item>
                <Dropdown.Item onClick={setModelSkin}>Skin</Dropdown.Item>
                <Dropdown.Item onClick={setModelAirways}>Airways</Dropdown.Item>
              </DropdownButton>
            </Container>
            </>
        )
}
