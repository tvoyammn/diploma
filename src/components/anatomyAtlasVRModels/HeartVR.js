import React, { Component, Suspense, useState } from 'react'
import { VRCanvas, DefaultXRControllers, Select, Hover, useXR } from 'react-xr'
import { Sky, useGLTF, Box, Html } from '@react-three/drei'
import '@react-three/fiber'
import { Canvas } from 'react-three-fiber'
import { Container, Card } from 'react-bootstrap'
import { Interactive } from '@react-three/xr'

export default function HeartVR(props) {
      
    const { nodes, materials } = useGLTF('/heartCompressed.glb')

    const { controllers } = useXR()

    const [veinsHovered, setVeinsHover] = useState(false)
    const [veinsSelected, setVeinsSelection] = useState(false)

    const [baseOfHeartHovered, setBaseOfHeartHover] = useState(false)
    const [baseOfHeartSelected, setBaseOfHeartSelection] = useState(false)

    const [valvesHovered, setValvesHover] = useState(false)
    const [valvesSelected, setValvesSelection] = useState(false)

    const [aortaHovered, setAortaHover] = useState(false)
    const [aortaSelected, setAortaSelection] = useState(false)

    const [atrioventricularValvesHovered, setAtrioventricularValvesHover] = useState(false)
    const [atrioventricularValvesSelected, setAtrioventricularValvesSelection] = useState(false)

    const [ligamentHovered, setLigamentHover] = useState(false)
    const [ligamentSelected, setLigamentSelection] = useState(false)

    const [pulmonaryTrunkHovered, setPulmonaryTrunkHover] = useState(false)
    const [pulmonaryTrunkSelected, setPulmonaryTrunkSelection] = useState(false)

    const [heartearHovered, setHeartearHover] = useState(false)
    const [heartearSelected, setHeartearSelection] = useState(false)

    const [arteriesHovered, setArteriesHover] = useState(false)
    const [arteriesSelected, setArteriesSelection] = useState(false)
    

    return (
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={[0.001, 0.001, 0.001]}  position={[1, 1, 1.5]}>
          <Hover onChange={(value) => { DisplayText(value); setVeinsHover(value); setVeinsSelection(false)}}>
                <Select onSelect={() => { console.log('Veins has been selected');  setVeinsSelection(!veinsSelected)}}>
                    <mesh geometry={nodes.Veins_Veins_0.geometry} material={materials.Veins}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: veinsHovered ? "block" : "none" }}>
                      <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Veins </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: veinsSelected ? "block" : "none", opacity: '0.8' }}>
                            Veins information
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <Hover onChange={(value) => { setBaseOfHeartHover(value); setBaseOfHeartSelection(false)}}>
                <Select onSelect={() => { setBaseOfHeartSelection(!baseOfHeartSelected)}}>
                    <mesh geometry={nodes.Hart_basis_Hart_basis_0.geometry} material={materials.Hart_basis}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: baseOfHeartHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Base of heart </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: baseOfHeartSelected ? "block" : "none", opacity: '0.8' }}>
                          Base of heart information
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <Hover onChange={(value) => { setValvesHover(value); setValvesSelection(false)}}>
                <Select onSelect={(e) => { setValvesSelection(!valvesSelected)}}>
                    <mesh geometry={nodes.Valves_Valves_0.geometry} material={materials.Valves}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: valvesHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Valves </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: valvesSelected ? "block" : "none", opacity: '0.8' }}>
                          Valves information
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <Hover onChange={(value) => { setAortaHover(value); setAortaSelection(false)}}>
                <Select onSelect={() => { setAortaSelection(!aortaSelected)}}>
            <mesh geometry={nodes.Aorta_Aorta_0.geometry} material={materials.Aorta}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: aortaHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Aorta </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: aortaSelected ? "block" : "none", opacity: '0.8' }}>
                          Aorta information
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <Hover onChange={(value) => { setAtrioventricularValvesHover(value); setAtrioventricularValvesSelection(false)}}>
                <Select onSelect={() => { setAtrioventricularValvesSelection(!atrioventricularValvesSelected)}}>
            <mesh geometry={nodes.Avvalves_Avvalves_0.geometry} material={materials.Avvalves}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: atrioventricularValvesHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Atrioventricular valves </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: atrioventricularValvesSelected ? "block" : "none", opacity: '0.8' }}>
                          Atrioventricular valves information
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <Hover onChange={(value) => { setLigamentHover(value); setLigamentSelection(false)}}>
                <Select onSelect={() => { setLigamentSelection(!ligamentSelected)}}>
            <mesh geometry={nodes.Ligament_Ligament_0.geometry} material={materials.Ligament}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: ligamentHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Ligament </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: ligamentSelected ? "block" : "none", opacity: '0.8' }}>
                            Ligament information
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <Hover onChange={(value) => { setPulmonaryTrunkHover(value); setPulmonaryTrunkSelection(false)}}>
                <Select onSelect={() => { setPulmonaryTrunkSelection(!pulmonaryTrunkSelected)}}>
            <mesh geometry={nodes.Pulmonary_trunk_Pulmonary_trunk_0.geometry} material={materials.Pulmonary_trunk}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: pulmonaryTrunkHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Pulmonary trunk </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: pulmonaryTrunkSelected ? "block" : "none", opacity: '0.8' }}>
                          Pulmonary trunk information
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <Hover onChange={(value) => { setHeartearHover(value); setHeartearSelection(false)}}>
                <Select onSelect={() => { setHeartearSelection(!heartearSelected)}}>
            <mesh geometry={nodes.Heartear_Heartear_0.geometry} material={materials.Heartear}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: heartearHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Heartear </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: heartearSelected ? "block" : "none", opacity: '0.8' }}>
                            Heartear information
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <Hover onChange={(value) => { setArteriesHover(value); setArteriesSelection(false)}}>
                <Select onSelect={() => { setArteriesSelection(!arteriesSelected)}}>
            <mesh geometry={nodes.Arteries2_Arteries2_0.geometry} material={materials.Arteries2}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: arteriesHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Arteries </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: arteriesSelected ? "block" : "none", opacity: '0.8' }}>
                            Arteries information
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