import React,{Component,useRef} from 'react';
import {Canvas,useFrame} from '@react-three/fiber';

class SceneBoundary extends Component{
  state={failed:false};
  static getDerivedStateFromError(){return{failed:true};}
  render(){return this.state.failed?null:this.props.children;}
}

function ArchitecturalPassage({progress}){
  const group=useRef(null);
  const glow=useRef(null);
  useFrame(({pointer,clock},delta)=>{
    if(!group.current)return;
    const ease=Math.min(delta*2,1);
    const targetY=pointer.x*.035;
    const targetX=-pointer.y*.018;
    group.current.rotation.y+=(targetY-group.current.rotation.y)*ease;
    group.current.rotation.x+=(targetX-group.current.rotation.x)*ease;
    group.current.position.z=(progress?.current||0)*.7;
    if(glow.current)glow.current.intensity=2.2+Math.sin(clock.elapsedTime*.45)*.16;
  });

  return <group ref={group} position={[2.35,-.05,-.3]}>
    {[0,1,2,3].map(index=>{
      const z=-index*1.28;
      const scale=1-index*.035;
      return <group key={index} position={[0,0,z]} scale={[scale,scale,1]}>
        <mesh position={[-1.74,0,0]}>
          <boxGeometry args={[.14,6.8,.22]}/>
          <meshStandardMaterial color={index===0?'#665b50':'#30383f'} metalness={.62} roughness={.42}/>
        </mesh>
        <mesh position={[1.74,0,0]}>
          <boxGeometry args={[.14,6.8,.22]}/>
          <meshStandardMaterial color={index===0?'#3f464b':'#242b31'} metalness={.68} roughness={.38}/>
        </mesh>
        <mesh position={[0,3.32,0]}>
          <boxGeometry args={[3.62,.14,.22]}/>
          <meshStandardMaterial color="#454b50" metalness={.7} roughness={.4}/>
        </mesh>
      </group>;
    })}
    <mesh position={[0,-2.58,-2.2]} rotation={[-Math.PI/2,0,0]}>
      <planeGeometry args={[4.8,8]}/>
      <meshStandardMaterial color="#171b1f" metalness={.52} roughness={.34} transparent opacity={.55}/>
    </mesh>
    <pointLight ref={glow} position={[.15,.4,-3.2]} color="#c89d6e" intensity={2.2} distance={8}/>
    <pointLight position={[-2.5,2,2]} color="#8ea0b2" intensity={.7} distance={7}/>
  </group>;
}

export default function DepthScene({visible,progress}){
  return <SceneBoundary>
    <Canvas dpr={[1,1.35]} frameloop={visible?'always':'never'} camera={{position:[0,0,8],fov:43}} gl={{alpha:true,antialias:false,powerPreference:'high-performance'}}>
      <ambientLight intensity={.22}/>
      <directionalLight position={[-3,5,5]} intensity={1.15} color="#d7d1c8"/>
      <ArchitecturalPassage progress={progress}/>
    </Canvas>
  </SceneBoundary>;
}
