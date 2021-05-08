import React, { Component, Suspense, useState } from 'react'
import { VRCanvas, DefaultXRControllers, Select, Hover, useXR } from 'react-xr'
import { Sky, useGLTF, Box, Html } from '@react-three/drei'
import '@react-three/fiber'
import { Canvas } from 'react-three-fiber'
import { Container, Card } from 'react-bootstrap'
import { Interactive } from '@react-three/xr'

export default function AirwaysVR(props) {
      
    const { nodes, materials } = useGLTF('/airwaysCompressed.glb')

    const { controllers } = useXR()

    const [smoothMuscleFibersHovered, setSmoothMuscleFibersHover] = useState(false)
    const [smoothMuscleFibersSelected, setSmoothMuscleFibersSelection] = useState(false)

    const [bronchiHovered, setBronchiHover] = useState(false)
    const [bronchiSelected, setBronchiSelection] = useState(false)

    const [linkerLongHovered, setLinkerLongHover] = useState(false)
    const [linkerLongSelected, setLinkerLongSelection] = useState(false)

    const [cartilaginesTrachealisHovered, setCartilaginesTrachealisHover] = useState(false)
    const [cartilaginesTrachealisSelected, setCartilaginesTrachealisSelection] = useState(false)

    const [atrioventricularValvesHovered, setAtrioventricularValvesHover] = useState(false)
    const [atrioventricularValvesSelected, setAtrioventricularValvesSelection] = useState(false)

    const [cartilagoThyroideaHovered, setCartilagoThyroideaHover] = useState(false)
    const [cartilagoThyroideaSelected, setCartilagoThyroideaSelection] = useState(false)

    const [cricoideaHovered, setCricoideaHover] = useState(false)
    const [cricoideaSelected, setCricoideaSelection] = useState(false)

    const [alveoliHovered, setAlveoliHover] = useState(false)
    const [alveoliSelected, setAlveoliSelection] = useState(false)
    

    return (
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group scale={[0.001, 0.001, 0.001]}  position={[-1, 1, 1.5]}>
          <Hover onChange={(value) => { DisplayText(value); setSmoothMuscleFibersHover(value); setSmoothMuscleFibersSelection(false)}}>
                <Select onSelect={() => { console.log('Smooth muscle fibers has been selected');  setSmoothMuscleFibersSelection(!smoothMuscleFibersSelected)}}>
                    <mesh geometry={nodes.bronchi1_1_bronchi1_1_0.geometry} material={materials.bronchi1_1}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: smoothMuscleFibersHovered ? "block" : "none" }}>
                      <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Smooth muscle fibers </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: smoothMuscleFibersSelected ? "block" : "none", opacity: '0.8' }}>
                            Smooth muscle fibers information
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <Hover onChange={(value) => { setBronchiHover(value); setBronchiSelection(false)}}>
                <Select onSelect={() => { setBronchiSelection(!bronchiSelected)}}>
                    <mesh geometry={nodes.bronchi1_bronchi1_0.geometry} material={materials.bronchi1}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: bronchiHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Bronchi </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: bronchiSelected ? "block" : "none", opacity: '0.8' }}>
                            Bronchi information
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <Hover onChange={(value) => { setLinkerLongHover(value); setLinkerLongSelection(false)}}>
                <Select onSelect={(e) => { setLinkerLongSelection(!linkerLongSelected)}}>
                    <mesh geometry={nodes.Linkerlong_Linkerlong_0.geometry} material={materials.Linkerlong}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: linkerLongHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Linker long </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: linkerLongSelected ? "block" : "none", opacity: '0.8' }}>
                            Linker long information
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <Hover onChange={(value) => { setCartilaginesTrachealisHover(value); setCartilaginesTrachealisSelection(false)}}>
                <Select onSelect={() => { setCartilaginesTrachealisSelection(!cartilaginesTrachealisSelected)}}>
            <mesh geometry={nodes.Trachea_kraakbeen_Trachea_kraakbeen_0.geometry} material={materials.Trachea_kraakbeen}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: cartilaginesTrachealisHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Cartilagines trachealis </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: cartilaginesTrachealisSelected ? "block" : "none", opacity: '0.8' }}>
                            Cartilagines trachealis information
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <Hover onChange={(value) => { setAtrioventricularValvesHover(value); setAtrioventricularValvesSelection(false)}}>
                <Select onSelect={() => { setAtrioventricularValvesSelection(!atrioventricularValvesSelected)}}>
            <mesh geometry={nodes.Tussen_hyoid_en_thyroid_Tussen_hyoid_en_thyroid_0.geometry} material={materials.Tussen_hyoid_en_thyroid}>
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
            <Hover onChange={(value) => { setCartilagoThyroideaHover(value); setCartilagoThyroideaSelection(false)}}>
                <Select onSelect={() => { setCartilagoThyroideaSelection(!cartilagoThyroideaSelected)}}>
            <mesh geometry={nodes.Hyoid_bone_Hyoid_bone_0.geometry} material={materials.Hyoid_bone}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: cartilagoThyroideaHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Cartilago thyroidea </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: cartilagoThyroideaSelected ? "block" : "none", opacity: '0.8' }}>
                            Cartilago thyroidea information
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <Hover onChange={(value) => { setCricoideaHover(value); setCricoideaSelection(false)}}>
                <Select onSelect={() => { setCricoideaSelection(!cricoideaSelected)}}>
            <mesh geometry={nodes.Thyroid_gland_Thyroid_gland_0.geometry} material={materials.Thyroid_gland}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: cricoideaHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Cricoidea </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: cricoideaSelected ? "block" : "none", opacity: '0.8' }}>
                          Cricoidea information
                          </Card.Text>
                    </Html>
                    </mesh>
                </Select>
            </Hover>
            <Hover onChange={(value) => { setAlveoliHover(value); setAlveoliSelection(false)}}>
                <Select onSelect={() => { setAlveoliSelection(!alveoliSelected)}}>
            <mesh geometry={nodes.PM3D_Sphere3D2_PM3D_Sphere3D2_0.geometry} material={materials.PM3D_Sphere3D2}>
                    <Html scaleFactor={10} style={{ pointerEvents: "none", display: alveoliHovered ? "block" : "none", backgroundColor: "white" }}>
                    <Card
                        bg='info'
                        style={{ width: '14rem' }}
                      >
                        <Card.Header> Alveoli </Card.Header>
                      </Card>
                          <Card.Text className='bg-info' style={{ pointerEvents: "none", display: alveoliSelected ? "block" : "none", opacity: '0.8' }}>
                            Alveoli information
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