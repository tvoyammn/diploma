import React, { Component, Suspense, useState } from 'react'
import { VRCanvas, DefaultXRControllers, Select, Hover, useXR } from 'react-xr'
import { Sky, useGLTF, Box, Html } from '@react-three/drei'
import '@react-three/fiber'
import { Canvas } from 'react-three-fiber'
import { Container, Card } from 'react-bootstrap'
import { Interactive } from '@react-three/xr'

import SkinVR from '../components/anatomyAtlasVRModels/SkinVR'
import HeartVR from '../components/anatomyAtlasVRModels/HeartVR'
import AirwaysVR from '../components/anatomyAtlasVRModels/AirwaysVR'

function Floor() {
    return (
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry attach="geometry" args={[40, 40]} />
        <meshStandardMaterial attach="material" color="#666" />
      </mesh>
    )
  }


export default class vr extends Component {
    render() {
        return (
            <>
                <div style={{width: "100%", height: "600px", border: "solid 1px black"}}>
                <VRCanvas>
                    <Sky sunPosition={[0, 1, 0]} />
                    <Floor />
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <Suspense fallback="null">
                        <SkinVR />
                    </Suspense>
                    <Suspense fallback="null">
                        <HeartVR />
                    </Suspense>
                    <Suspense fallback="null">
                        <AirwaysVR />
                    </Suspense>
                    <DefaultXRControllers />
                </VRCanvas>
                </div>
            </>
        )
    }
}