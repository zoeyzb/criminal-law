import {lazy,Suspense,useEffect,useRef,useState} from 'react';
const DepthScene = lazy(() => import('../DepthScene.jsx'));

export default function DepthLayer({paused,progress}) {
  const [supported,setSupported]=useState(false);
  const [visible,setVisible]=useState(true);
  const wrapper=useRef(null);
  useEffect(() => {
    const canvas=document.createElement('canvas');
    try {
      const context=canvas.getContext('webgl2');
      setSupported(Boolean(context));
      context?.getExtension('WEBGL_lose_context')?.loseContext();
    } catch {setSupported(false);}
    const observer=new IntersectionObserver(([entry])=>setVisible(entry.isIntersecting),{rootMargin:'100px'});
    if(wrapper.current)observer.observe(wrapper.current);
    return()=>observer.disconnect();
  },[]);
  // Unsupported and reduced-motion devices never fetch the heavy renderer chunk.
  // The photograph remains the subject at every rendering capability level.
  return <div className="depth-scene" ref={wrapper} aria-hidden="true">{supported&&!paused&&<Suspense fallback={null}><DepthScene visible={visible} progress={progress}/></Suspense>}</div>;
}
