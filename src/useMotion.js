import {useEffect} from 'react';
import Lenis from 'lenis';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);

export default function useMotion(root,hero,depth,paused){
  useEffect(()=>{
    if(paused||!root.current||!hero.current){
      depth.current=0;
      return;
    }

    const lenis=new Lenis({duration:.9,smoothWheel:true,anchors:{offset:-24}});
    const tick=time=>lenis.raf(time*1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    lenis.on('scroll',ScrollTrigger.update);

    const context=gsap.context(()=>{
      gsap.fromTo('.hero-architecture__left',{xPercent:0},{xPercent:-20,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:.85}});
      gsap.fromTo('.hero-architecture__right',{xPercent:0},{xPercent:20,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:.85}});
      gsap.to(hero.current,{y:72,scale:1.075,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:.8}});
      gsap.to(depth,{current:1,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:.8}});
      gsap.to('.hero-content',{y:-28,opacity:.72,ease:'none',scrollTrigger:{trigger:'.hero',start:'25% top',end:'bottom top',scrub:.8}});

      gsap.utils.toArray('.principle-card').forEach((card,index)=>{
        gsap.fromTo(card,{z:-90,y:42,rotateX:6,opacity:.34},{z:index*-8,y:0,rotateX:0,opacity:1,ease:'none',scrollTrigger:{trigger:card,start:'top 88%',end:'center 55%',scrub:.55}});
      });

      gsap.utils.toArray('.preparation-step').forEach((step,index)=>{
        const surface=step.querySelector('.preparation-step__surface');
        gsap.fromTo(surface,{y:80,scale:.955,rotateX:5,opacity:.36},{y:0,scale:1,rotateX:0,opacity:1,ease:'none',scrollTrigger:{trigger:step,start:'top 88%',end:'center 58%',scrub:.65}});
        if(index<2)gsap.to(surface,{opacity:.58,scale:.975,ease:'none',scrollTrigger:{trigger:step,start:'center 42%',end:'bottom 16%',scrub:.6}});
      });
    },root.current);

    ScrollTrigger.refresh();
    return()=>{
      context.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  },[root,hero,depth,paused]);
}
