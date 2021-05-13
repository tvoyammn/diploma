import React, { useRef, useState, Component, Suspense, Fragment } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";
import { Canvas } from "react-three-fiber";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const state = proxy({
  current: null,
  items: {
    stratumBasale: false,
    keratinocyte: false,
    melanocyte: false,
    merkelCell: false,
    langerhansCell: false,
    stratumCorneum: false,
    basementMembraneOfEpidermis: false,
    fibroblast: false,
    dermalMatrix: false,
    hair: false,
    musculusArrectorPili: false,
    sebaceousGland: false,
    apocrineSweatGland: false,
    eccrineSweatGland: false,
    nerve: false,
    dermalVessel: false,
    fatInSubcutis: false,
  },
});

function Skin(props) {
  const group = useRef();

  const snap = useSnapshot(state);

  const [hovered, set] = useState(null);

  const { nodes, materials } = useGLTF("/skinCompressed.glb");
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
      <group
        rotation={[-Math.PI / 2, -Math.PI / 2, -Math.PI / 2]}
        position={[12, 7, -30]}
      >
        <mesh
          geometry={nodes.Skin_ZSphere_4_Skin_ZSphere_4_0.geometry}
          material={materials.Skin_ZSphere_4}
        />
        <mesh
          geometry={nodes.Extract1_Extract1_0.geometry}
          material={materials.Extract1}
        />
        <mesh
          geometry={nodes.Extract3_1_Extract3_1_0.geometry}
          material={materials.Extract3_1}
        />
        <mesh
          geometry={nodes.Extract8_Extract8_0.geometry}
          material={materials.Extract8}
        />
        <mesh
          geometry={nodes.PM3D_Cube3D5_945_PM3D_Cube3D5_945_0.geometry}
          material={materials.PM3D_Cube3D5_945}
        />
        <mesh
          geometry={nodes.PM3D_Cube3D5_953_PM3D_Cube3D5_953_0.geometry}
          material={materials.PM3D_Cube3D5_953}
        />
        <mesh
          geometry={nodes.Extract6_Extract6_0.geometry}
          material={materials.Extract6}
        />
        <mesh
          geometry={nodes.PM3D_Sphere3D2_2_PM3D_Sphere3D2_2_0.geometry}
          material={materials.PM3D_Sphere3D2_2}
        />
        <mesh
          geometry={nodes.Big_Big_0.geometry}
          material={materials.material}
        />
        <mesh
          geometry={nodes.PM3D_Cube3D2_PM3D_Cube3D2_0.geometry}
          material={materials.PM3D_Cube3D2}
        />
        <mesh
          geometry={nodes.Skin_ZSphere6_Skin_ZSphere6_0.geometry}
          material={materials.Skin_ZSphere6}
        />
        <mesh
          geometry={nodes.Skin_ZSphere7_Skin_ZSphere7_0.geometry}
          material={materials.Skin_ZSphere7}
        />
        <mesh
          geometry={nodes.PM3D_Sphere3D2_343_PM3D_Sphere3D2_343_0.geometry}
          material={materials.PM3D_Sphere3D2_343}
        />
        <mesh
          geometry={nodes.Epidermis_Epidermis_0.geometry}
          material={materials.Epidermis}
        />
        <mesh
          geometry={nodes.Epischdermis_Epischdermis_0.geometry}
          material={materials.Epischdermis}
        />
        <mesh
          geometry={nodes.Skin_ZSphere29_11_Skin_ZSphere29_11_0.geometry}
          material={materials.Skin_ZSphere29_11}
        />
      </group>
    </group>
  );
}

function Picker() {
  const snap = useSnapshot(state);
  return (
    <div style={{ display: snap.current ? "block" : "none" }}>
      {snap.current === "Skin_ZSphere_4" ? (
        <Fragment style={{marginTop: 20}}>
          <Typography variant="h3" fontSize="">Hair</Typography>
          <Typography variant="h5">Hairs are thin, keratinised skin annexes that are formed in the hair follicle. They consist of three layers: marrow, cortex and cuticle. the amount of melanin in the marrow determines the colour of the hair. Marrow can only be found in terminal hair (scalp, eye brows, armpits, genitalia) and is absent in the vellus hair.</Typography>
        </Fragment>
      ) : snap.current === "Extract1" ? (
        <Fragment style={{marginTop: 20}}>
          <Typography variant="h3" fontSize="">Sebaceous gland</Typography>
          <Typography variant="h5">Sebaceous glands arise from hair follicles and are often connected to the hair follicle; the gland then drains into the hair follicle. Because of the sebacious glands, the skin is covered with a thin layer of fat. The production of sebum is influenced by androgens.</Typography>
        </Fragment>
      ) : snap.current === "Extract3_1" || snap.current === "Extract8" ? (
        <Fragment style={{marginTop: 20}}>
          <Typography variant="h3" fontSize="">Apocrine sweat gland</Typography>
          <Typography variant="h5">These glands are influenced by androgens and can be found in the external ear canal, armpit, nipple and anogenital area. The gland drains just above the drainage of the sebaceous gland. These glands contribute to the body odour.</Typography>
        </Fragment>
      ) : snap.current === "PM3D_Cube3D5_945" ? (
        <Fragment style={{marginTop: 20}}>
          <Typography variant="h3" fontSize="">Dermal matrix</Typography>
          <Typography variant="h5">The dermal matrix consists of collagen, elastin, proteins and mucopolysaccharids, that are produced by fibroblasts.</Typography>
        </Fragment>
      ) : snap.current === "PM3D_Cube3D5_953" ? (
        <Fragment style={{marginTop: 20}}>
          <Typography variant="h3" fontSize="">Stratum basale</Typography>
          <Typography variant="h5">Stratum basale is the deepest layer of the five layers of the epidermis, the external covering of skin in mammals.</Typography>
        </Fragment>
      ) : snap.current === "Extract6" || snap.current === "PM3D_Cube3D2" ? (
        <Fragment style={{marginTop: 20}}>
          <Typography variant="h3" fontSize="">Basement membrane of epidermis</Typography>
          <Typography variant="h5">The basement membrane is a complex structure that forms the boundary between epidermis and dermis. The function of the basement membrane is to ensure that the dermis and epidermis are attached to each other.</Typography>
        </Fragment>
      ) : snap.current === "PM3D_Sphere3D2_2" ? (
        <Fragment style={{marginTop: 20}}>
          <Typography variant="h3" fontSize="">Musculus Arrector pili</Typography>
          <Typography variant="h5">Smooth muscle fibers that are attached to the hair follicle. When tightened, they cause goose bumps.</Typography>
        </Fragment>
      ) : snap.current === "material" ? (
        <Fragment style={{marginTop: 20}}>
          <Typography variant="h3" fontSize="">Stratum corneum</Typography>
          <Typography variant="h5">The Stratum corneum (horny layer) consists of anuclear, completely keratinised cells, with inbetween them a layer consisting of keratin and lipids that let through very little water.</Typography>
        </Fragment>
      ) : snap.current === "Skin_ZSphere6" ? (
        <Fragment style={{marginTop: 20}}>
          <Typography variant="h3" fontSize="">Dermal vessel</Typography>
          <Typography variant="h5">Dermal vessels supply the skin of nutrients and play an important role in thermoregulation and supply of amongst others leukocytes that are involved in the defense and inflammatory processes in the skin.</Typography>
        </Fragment>
      ) : snap.current === "Skin_ZSphere7" ? (
        <Fragment style={{marginTop: 20}}>
          <Typography variant="h3" fontSize="">Nerve</Typography>
          <Typography variant="h5">Conducts signals from the skin to the brains.</Typography>
        </Fragment>
      ) : snap.current === "PM3D_Sphere3D2_343" ? (
        <Fragment style={{marginTop: 20}}>
          <Typography variant="h3" fontSize="">Fat in subcutis</Typography>
          <Typography variant="h5">The subcutis consists of fat cells, arranged in a network of connective tissue. Blood vessels, nerves and lymphatics can be found in this network. The fat tissue functions as a resource of energy and has an isolating and protective function.</Typography>
        </Fragment>
      ) : snap.current === "Epischdermis" ? (
        <Fragment style={{marginTop: 20}}>
          <Typography variant="h3" fontSize="">Keratinocyte</Typography>
          <Typography variant="h5">Keratinocytes are the main components of the epidermis. From the basal layer (stratum basale), there is a continuous formation of new cells, that scale off from the stratum corneum.</Typography>
        </Fragment>
      ) : snap.current === "Skin_ZSphere29_11" ? (
        <Fragment style={{marginTop: 20}}>
          <Typography variant="h3" fontSize="">Eccrine sweat gland</Typography>
          <Typography variant="h5">These glands are present all over the body and play a role in amongst others the maintenance of elektrolyte balance and thermo regulation.

</Typography>
        </Fragment>
      ) : null}
    </div>
  );
}

export default function SkinWindow() {
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
              <Skin />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
      </Grid>
      <Grid container>
        <Picker />
      </Grid>
    </Fragment>
  );
}

{
  /* <>
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
      <PerspectiveCamera makeDefault position={[0, 0.5, 0.5]} />
      <OrbitControls />
      </Canvas>
      </div>
  </Col>
</Row>
</> */
}
