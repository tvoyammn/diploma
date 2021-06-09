import React, { useRef, useState, Component, Suspense, Fragment } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";
import { Canvas } from "react-three-fiber";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Switch from '@material-ui/core/Switch'

const state = proxy({
  current: null,
  items: {},
});

function Heart(props) {
  const group = useRef();

  const snap = useSnapshot(state);

  const [hovered, set] = useState(null);

  const { nodes, materials } = useGLTF("/heartCompressed.glb");
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerOver={(e) => {
        e.stopPropagation();
        set(e.object.material.name);
      }}
      onPointerOut={(e) => {
        e.intersections.length === 0 && set(null);
      }}
      onPointerDown={(e) => {
        e.stopPropagation();
        state.current = e.object.material.name;
      }}
      onPointerMissed={(e) => {
        state.current = null;
      }}
    >
      <group rotation={[-Math.PI / 2, -Math.PI / 2, -Math.PI / 2]}>
        <group position={[0, 0, 0]} scale={[0.01, 0.01, 0.01]}>
          <mesh
            geometry={nodes.Veins_Veins_0.geometry}
            material={materials.Veins}
          />
          <mesh
            geometry={nodes.Hart_basis_Hart_basis_0.geometry}
            material={materials.Hart_basis}
          />
          <mesh
            geometry={nodes.Valves_Valves_0.geometry}
            material={materials.Valves}
          />
          <mesh
            geometry={nodes.Aorta_Aorta_0.geometry}
            material={materials.Aorta}
          />
          <mesh
            geometry={nodes.Avvalves_Avvalves_0.geometry}
            material={materials.Avvalves}
          />
          <mesh
            geometry={nodes.Ligament_Ligament_0.geometry}
            material={materials.Ligament}
          />
          <mesh
            geometry={nodes.Pulmonary_trunk_Pulmonary_trunk_0.geometry}
            material={materials.Pulmonary_trunk}
          />
          <mesh
            geometry={nodes.Heartear_Heartear_0.geometry}
            material={materials.Heartear}
          />
          <mesh
            geometry={nodes.Arteries2_Arteries2_0.geometry}
            material={materials.Arteries2}
          />
        </group>
      </group>
    </group>
  );
}

function FullHeart(props) {
  const group = useRef();

  const snap = useSnapshot(state);

  const [hovered, set] = useState(null);
  const { nodes, materials } = useGLTF('/fullheartCompressed.glb')
  return (
    <group ref={group}
    {...props}
    dispose={null}
    onPointerOver={(e) => {
      e.stopPropagation();
      set(e.object.material.name);
    }}
    onPointerOut={(e) => {
      e.intersections.length === 0 && set(null);
    }}
    onPointerDown={(e) => {
      e.stopPropagation();
      state.current = e.object.material.name;
    }}
    onPointerMissed={(e) => {
      state.current = null;
    }}>
      <group rotation={[-Math.PI / 2, -Math.PI / 2, -Math.PI / 2]}>
        <group position={[0, 0, 0]} scale={[0.01, 0.01, 0.01]}>
            <mesh
              geometry={
                nodes.MM634_BP51951_FMA4706_Coronary_sinus835_MM634_BP51951_FMA4706_Coronary_sinus835_0.geometry
              }
              material={
                nodes.MM634_BP51951_FMA4706_Coronary_sinus835_MM634_BP51951_FMA4706_Coronary_sinus835_0.material
              }
            />
            <mesh
              geometry={
                nodes.MM634_BP51951_FMA4706_Coronary_sinus835_MM634_BP51951_FMA4706_Coronary_sinus835_0_1.geometry
              }
              material={
                nodes.MM634_BP51951_FMA4706_Coronary_sinus835_MM634_BP51951_FMA4706_Coronary_sinus835_0_1.material
              }
            />
            <mesh
              geometry={
                nodes.MM634_BP51951_FMA4706_Coronary_sinus835_MM634_BP51951_FMA4706_Coronary_sinus835_0_2.geometry
              }
              material={
                nodes.MM634_BP51951_FMA4706_Coronary_sinus835_MM634_BP51951_FMA4706_Coronary_sinus835_0_2.material
              }
            />
          </group>
      </group>
    </group>
  )
}

function Picker() {
  const snap = useSnapshot(state);
  return (
    <div style={{ display: snap.current ? "block" : "none" }}>
      {snap.current === "Veins" ? (
        <Fragment style={{marginTop: 20}}>
          <Typography variant="h3" fontSize="">Veins</Typography>
          <Typography variant="h5">Veins are blood vessels that carry blood towards the heart. Most veins carry deoxygenated blood from the tissues back to the heart. Exceptions are the pulmonary and umbilical veins, both of which carry oxygenated blood to the heart. In contrast to veins, arteries carry blood away from the heart.</Typography>
        </Fragment>
      ) : snap.current === "Hart_basis" ? (
        <Fragment style={{marginTop: 20}}>
          <Typography variant="h3" fontSize="">Base of heart</Typography>
          <Typography variant="h5">The base of tbe heart (basis cordis), directed upward, backward, and to the right, is separated from the fifth, sixth, seventh, and eighth thoracic vertebra by the esophagus, aorta, and thoracic duct.</Typography>
        </Fragment>
      ) : snap.current === "Valves" ? (
        <Fragment style={{marginTop: 20}}>
          <Typography variant="h3" fontSize="">Valves</Typography>
          <Typography variant="h5">Your heart has four valves that keep blood flowing in the correct direction. These valves include the mitral valve, tricuspid valve, pulmonary valve and aortic valve. </Typography>
        </Fragment>
      ) : snap.current === "Aorta" ? (
        <Fragment style={{marginTop: 20}}>
          <Typography variant="h3" fontSize="">Aorta</Typography>
          <Typography variant="h5">The aorta is the main and largest artery in the human body, originating from the left ventricle of the heart and extending down to the abdomen, where it splits into two smaller arteries (the common iliac arteries). The aorta distributes oxygenated blood to all parts of the body through the systemic circulation.</Typography>
        </Fragment>
      ) : snap.current === "Avvalves" ? (
        <Fragment style={{marginTop: 20}}>
          <Typography variant="h3" fontSize="">Atrioventricular valves</Typography>
          <Typography variant="h5">The atrioventricular valves are those that connect the atrium to the ventricles and include the mitral valve as well as the tricuspid valve.</Typography>
        </Fragment>
      ) : snap.current === "Ligament" ? (
        <Fragment style={{marginTop: 20}}>
          <Typography variant="h3" fontSize="">Ligamentum arteriosum</Typography>
          <Typography variant="h5">The ligamentum arteriosum (Latin: arterial ligament) is a small ligament that is the remnant of the ductus arteriosus formed within three weeks after birth.</Typography>
        </Fragment>
      ) : snap.current === "Pulmonary_trunk" ? (
        <Fragment style={{marginTop: 20}}>
          <Typography variant="h3" fontSize="">Pulmonary trunk</Typography>
          <Typography variant="h5">The pulmonary trunk or main pulmonary artery (mPA) is the solitary arterial output from the right ventricle, transporting deoxygenated blood to the lungs for oxygenation.</Typography>
        </Fragment>
      ) : snap.current === "Heartear" ? (
        <Fragment style={{marginTop: 20}}>
          <Typography variant="h3" fontSize="">Heartear</Typography>
          <Typography variant="h5">Conducts signals from the skin to the brains.</Typography>
        </Fragment>
      ) : snap.current === "Arteries2" ? (
        <Fragment style={{marginTop: 20}}>
          <Typography variant="h3" fontSize="">Arteries</Typography>
          <Typography variant="h5">The arteries are the blood vessels that deliver oxygen-rich blood from the heart to the tissues of the body.</Typography>
        </Fragment>
      ) : null}
    </div>
  );
}

export default class HeartWindow extends Component {
  state = {
    full: false
  }

  handleChange = () => {
    this.setState({ full: !this.state.full})
  }

  render() {

    return (
      <Fragment>
        <Grid container>
          <div
            style={{
              width: "400px",
              height: "400px",
              border: "solid 1px black",
            }}
          >
            <Canvas>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              {!this.state.full ? (
                <Suspense fallback="Loading...">
                <Heart />
              </Suspense>
              ) : (
                <Suspense fallback="Loading...">
                <FullHeart />
              </Suspense>
              )}
              <OrbitControls />
            </Canvas>
          </div>
        </Grid>
        <Switch
        checked={this.state.full}
        onChange={this.handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /> Fill
        <Grid container>
          <Picker />
        </Grid>
      </Fragment>
    );
  }
}
