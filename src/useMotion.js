import {useEffect} from 'react';
import Lenis from 'lenis';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);

export default function useMotion(root,paused){
  useEffect(()=>{
    if(paused||!root.current)return;

    const lenis=new Lenis({duration:.78,smoothWheel:true,anchors:{offset:-82}});
    const tick=time=>lenis.raf(time*1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    lenis.on('scroll',ScrollTrigger.update);

    const context=gsap.context(()=>{
      gsap.to('.master-courtroom__image',{
        scale:1.06,
        yPercent:-2,
        ease:'none',
        scrollTrigger:{trigger:'.hero-reference',start:'top top',end:'bottom top',scrub:.75}
      });

      gsap.to('.hero-depth-scene-wrap',{
        yPercent:-5,
        scale:1.035,
        ease:'none',
        scrollTrigger:{trigger:'.hero-reference',start:'top top',end:'bottom top',scrub:.7}
      });

      gsap.utils.toArray('[data-journey-chapter]').forEach(section=>{
        const targets=section.querySelectorAll('h1,h2,h3,.eyebrow,.hero-reference__body,.hero-reference__tag,.trust-story__points article,.case-story__tabs button,.case-story__panel,.approach-story__steps>div,.counsel-story__proof>div,.faq-story__list button,.final-story__inner>.button');
        if(!targets.length)return;
        gsap.fromTo(targets,{y:24,autoAlpha:.2},{y:0,autoAlpha:1,stagger:.035,ease:'power1.out',scrollTrigger:{trigger:section,start:'top 78%',end:'top 38%',scrub:.45}});
      });

      gsap.fromTo('.approach-story__photo img',{scale:1.06},{scale:1,ease:'none',scrollTrigger:{trigger:'.approach-story',start:'top 80%',end:'bottom 30%',scrub:.65}});
    },root.current);

    ScrollTrigger.refresh();
    return()=>{
      context.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  },[root,paused]);
}
