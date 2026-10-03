import {useEffect} from 'react';
import Lenis from 'lenis';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);

export default function useMotion(root,paused){
  useEffect(()=>{
    if(paused||!root.current)return;

    const lenis=new Lenis({duration:.86,smoothWheel:true,anchors:{offset:-22}});
    const tick=time=>lenis.raf(time*1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    lenis.on('scroll',ScrollTrigger.update);

    const context=gsap.context(()=>{
      const copies=gsap.utils.toArray('[data-film-copy]');
      gsap.set(copies,{autoAlpha:0,y:28});
      gsap.set(copies[0],{autoAlpha:1,y:0});

      const film=gsap.timeline({
        scrollTrigger:{
          trigger:'.film',
          start:'top top',
          end:'bottom bottom',
          scrub:.75
        }
      });

      film
        .to('.film-courtroom',{scale:1.2,xPercent:-4,filter:'brightness(.48) saturate(.66)',duration:1},0)
        .to('.film-frame--left',{xPercent:-72,duration:1},0)
        .to('.film-frame--right',{xPercent:72,duration:1},0)
        .to(copies[0],{autoAlpha:0,y:-30,duration:.22},.62)

        .to('.scene-judge',{autoAlpha:1,xPercent:0,scale:1,duration:.42},.72)
        .to(copies[1],{autoAlpha:1,y:0,duration:.32},.76)
        .to('.film-light',{xPercent:-18,opacity:.46,duration:.5},.72)
        .to('.scene-judge',{xPercent:32,scale:.94,duration:.5},1.12)
        .to(copies[1],{autoAlpha:0,y:-28,duration:.22},1.25)

        .to('.scene-record',{autoAlpha:1,xPercent:0,duration:.38},1.34)
        .to(copies[2],{autoAlpha:1,y:0,duration:.32},1.38)
        .to('.scene-paper--a',{x:-42,y:-18,rotate:-6,duration:.44},1.42)
        .to('.scene-paper--b',{x:36,y:-4,rotate:5,duration:.44},1.42)
        .to('.scene-paper--c',{x:4,y:38,rotate:2,duration:.44},1.42)
        .to('.scene-judge',{autoAlpha:0,xPercent:58,duration:.26},1.42)
        .to(copies[2],{autoAlpha:0,y:-28,duration:.22},1.86)

        .to('.scene-record',{autoAlpha:0,xPercent:-22,duration:.3},1.94)
        .to('.scene-witness',{autoAlpha:1,xPercent:0,duration:.4},1.98)
        .to(copies[3],{autoAlpha:1,y:0,duration:.32},2.02)
        .to('.scene-witness__person',{xPercent:-10,scale:1.04,duration:.38},2.15)
        .to(copies[3],{autoAlpha:0,y:-24,duration:.2},2.44)
        .to('.scene-witness',{autoAlpha:.24,xPercent:-18,duration:.34},2.5)
        .to('.film-stages',{autoAlpha:1,y:0,duration:.42},2.58)
        .to('.film-primary',{autoAlpha:0,y:16,duration:.18},2.52);

      const prep=gsap.timeline({
        scrollTrigger:{
          trigger:'.prep-film',
          start:'top top',
          end:'bottom bottom',
          scrub:.72
        }
      });
      const shots=gsap.utils.toArray('[data-prep-shot]');
      gsap.set(shots,{autoAlpha:0,y:24});
      gsap.set(shots[0],{autoAlpha:1,y:0});
      prep
        .to('.prep-film__folder',{rotate:-5,x:-34,y:-12,duration:.5},0)
        .to('.prep-film__pages i:nth-child(1)',{x:-42,y:-34,rotate:-8,duration:.5},0)
        .to('.prep-film__pages i:nth-child(2)',{x:24,y:-12,rotate:5,duration:.5},0)
        .to(shots[0],{autoAlpha:0,y:-20,duration:.18},.58)
        .to('.prep-film__desk',{autoAlpha:.34,duration:.3},.62)
        .to('.prep-film__conversation',{autoAlpha:1,scale:1,duration:.38},.66)
        .to(shots[1],{autoAlpha:1,y:0,duration:.3},.69)
        .to(shots[1],{autoAlpha:0,y:-20,duration:.18},1.28)
        .to('.prep-film__conversation',{autoAlpha:0,xPercent:-24,duration:.3},1.32)
        .to('.prep-film__door',{autoAlpha:1,scale:1,duration:.4},1.38)
        .to(shots[2],{autoAlpha:1,y:0,duration:.3},1.42)
        .to('.prep-film__cta',{autoAlpha:1,y:0,duration:.3},1.68);

      gsap.fromTo('.film-exit__world img',{scale:1.1},{scale:1,ease:'none',scrollTrigger:{trigger:'.film-exit',start:'top bottom',end:'bottom bottom',scrub:.6}});
      gsap.fromTo('.film-exit__copy',{y:60,opacity:0},{y:0,opacity:1,scrollTrigger:{trigger:'.film-exit',start:'top 72%',end:'center 58%',scrub:.5}});
    },root.current);

    ScrollTrigger.refresh();
    return()=>{
      context.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  },[root,paused]);
}
