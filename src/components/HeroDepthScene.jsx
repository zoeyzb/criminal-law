import {Canvas,useFrame} from '@react-three/fiber';
import {Suspense,useRef} from 'react';

function Gavel(){
  const group=useRef(null);

  useFrame(({pointer},delta)=>{
    if(!group.current)return;
    const k=Math.min(delta*2,1);
    group.current.rotation.y+=(pointer.x*.045-group.current.rotation.y)*k;
    group.current.rotation.x+=(-pointer.y*.018-group.current.rotation.x)*k;
  });

  return <group ref={group} rotation={[.16,-.20,-.27]} position={[1.58,-1.08,.05]}>
    <mesh rotation={[0,0,Math.PI/2]} position={[.08,0,0]}>
      <cylinderGeometry args={[.19,.26,2.78,64]}/>
      <meshPhysicalMaterial color="#3b1d10" roughness={.28} metalness={.03} clearcoat={.62} clearcoatRoughness={.22}/>
    </mesh>

    <mesh rotation={[0,0,Math.PI/2]} position={[-1.33,0,0]}>
      <cylinderGeometry args={[.51,.57,.98,64]}/>
      <meshPhysicalMaterial color="#2d130b" roughness={.22} metalness={.03} clearcoat={.72} clearcoatRoughness={.18}/>
    </mesh>

    <mesh rotation={[0,0,Math.PI/2]} position={[-1.80,0,0]}>
      <cylinderGeometry args={[.61,.61,.10,64]}/>
      <meshStandardMaterial color="#1f0e08" roughness={.2} metalness={.06}/>
    </mesh>
    <mesh rotation={[0,0,Math.PI/2]} position={[-.86,0,0]}>
      <cylinderGeometry args={[.61,.61,.10,64]}/>
      <meshStandardMaterial color="#1f0e08" roughness={.2} metalness={.06}/>
    </mesh>

    <mesh position={[-1.33,-.67,-.18]}>
      <cylinderGeometry args={[.82,.91,.16,64]}/>
      <meshPhysicalMaterial color="#11100e" roughness={.18} metalness={.42} clearcoat={.3}/>
    </mesh>
  </group>;
}

function Scene(){
  return <>
    <ambientLight intensity={.34}/>
    <directionalLight position={[4.8,5.8,5]} intensity={2.25} color="#f0d0a2"/>
    <spotLight position={[2.2,4.2,4.6]} angle={.42} penumbra={.72} intensity={4.6} color="#d49a59"/>
    <pointLight position={[.8,-.8,3]} intensity={5.2} distance={7} color="#b56f31"/>
    <Gavel/>
  </>;
}

export default function HeroDepthScene({paused=false}){
  return <div className="hero-depth-scene" aria-hidden="true">
    <Suspense fallback={null}>
      <Canvas
        frameloop={paused?'never':'always'}
        dpr={[1,1.25]}
        camera={{position:[0,0,5.8],fov:41}}
        gl={{alpha:true,antialias:true,powerPreference:'high-performance'}}
      >
        <Scene/>
      </Canvas>
    </Suspense>
  </div>;
}
