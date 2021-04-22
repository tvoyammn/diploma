import React, { Component, useRef, Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { useGLTF , OrbitControls, PerspectiveCamera} from '@react-three/drei'

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
            <div style={{width: "400px", height: "400px", border: "solid 1px black"}}>
            <Canvas>
                <ambientLight intensity={0.5}/>
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback="null">
                <Skull />
                </Suspense>
                <PerspectiveCamera makeDefault position={[0, 0.5, 0.5]} />
                <OrbitControls />
            </Canvas>
            </div>
        )
    }
}
