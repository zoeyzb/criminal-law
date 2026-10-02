import React,{Component,useRef} from 'react';
import {Canvas,useFrame} from '@react-three/fiber';

class SceneBoundary extends Component {
  state = {failed:false};
  static getDerivedStateFromError(){return {failed:true};}
  render(){return this.state.failed?null:this.props.children;}
}
function Passage({progress}) {
  const group=useRef(null);
  useFrame(({pointer},delta) => {
    if(!group.current)return;
    const amount=Math.min(delta*1.6,1);
    group.current.rotation.y+=(pointer.x*.025-group.current.rotation.y)*amount;
    group.current.position.z=(progress?.current||0)*.35;
  });
  return <group ref={group} position={[2.2,0,0]}>
    {[0,1,2].map(index => <group key={index} position={[0,0,-index*1.5]}>
      <mesh position={[-1.5,0,0]}><boxGeometry args={[.12,6,.18]}/><meshStandardMaterial color="#727b83" metalness={.75} roughness={.6}/></mesh>
      <mesh position={[1.5,0,0]}><boxGeometry args={[.12,6,.18]}/><meshStandardMaterial color="#46515a" metalness={.75} roughness={.6}/></mesh>
      <mesh position={[0,3,0]}><boxGeometry args={[3.12,.12,.18]}/><meshStandardMaterial color="#626b73" metalness={.75} roughness={.6}/></mesh>
    </group>)}
  </group>;
}
export default function DepthScene({visible,progress}) {
  return <SceneBoundary><Canvas dpr={[1,1.25]} frameloop={visible?'always':'never'} camera={{position:[0,0,8],fov:44}} gl={{alpha:true,antialias:false}}><ambientLight intensity={.3}/><directionalLight position={[-2,4,6]} intensity={1.5}/><Passage progress={progress}/></Canvas></SceneBoundary>;
}
