import React from 'react'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
// import { Model_1 } from '../public/Base-plate-1'
import './App.css'
const Model=()=> {
  const { nodes, materials } = useGLTF('/bc-ep.glb')
  const mesh =useRef(null)
  useFrame(()=>(mesh.current.rotation.y=mesh.current.rotation.y+=0.01))
  return (
    <group dispose={null} scale={0.3}>
      <mesh ref={mesh} geometry={nodes.imagetostl_mesh0.geometry} material={materials.mat0} material-color={'#2a78de'} position={[0,-1,0]} />
    </group>
  )
}

const Model_1=()=> {
  const { nodes, materials } = useGLTF('/base-plate-1.glb')
  const mesh =useRef(null)
  useFrame(()=>(mesh.current.rotation.y=mesh.current.rotation.y+=0.01))
  return (
    <group dispose={null} scale={0.3} >
      <mesh ref={mesh} geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} material-color={'black'} position={[0,-5,5]} />
    </group>
  )
}



function Base_Plate() {
  
  const { nodes, materials } = useGLTF('/base-plate-2.glb')
  const mesh =useRef(null)
  useFrame(()=>(mesh.current.rotation.y=mesh.current.rotation.y+=0.01))
  return (
    <group  scale={0.3} dispose={null}>
      <mesh ref={mesh} geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} material-color={'#990000'}/>
    </group>
  )
}

function BB_Splice_Bolted() {
  const { nodes, materials } = useGLTF('/bb-splice-bolted.glb')
  const mesh =useRef(null)
  useFrame(()=>(mesh.current.rotation.y=mesh.current.rotation.y+=0.01))
  return (
    <group scale={0.5} dispose={null}>
      <mesh ref={mesh} geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} material-color={'#03f0fc'}/>
    </group>
  )
}

function Fin_Plate() {
  const { nodes, materials } = useGLTF('/fin-plate.glb')
  const mesh =useRef(null)
  useFrame(()=>(mesh.current.rotation.y=mesh.current.rotation.y+=0.01))
  return (
    <group ref={mesh} scale={0.4} dispose={null}>
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} material-color={'#a10229'}/>
    </group>
  )
}

const App = () => {

  return (
    <div>
      <div className='wrapper'>
        
        <Canvas camera={{ fov: 90, position: [0, 0, 850] }}>
            <Suspense fallback={null}>
              <ambientLight />
              <directionalLight intensity={1} position={[0,0,100]}/>
              <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
              <Fin_Plate/>
            </Suspense>
          </Canvas>
        </div>
      <div className='wrapper'>
        
      <Canvas camera={{ fov: 90, position: [0, 0, 850] }}>
          <Suspense fallback={null}>
            <ambientLight />
            <directionalLight intensity={1} position={[0,0,100]}/>
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            <Model_1 />
           
          </Suspense>
        </Canvas>
      </div>
      <div className='wrapper'>
        <Canvas camera={{ fov: 100, position: [0, 0, 800] }}>
          <Suspense fallback={null}>
            <ambientLight />
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            <Model /> 
          </Suspense>
        </Canvas>
        
      </div>
      <div className='wrapper'>
        <Canvas camera={{ fov: 100, position: [0, 0, 800] }}>
          <Suspense fallback={null}>
            <ambientLight />
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            <Base_Plate/>
          </Suspense>
        </Canvas>
        
      </div>
      <div className='wrapper'>
        <Canvas camera={{ fov: 100, position: [0, 0, 800] }}>
          <Suspense fallback={null}>
            <ambientLight />
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            <BB_Splice_Bolted/>
          </Suspense>
        </Canvas>
        
      </div>
    </div>
  )
}

export default App
