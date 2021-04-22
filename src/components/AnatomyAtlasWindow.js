import React, { Component, Suspense } from 'react'
import { OrbitControls, PerspectiveCamera} from '@react-three/drei'
import { Canvas } from 'react-three-fiber'
import Heart from './anatomyAtlasModels/Heart'
import Skin from './anatomyAtlasModels/Skin'

export default class AnatomyAtlasWindow extends Component {
    render() {
        return (
            <>
                <div style={{width: "400px", height: "400px", border: "solid 1px black"}}>
                    <Canvas>
                        <ambientLight intensity={0.5}/>
                        <pointLight position={[10, 10, 10]} />
                        <Suspense fallback="null">
                          <Skin />
                        </Suspense>
                        <PerspectiveCamera makeDefault position={[0, 0.5, 0.5]} />
                        <OrbitControls />
                    </Canvas>
            </div>
            </>
        )
    }
}