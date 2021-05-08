import React, { useRef, useState, Component, Suspense } from 'react'
import { OrbitControls, PerspectiveCamera} from '@react-three/drei'
import { useGLTF } from '@react-three/drei'
import { proxy, useSnapshot } from "valtio"
import { Canvas } from 'react-three-fiber'
import { Row, Col } from 'react-bootstrap'

const state = proxy({
  current : null,
  items: {}
});

function Airways(props) {
  const group = useRef()

  const snap = useSnapshot(state)

  const [hovered, set] = useState(null)

  const { nodes, materials } = useGLTF('/airwaysCompressed.glb')
  return (
    <group ref={group} {...props} dispose={null}
      onPointerOver = {(e) => { e.stopPropagation(); set(e.object.material.name) }}
        onPointerOut = {(e) => { e.intersections.length===0 && set(null) }}
        onPointerDown = {(e) => { e.stopPropagation(); state.current = e.object.material.name }}
        onPointerMissed = {(e) => { state.current = null }}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, -43.76, -497.53]} rotation={[-1.9, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.bronchi1_1_bronchi1_1_0.geometry} material={materials.bronchi1_1} />
            <mesh geometry={nodes.bronchi1_bronchi1_0.geometry} material={materials.bronchi1} />
            <mesh geometry={nodes.Linkerlong_Linkerlong_0.geometry} material={materials.Linkerlong} />
            <mesh geometry={nodes.Trachea_kraakbeen_Trachea_kraakbeen_0.geometry} material={materials.Trachea_kraakbeen} />
            <mesh geometry={nodes.Tussen_hyoid_en_thyroid_Tussen_hyoid_en_thyroid_0.geometry} material={materials.Tussen_hyoid_en_thyroid} />
            <mesh geometry={nodes.Hyoid_bone_Hyoid_bone_0.geometry} material={materials.Hyoid_bone} />
            <mesh geometry={nodes.Thyroid_gland_Thyroid_gland_0.geometry} material={materials.Thyroid_gland} />
            <mesh geometry={nodes.PM3D_Sphere3D2_PM3D_Sphere3D2_0.geometry} material={materials.PM3D_Sphere3D2} />
          </group>
        </group>
      </group>
    </group>
  )
}

function Picker() {
  const snap = useSnapshot(state)
  return(
      <div style={{display: snap.current?"block":"none"}}>
           { snap.current }
           { snap.current === 'bronchi1_1' ? <h1> Smooth muscle fibers </h1>
           : snap.current === 'bronchi1' ? <h1> Bronchi </h1>
           : snap.current === 'Linkerlong' ? <h1> Linker long </h1>
           : snap.current === 'Trachea_kraakbeen' ? <h1> Cartilagines trachealis </h1>
           : snap.current === 'Tussen_hyoid_en_thyroid' ? <h1> Atrioventricular valves </h1> //
           : snap.current === 'Hyoid_bone' ? <h1> Cartilago thyroidea </h1>
           : snap.current === 'Thyroid_gland' ? <h1> Cricoidea </h1>
           : snap.current === 'PM3D_Sphere3D2' ? <h1> Alveoli </h1>
           : null
          }
      </div>
  )
}

export default class AirwaysWindow extends Component {
  render() {
      return (
          <>
            <Row>
                <Col>
                  <Picker />
                </Col>
                <Col>
                  <div style={{width: "400px", height: "400px", border: "solid 1px black"}}>
                  <Canvas>
                  <ambientLight intensity={0.5}/>
                  <pointLight position={[10, 10, 10]} />
                  <Suspense fallback="null">
                      <Airways />
                  </Suspense>
                  <OrbitControls />
                  </Canvas>
                  </div>
              </Col>
            </Row>
          </>
      )
  }
}