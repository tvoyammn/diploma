import React, { Component, useRef, Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { useGLTF , OrbitControls, PerspectiveCamera} from '@react-three/drei'

function Skull(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('medvedCompressed.glb')
    return (
      <group ref={group} {...props} dispose={null}>
        <mesh material={materials['default']} geometry={nodes['Exported_from_Blender-278_(sub_0)'].geometry} rotation={[0.8, 3.1, 0.1]} position={[0, 0.3, -0.5]} />
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
