import {Canvas,useFrame} from '@react-three/fiber';
import {Suspense,useRef} from 'react';

function Gavel(){
  const group=useRef(null);
  useFrame(({pointer},delta)=>{
    if(!group.current)return;
    const k=Math.min(delta*2.4,1);
    group.current.rotation.y+=(pointer.x*.08-group.current.rotation.y)*k;
    group.current.rotation.x+=(-pointer.y*.035-group.current.rotation.x)*k;
  });

  return <group ref={group} rotation={[.18,-.28,-.22]} position={[1.65,-1.05,0]}>
    <mesh rotation={[0,0,Math.PI/2]} position={[0,0,0]}>
      <cylinderGeometry args={[.22,.26,2.55,36]}/>
      <meshStandardMaterial color="#4a2614" roughness={.24} metalness={.08}/>
    </mesh>
    <mesh rotation={[0,0,Math.PI/2]} position={[-1.28,0,0]}>
      <cylinderGeometry args={[.54,.54,.84,48]}/>
      <meshStandardMaterial color="#35170d" roughness={.18} metalness={.12}/>
    </mesh>
    <mesh rotation={[0,0,Math.PI/2]} position={[-1.7,0,0]}>
      <cylinderGeometry args={[.64,.64,.20,48]}/>
      <meshStandardMaterial color="#bb8750" roughness={.16} metalness={.74}/>
    </mesh>
    <mesh rotation={[0,0,Math.PI/2]} position={[-.86,0,0]}>
      <cylinderGeometry args={[.64,.64,.20,48]}/>
      <meshStandardMaterial color="#bb8750" roughness={.16} metalness={.74}/>
    </mesh>
    <mesh position={[-1.28,-.63,-.18]}>
      <cylinderGeometry args={[.84,.92,.18,48]}/>
      <meshStandardMaterial color="#111113" roughness={.2} metalness={.72}/>
    </mesh>
  </group>;
}

function Scene(){
  return <>
    <ambientLight intensity={.4}/>
    <directionalLight position={[4,5,5]} intensity={2.1} color="#f4d3a0"/>
    <pointLight position={[1,-1,3]} intensity={10} distance={7} color="#d69a56"/>
    <Gavel/>
  </>;
}

export default function HeroDepthScene({paused=false}){
  return <div className="hero-depth-scene" aria-hidden="true">
    <Suspense fallback={null}>
      <Canvas
        frameloop={paused?'never':'always'}
        dpr={[1,1.35]}
        camera={{position:[0,0,5.7],fov:42}}
        gl={{alpha:true,antialias:true,powerPreference:'high-performance'}}
      >
        <Scene/>
      </Canvas>
    </Suspense>
  </div>;
}
