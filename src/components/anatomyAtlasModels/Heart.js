import React, { useRef, useState, Component, Suspense, Fragment } from 'react'
import { OrbitControls, PerspectiveCamera} from '@react-three/drei'
import { useGLTF } from '@react-three/drei'
import { proxy, useSnapshot } from "valtio"
import { Canvas } from 'react-three-fiber'

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const state = proxy({
  current : null,
  items: {}
});

function Heart(props) {
  const group = useRef()

  const snap = useSnapshot(state)

  const [hovered, set] = useState(null)

  const { nodes, materials } = useGLTF('/heartCompressed.glb')
  return (
    <group ref={group} {...props} dispose={null}
      onPointerOver = {(e) => { e.stopPropagation(); set(e.object.material.name) }}
        onPointerOut = {(e) => { e.intersections.length===0 && set(null) }}
        onPointerDown = {(e) => { e.stopPropagation(); state.current = e.object.material.name }}
        onPointerMissed = {(e) => { state.current = null; console.log(e.object.node.Aorta.position) }}
    >
      <group rotation={[-Math.PI / 2, -Math.PI / 2, -Math.PI / 2]}>
        <group position={[12, 7, 100]}>
            <mesh geometry={nodes.Veins_Veins_0.geometry} material={materials.Veins} />
            <mesh geometry={nodes.Hart_basis_Hart_basis_0.geometry} material={materials.Hart_basis} />
            <mesh geometry={nodes.Valves_Valves_0.geometry} material={materials.Valves} />
            <mesh geometry={nodes.Aorta_Aorta_0.geometry} material={materials.Aorta} />
            <mesh geometry={nodes.Avvalves_Avvalves_0.geometry} material={materials.Avvalves} />
            <mesh geometry={nodes.Ligament_Ligament_0.geometry} material={materials.Ligament} />
            <mesh geometry={nodes.Pulmonary_trunk_Pulmonary_trunk_0.geometry} material={materials.Pulmonary_trunk} />
            <mesh geometry={nodes.Heartear_Heartear_0.geometry} material={materials.Heartear} />
            <mesh geometry={nodes.Arteries2_Arteries2_0.geometry} material={materials.Arteries2} />
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
           { snap.current === 'Veins' ? <h1> Veins </h1>
           : snap.current === 'Hart_basis' ? <h1> Base of heart </h1>
           : snap.current === 'Valves' ? <h1> Valves </h1>
           : snap.current === 'Aorta' ? <h1> Aorta </h1>
           : snap.current === 'Avvalves' ? <h1> Atrioventricular valves </h1>
           : snap.current === 'Ligament' ? <h1> Ligament </h1>
           : snap.current === 'Pulmonary_trunk' ? <h1> Pulmonary trunk </h1>
           : snap.current === 'Heartear' ? <h1> Heartear </h1>
           : snap.current === 'Arteries2' ? <h1> Arteries </h1>
           : null
          }
      </div>
  )
}

export default class HeartWindow extends Component {
  render() {
      return (
        <Fragment>
      <Grid container>
        <div
          style={{ width: "400px", height: "400px", border: "solid 1px black" }}
        >
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback="Loading...">
              <Heart />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
      </Grid>
      <Grid container>
        <Picker />
      </Grid>
    </Fragment>
      )
  }
}


{/* <>
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
          <Heart />
      </Suspense>
      <OrbitControls />
      </Canvas>
      </div>
  </Col>
</Row>
</> */}