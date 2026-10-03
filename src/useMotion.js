import {useEffect} from 'react';
import Lenis from 'lenis';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);

export default function useMotion(root,paused){
  useEffect(()=>{
    if(paused||!root.current)return;

    const lenis=new Lenis({duration:.88,smoothWheel:true,anchors:{offset:-22}});
    const tick=time=>lenis.raf(time*1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    lenis.on('scroll',ScrollTrigger.update);

    const context=gsap.context(()=>{
      /* One persistent camera move for the entire website: push, hold, push, hold. */
      const camera=gsap.timeline({
        scrollTrigger:{trigger:root.current,start:'top top',end:'bottom bottom',scrub:.8}
      });
      camera
        .to('.master-courtroom__image',{scale:1.06,yPercent:-1,duration:.7,ease:'none'})
        .to('.master-courtroom__image',{scale:1.06,duration:.28,ease:'none'})
        .to('.master-courtroom__image',{scale:1.13,yPercent:-2.4,duration:.7,ease:'none'})
        .to('.master-courtroom__image',{scale:1.13,duration:.28,ease:'none'})
        .to('.master-courtroom__image',{scale:1.20,yPercent:-3.8,duration:.7,ease:'none'})
        .to('.master-courtroom__image',{scale:1.20,duration:.28,ease:'none'})
        .to('.master-courtroom__image',{scale:1.27,yPercent:-5,duration:.7,ease:'none'})
        .to('.master-courtroom__image',{scale:1.27,duration:.28,ease:'none'})
        .to('.master-courtroom__image',{scale:1.34,yPercent:-6,duration:.7,ease:'none'});

      const copies=gsap.utils.toArray('[data-film-copy]');
      gsap.set(copies,{autoAlpha:0,y:26});
      gsap.set(copies[0],{autoAlpha:1,y:0});

      const film=gsap.timeline({
        scrollTrigger:{trigger:'.film',start:'top top',end:'bottom bottom',scrub:.72}
      });
      film
        .to(copies[0],{autoAlpha:0,y:-22,duration:.18},.48)
        .to(copies[1],{autoAlpha:1,y:0,duration:.28},.58)
        .to('.master-courtroom__light',{opacity:.34,xPercent:-8,duration:.38},.58)
        .to(copies[1],{autoAlpha:0,y:-22,duration:.18},1.05)
        .to(copies[2],{autoAlpha:1,y:0,duration:.28},1.15)
        .to('.master-courtroom__shade',{opacity:.82,duration:.3},1.14)
        .to(copies[2],{autoAlpha:0,y:-22,duration:.18},1.63)
        .to(copies[3],{autoAlpha:1,y:0,duration:.28},1.73)
        .to('.film-depth-guides i:nth-child(1)',{scaleX:1,opacity:.5,duration:.3},1.74)
        .to('.film-depth-guides i:nth-child(2)',{scaleX:1,opacity:.32,duration:.3},1.82)
        .to('.film-depth-guides i:nth-child(3)',{scaleX:1,opacity:.2,duration:.3},1.9)
        .to(copies[3],{autoAlpha:0,y:-18,duration:.16},2.22)
        .to('.film-stages',{autoAlpha:1,y:0,pointerEvents:'auto',duration:.34},2.3)
        .to('.film-primary',{autoAlpha:0,y:12,duration:.14},2.24);

      const shots=gsap.utils.toArray('[data-prep-shot]');
      gsap.set(shots,{autoAlpha:0,y:22});
      gsap.set(shots[0],{autoAlpha:1,y:0});
      const prep=gsap.timeline({
        scrollTrigger:{trigger:'.prep-film',start:'top top',end:'bottom bottom',scrub:.72}
      });
      prep
        .to('.case-photo',{autoAlpha:1,scale:1,duration:.32},0)
        .to('.case-photo img',{scale:1.035,xPercent:-1.5,duration:.55},0)
        .to(shots[0],{autoAlpha:0,y:-18,duration:.16},.52)
        .to(shots[1],{autoAlpha:1,y:0,duration:.25},.6)
        .to('.case-photo img',{scale:1.08,xPercent:-3,duration:.48},.58)
        .to(shots[1],{autoAlpha:0,y:-18,duration:.16},1.08)
        .to(shots[2],{autoAlpha:1,y:0,duration:.25},1.17)
        .to('.case-photo img',{scale:1.13,xPercent:-4.5,duration:.48},1.15)
        .to('.prep-film__cta',{autoAlpha:1,y:0,pointerEvents:'auto',duration:.24},1.42);

      gsap.fromTo('.compact-faq__layout',{y:30,opacity:.4},{y:0,opacity:1,scrollTrigger:{trigger:'.compact-faq',start:'top 82%',end:'top 45%',scrub:.45}});
      gsap.fromTo('.film-exit__copy',{y:40,opacity:0},{y:0,opacity:1,scrollTrigger:{trigger:'.film-exit',start:'top 75%',end:'center 58%',scrub:.45}});
    },root.current);

    ScrollTrigger.refresh();
    return()=>{
      context.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  },[root,paused]);
}
