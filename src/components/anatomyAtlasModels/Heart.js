import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Heart(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/heartCompressed.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-5.26, 2.68, -4.03]} rotation={[-1.31, -0.32, 2.45]} scale={[1, 1, 1]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
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
    </group>
  )
}