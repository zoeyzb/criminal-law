import React, {Component, useMemo,useRef} from 'react';
import {Canvas,useFrame} from '@react-three/fiber';
import {Float} from '@react-three/drei';
import {Shape} from 'three';
class Boundary extends Component{state={failed:false};static getDerivedStateFromError(){return{failed:true}}render(){return this.state.failed?this.props.fallback:this.props.children}}
function Building({light=false,progress}){
 const root=useRef(),roof=useRef(),columns=useRef();
 const shape=useMemo(()=>{const s=new Shape();s.moveTo(-2.4,0);s.lineTo(0,1.1);s.lineTo(2.4,0);s.closePath();return s},[]);
 useFrame(({pointer},delta)=>{root.current.rotation.y+=(pointer.x*.16+.18-root.current.rotation.y)*Math.min(delta*2,1);const p=progress?.current||0;roof.current.position.y=1.2+p*1.7;columns.current.position.y=p*.45;});
 const color=light?'#aba79f':'#34383e';
 const mat=<meshStandardMaterial color={color} metalness={.65} roughness={.32}/>;
 return <Float speed={.45} floatIntensity={.08} rotationIntensity={.015}><group ref={root} rotation={[.08,.18,0]} position={[0,-.3,0]}>
 <group ref={roof} position={[0,1.2,0]}><mesh position={[0,.22,-.55]}><extrudeGeometry args={[shape,{depth:1.1,bevelEnabled:true,bevelSize:.035,bevelThickness:.035,bevelSegments:2,steps:1}]}/>{mat}</mesh><mesh position={[0,.08,0]}><boxGeometry args={[5,.25,1.6]}/>{mat}</mesh></group>
 <group ref={columns}>{[-1.95,-1.17,-.39,.39,1.17,1.95].map(x=><group key={x} position={[x,0,.35]}><mesh><cylinderGeometry args={[.16,.2,2.3,32]}/>{mat}</mesh>{[-1.16,1.16].map(y=><mesh key={y} position={[0,y,0]}><boxGeometry args={[.48,.14,.5]}/>{mat}</mesh>)}</group>)}<mesh position={[0,0,-.6]}><boxGeometry args={[4.6,2.3,.18]}/>{mat}</mesh></group>
 {[0,1,2].map(i=><mesh key={i} position={[0,-1.35-i*.15,.1+i*.12]}><boxGeometry args={[5.1+i*.4,.18,2+i*.35]}/>{mat}</mesh>)}
 </group></Float>
}
export default function Courthouse({light=false,progress,paused=false}){
 const fallback=<img src="/courthouse.webp" alt="" className={light?'court-art light':'court-art'} />;
 let supported=false;try{supported=Boolean(document.createElement('canvas').getContext('webgl2'))}catch{}
 return <div className="court-scene" aria-hidden="true">{supported&&!paused?<Boundary fallback={fallback}><Canvas dpr={[1,1.25]} camera={{position:[7,4,9],fov:36}} gl={{alpha:true,antialias:true}}><ambientLight intensity={1.8}/><directionalLight position={[3,6,4]} intensity={5}/><pointLight position={[-4,2,4]} intensity={25} color="#d9e1ec"/><Building light={light} progress={progress}/></Canvas></Boundary>:fallback}</div>
}
