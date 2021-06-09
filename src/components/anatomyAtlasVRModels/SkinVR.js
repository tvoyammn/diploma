import React, { Component, Suspense, useState } from 'react'
import { VRCanvas, DefaultXRControllers, Select, Hover, useXR } from 'react-xr'
import { Sky, useGLTF, Box, Html } from '@react-three/drei'
import '@react-three/fiber'
import { Canvas } from 'react-three-fiber'
import { Container, Card } from 'react-bootstrap'
import { Interactive } from '@react-three/xr'

export default function SkinVR(props) {
      
    const { nodes, materials } = useGLTF('/skinCompressed.glb')

    const { controllers } = useXR()

    const [hairHovered, setHairHover] = useState(false)
    const [hairSelected, setHairSelection] = useState(false)

    const [sebaceousGlandHovered, setSebaceousGlandHover] = useState(false)
    const [sebaceousGlandSelected, setSebaceousGlandSelection] = useState(false)

    const [apocrineSweatGlandHovered, setApocrineSweatGlandHover] = useState(false)
    const [apocrineSweatGlandSelected, setApocrineSweatGlandSelection] = useState(false)

    const [dermalMatrixHovered, setDermalMatrixHover] = useState(false)
    const [dermalMatrixSelected, setDermalMatrixSelection] = useState(false)

    const [stratumBasaleHovered, setStratumBasaleHover] = useState(false)
    const [stratumBasaleSelected, setStratumBasaleSelection] = useState(false)

    const [basementMembraneOfEpidermisHovered, setBasementMembraneOfEpidermisHover] = useState(false)
    const [basementMembraneOfEpidermisSelected, setBasementMembraneOfEpidermisSelection] = useState(false)

    const [musculusArrectorPiliHovered, setMusculusArrectorPiliHover] = useState(false)
    const [musculusArrectorPiliSelected, setMusculusArrectorPiliSelection] = useState(false)

    const [stratumCorneumHovered, setStratumCorneumHover] = useState(false)
    const [stratumCorneumSelected, setStratumCorneumSelection] = useState(false)

    const [dermalVesselHovered, setDermalVesselHover] = useState(false)
    const [dermalVesselSelected, setDermalVesselSelection] = useState(false)

    const [nerveHovered, setNerveHover] = useState(false)
    const [nerveSelected, setNerveSelection] = useState(false)

    const [fatInSubcutisHovered, setFatInSubcutHover] = useState(false)
    const [fatInSubcutSelected, setFatInSubcutSelection] = useState(false)

    const [keratinocyteHovered, setKeratinocyteHover] = useState(false)
    const [keratinocyteSelected, setKeratinocyteSelection] = useState(false)

    const [eccrineSweatGlandHovered, setEccrineSweatGlandHover] = useState(false)
    const [eccrineSweatGlandSelected, setEccrineSweatGlandSelection] = useState(false)
    

    return (
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}  position={[0, 1, 1.5]}>
          <Hover onChange={(value) => { DisplayText(value); setHairHover(value); setHairSelection(false)}}>
                <Select onSelect={() => { console.log('Hair has been selected');  setHairSelection(!hairSelected)}}>
                    <mesh geometry={nodes.Skin_ZSphere_4_Skin_ZSphere_4_0.geometry} material={materials.Skin_ZSphere_4}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: hairHovered ? "block" : "none" }}>
                      <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Hair </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: hairSelected ? "block" : "none", opacity: '0.8' }}>
                          Hairs are thin, keratinised skin annexes that are formed in the hair follicle. They consist of three layers: marrow, cortex and cuticle. the amount of melanin in the marrow determines the colour of the hair. Marrow can only be found in terminal hair (scalp, eye brows, armpits, genitalia) and is absent in the vellus hair.
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <Hover onChange={(value) => { setSebaceousGlandHover(value); setSebaceousGlandSelection(false)}}>
                <Select onSelect={() => { setSebaceousGlandSelection(!sebaceousGlandSelected)}}>
                    <mesh geometry={nodes.Extract1_Extract1_0.geometry} material={materials.Extract1}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: sebaceousGlandHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Sebaceous Gland </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: sebaceousGlandSelected ? "block" : "none", opacity: '0.8' }}>
                          Sebaceous Gland information
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <Hover onChange={(value) => { setApocrineSweatGlandHover(value); setApocrineSweatGlandSelection(false)}}>
                <Select onSelect={(e) => { setApocrineSweatGlandSelection(!apocrineSweatGlandSelected)}}>
                    <mesh geometry={nodes.Extract3_1_Extract3_1_0.geometry} material={materials.Extract3_1}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: apocrineSweatGlandHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Apocrine Sweat Gland </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: apocrineSweatGlandSelected ? "block" : "none", opacity: '0.8' }}>
                          Apocrine Sweat Gland information
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <Hover onChange={(value) => { setApocrineSweatGlandHover(value); setApocrineSweatGlandSelection(false)}}>
                <Select onSelect={() => { setApocrineSweatGlandSelection(!apocrineSweatGlandSelected)}}>
            <mesh geometry={nodes.Extract8_Extract8_0.geometry} material={materials.Extract8}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: apocrineSweatGlandHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Apocrine Sweat Gland </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: apocrineSweatGlandSelected ? "block" : "none", opacity: '0.8' }}>
                          Apocrine Sweat Gland information
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <Hover onChange={(value) => { setDermalMatrixHover(value); setDermalMatrixSelection(false)}}>
                <Select onSelect={() => { setDermalMatrixSelection(!dermalMatrixSelected)}}>
            <mesh geometry={nodes.PM3D_Cube3D5_945_PM3D_Cube3D5_945_0.geometry} material={materials.PM3D_Cube3D5_945}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: dermalMatrixHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Dermal Matrix </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: dermalMatrixSelected ? "block" : "none", opacity: '0.8' }}>
                          Dermal Matrix information
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <Hover onChange={(value) => { setStratumBasaleHover(value); setStratumBasaleSelection(false)}}>
                <Select onSelect={() => { setStratumBasaleSelection(!stratumBasaleSelected)}}>
            <mesh geometry={nodes.PM3D_Cube3D5_953_PM3D_Cube3D5_953_0.geometry} material={materials.PM3D_Cube3D5_953}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: stratumBasaleHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Strarum Basale </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: stratumBasaleSelected ? "block" : "none", opacity: '0.8' }}>
                          Stratum Basale
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <Hover onChange={(value) => { setBasementMembraneOfEpidermisHover(value); setBasementMembraneOfEpidermisSelection(false)}}>
                <Select onSelect={() => { setBasementMembraneOfEpidermisSelection(!basementMembraneOfEpidermisSelected)}}>
            <mesh geometry={nodes.Extract6_Extract6_0.geometry} material={materials.Extract6}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: basementMembraneOfEpidermisHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Basement Membrane of Epidermis </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: basementMembraneOfEpidermisSelected ? "block" : "none", opacity: '0.8' }}>
                          Basement Membrane of Epidermis information
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <Hover onChange={(value) => { setMusculusArrectorPiliHover(value); setMusculusArrectorPiliSelection(false)}}>
                <Select onSelect={() => { setMusculusArrectorPiliSelection(!musculusArrectorPiliSelected)}}>
            <mesh geometry={nodes.PM3D_Sphere3D2_2_PM3D_Sphere3D2_2_0.geometry} material={materials.PM3D_Sphere3D2_2}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: musculusArrectorPiliHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Musculus Arrector Pili </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: musculusArrectorPiliSelected ? "block" : "none", opacity: '0.8' }}>
                          Musculus Arrector Pili information
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <Hover onChange={(value) => { setStratumCorneumHover(value); setStratumCorneumSelection(false)}}>
                <Select onSelect={() => { setStratumCorneumSelection(!stratumCorneumSelected)}}>
            <mesh geometry={nodes.Big_Big_0.geometry} material={materials.material}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: stratumCorneumHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Stratum Corneum </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: stratumCorneumSelected ? "block" : "none", opacity: '0.8' }}>
                          Stratum Corneum information
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <Hover onChange={(value) => { setBasementMembraneOfEpidermisHover(value); setBasementMembraneOfEpidermisSelection(false)}}>
                <Select onSelect={() => { setBasementMembraneOfEpidermisSelection(!basementMembraneOfEpidermisSelected)}}>
            <mesh geometry={nodes.PM3D_Cube3D2_PM3D_Cube3D2_0.geometry} material={materials.PM3D_Cube3D2}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: basementMembraneOfEpidermisHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Basement Membrane of Epidermis </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: basementMembraneOfEpidermisSelected ? "block" : "none", opacity: '0.8' }}>
                          Basement Membrane of Epidermis selected
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <Hover onChange={(value) => { setDermalVesselHover(value); setDermalVesselSelection(false)}}>
                <Select onSelect={() => { setDermalVesselSelection(!dermalVesselSelected)}}>
            <mesh geometry={nodes.Skin_ZSphere6_Skin_ZSphere6_0.geometry} material={materials.Skin_ZSphere6}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: dermalVesselHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Dermal Vessel </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: dermalVesselSelected ? "block" : "none", opacity: '0.8' }}>
                          Dermal Vessel information
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <Hover onChange={(value) => { setNerveHover(value); setNerveSelection(false)}}>
                <Select onSelect={() => { setNerveSelection(!nerveSelected)}}>
            <mesh geometry={nodes.Skin_ZSphere7_Skin_ZSphere7_0.geometry} material={materials.Skin_ZSphere7}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: nerveHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Nerve </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: nerveSelected ? "block" : "none", opacity: '0.8' }}>
                          Nerve information
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <Hover onChange={(value) => { setFatInSubcutHover(value); setFatInSubcutSelection(false) }}>
                <Select onSelect={() => { setFatInSubcutSelection(!fatInSubcutSelected)}}>
            <mesh geometry={nodes.PM3D_Sphere3D2_343_PM3D_Sphere3D2_343_0.geometry} material={materials.PM3D_Sphere3D2_343}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: fatInSubcutisHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Fat in Subcut </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: fatInSubcutSelected ? "block" : "none", opacity: '0.8' }}>
                          Fat in Subcut information
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <mesh geometry={nodes.Epidermis_Epidermis_0.geometry} material={materials.Epidermis} />     {/* TABLE WITH NAMES */}
            <Hover onChange={(value) => { setKeratinocyteHover(value); setKeratinocyteSelection(false)}}>
                <Select onSelect={() => { setKeratinocyteSelection(!keratinocyteSelected)}}>
            <mesh geometry={nodes.Epischdermis_Epischdermis_0.geometry} material={materials.Epischdermis}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: keratinocyteHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Keratinocyte </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: keratinocyteSelected ? "block" : "none", opacity: '0.8' }}>
                          Keratinocyte information
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <Hover onChange={(value) => { setEccrineSweatGlandHover(value); setEccrineSweatGlandSelection(false)}}>
                <Select onSelect={() => { setEccrineSweatGlandSelection(!eccrineSweatGlandSelected)}}>
            <mesh geometry={nodes.Skin_ZSphere29_11_Skin_ZSphere29_11_0.geometry} material={materials.Skin_ZSphere29_11}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: eccrineSweatGlandHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Eccrine Sweat Gland </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: eccrineSweatGlandSelected ? "block" : "none", opacity: '0.8' }}>
                          Eccrine Sweat Gland information
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
          </group>
        </group>
    )
  }

function DisplayText(value) {
    console.log('im here')
}