import React, { useRef, useState, Component, Suspense } from 'react'
import { OrbitControls, PerspectiveCamera} from '@react-three/drei'
import { useGLTF } from '@react-three/drei'
import { proxy, useSnapshot } from "valtio"
import { Canvas } from 'react-three-fiber'
import { Row, Col } from 'react-bootstrap'

const state = proxy({
    current : null,
    items: {
        stratumBasale : false,
        keratinocyte : false,
        melanocyte : false,
        merkelCell : false,
        langerhansCell : false,
        stratumCorneum : false,
        basementMembraneOfEpidermis : false,
        fibroblast : false,
        dermalMatrix : false,
        hair : false,
        musculusArrectorPili : false,
        sebaceousGland : false,
        apocrineSweatGland : false,
        eccrineSweatGland : false,
        nerve : false,
        dermalVessel : false,
        fatInSubcutis : false
    }
});

function Skin(props) {
    const group = useRef()

    const snap = useSnapshot(state)

    const [hovered, set] = useState(null)

    const { nodes, materials } = useGLTF('/skinCompressed.glb')
    return (
      <group ref={group} {...props} dispose={null}
      
        onPointerOver = {(e) => { e.stopPropagation(); set(e.object.material.name) }}
        onPointerOut = {(e) => { e.intersections.length===0 && set(null) }}
        onPointerDown = {(e) => { e.stopPropagation(); state.current = e.object.material.name }}
        onPointerMissed = {(e) => { state.current = null }}

      >
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Skin_ZSphere_4_Skin_ZSphere_4_0.geometry} material={materials.Skin_ZSphere_4} />
            <mesh geometry={nodes.Extract1_Extract1_0.geometry} material={materials.Extract1} />
            <mesh geometry={nodes.Extract3_1_Extract3_1_0.geometry} material={materials.Extract3_1} />
            <mesh geometry={nodes.Extract8_Extract8_0.geometry} material={materials.Extract8} />
            <mesh geometry={nodes.PM3D_Cube3D5_945_PM3D_Cube3D5_945_0.geometry} material={materials.PM3D_Cube3D5_945} />
            <mesh geometry={nodes.PM3D_Cube3D5_953_PM3D_Cube3D5_953_0.geometry} material={materials.PM3D_Cube3D5_953} />
            <mesh geometry={nodes.Extract6_Extract6_0.geometry} material={materials.Extract6} />
            <mesh geometry={nodes.PM3D_Sphere3D2_2_PM3D_Sphere3D2_2_0.geometry} material={materials.PM3D_Sphere3D2_2} />
            <mesh geometry={nodes.Big_Big_0.geometry} material={materials.material} />
            <mesh geometry={nodes.PM3D_Cube3D2_PM3D_Cube3D2_0.geometry} material={materials.PM3D_Cube3D2} />
            <mesh geometry={nodes.Skin_ZSphere6_Skin_ZSphere6_0.geometry} material={materials.Skin_ZSphere6} />
            <mesh geometry={nodes.Skin_ZSphere7_Skin_ZSphere7_0.geometry} material={materials.Skin_ZSphere7} />
            <mesh geometry={nodes.PM3D_Sphere3D2_343_PM3D_Sphere3D2_343_0.geometry} material={materials.PM3D_Sphere3D2_343} />
            <mesh geometry={nodes.Epidermis_Epidermis_0.geometry} material={materials.Epidermis} />
            <mesh geometry={nodes.Epischdermis_Epischdermis_0.geometry} material={materials.Epischdermis} />
            <mesh geometry={nodes.Skin_ZSphere29_11_Skin_ZSphere29_11_0.geometry} material={materials.Skin_ZSphere29_11} />
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
             { snap.current === 'Skin_ZSphere_4' ? <h1> Hair </h1> 
             : snap.current === 'Extract1' ? <h1> Sebaceous gland </h1> 
             : snap.current === 'Extract3_1' || snap.current === 'Extract8' ? <h1> Apocrine sweat gland </h1> 
             : snap.current === 'PM3D_Cube3D5_945' ? <h1> Dermal matrix </h1> 
             : snap.current === 'PM3D_Cube3D5_953' ? <h1> Stratum basale </h1> 
             : snap.current === 'Extract6' || snap.current === 'PM3D_Cube3D2' ? <h1> Basement membrane of epidermis </h1> 
             : snap.current === 'PM3D_Sphere3D2_2' ? <h1> Musculus Arrector pili </h1> 
             : snap.current === 'material' ? <h1> Stratum corneum </h1> 
             : snap.current === 'Skin_ZSphere6' ? <h1> Dermal vessel </h1> 
             : snap.current === 'Skin_ZSphere7' ? <h1> Nerve </h1> 
             : snap.current === 'PM3D_Sphere3D2_343' ? <h1> Fat in subcutis </h1> 
             : snap.current === 'Epischdermis' ? <h1> Keratinocyte </h1> 
             : snap.current === 'Skin_ZSphere29_11' ? <h1> Eccrine sweat gland </h1> 
             : null
            }
        </div>
    )
  }

  export default class SkinWindow extends Component {
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
                        <Skin />
                    </Suspense>
                    {/* <PerspectiveCamera makeDefault position={[0, 0.5, 0.5]} /> */}
                    <OrbitControls />
                    </Canvas>
                    </div>
                </Col>
              </Row>
            </>
        )
    }
}