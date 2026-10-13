import {useEffect} from 'react';
import Lenis from 'lenis';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);

export default function useMotion(root,paused){
  useEffect(()=>{
    if(paused||!root.current)return;

    const lenis=new Lenis({duration:.72,smoothWheel:true,anchors:{offset:-82}});
    const tick=time=>lenis.raf(time*1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    lenis.on('scroll',ScrollTrigger.update);

    const context=gsap.context(()=>{
      if(document.querySelector('.hero-reference')){
        gsap.to('.master-courtroom__image',{scale:1.055,yPercent:-1.6,ease:'none',scrollTrigger:{trigger:'.hero-reference',start:'top top',end:'bottom top',scrub:.65}});
        gsap.to('.hero-reference__object',{yPercent:-4,scale:1.025,ease:'none',scrollTrigger:{trigger:'.hero-reference',start:'top top',end:'bottom top',scrub:.65}});
      }

      gsap.utils.toArray('[data-journey-chapter],.page-section').forEach(section=>{
        const targets=section.querySelectorAll('h1,h2,h3,.eyebrow,article,.case-story__panel,.case-stage-page__detail,.questions-page__list button,.final-story__inner>.button');
        if(!targets.length)return;
        gsap.fromTo(targets,{y:18,autoAlpha:.35},{y:0,autoAlpha:1,stagger:.025,ease:'none',scrollTrigger:{trigger:section,start:'top 82%',end:'top 48%',scrub:.38}});
      });

      if(document.querySelector('.approach-story__photo img')){
        gsap.fromTo('.approach-story__photo img',{scale:1.055},{scale:1,ease:'none',scrollTrigger:{trigger:'.approach-story',start:'top 80%',end:'bottom 30%',scrub:.58}});
      }
    },root.current);

    ScrollTrigger.refresh();
    return()=>{context.revert();gsap.ticker.remove(tick);lenis.destroy();};
  },[root,paused]);
}
