import React, { Component, useRef, Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { useGLTF , OrbitControls, PerspectiveCamera} from '@react-three/drei'
import { STLViewer } from 'react-stl-obj-viewer';

function Skull(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/brainCompressed.glb')
    return (
      <group ref={group} {...props} dispose={null}>
          <mesh material={materials['default']} geometry={nodes.mesh_0.geometry} rotation={[1, 3.2, 0]} position={[0, -0.1, 0.1]}/>
      </group>
    )
  }

export default class BrainObserver1 extends Component {
    render() {
        return (
            <STLViewer
            onSceneRendered={(element) => {
                console.log(element)
            }}
            sceneClassName="test-scene"
            file={"https://firebasestorage.googleapis.com/v0/b/studmedexpert-b931c.appspot.com/o/brain.stl?alt=media&token=83b4e552-98dd-44f0-8ed4-ab4714621898"}
            className="obj"
            modelColor="#black"
            id="model"/>
        )
    }
}
