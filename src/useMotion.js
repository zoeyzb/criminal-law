import {useEffect} from 'react';
import Lenis from 'lenis';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);

export default function useMotion(root,paused){
  useEffect(()=>{
    if(paused||!root.current)return;

    const lenis=new Lenis({duration:.9,smoothWheel:true,anchors:{offset:-22}});
    const tick=time=>lenis.raf(time*1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    lenis.on('scroll',ScrollTrigger.update);

    const context=gsap.context(()=>{
      /* One camera, one courtroom. Push deeper, hold, then push again. */
      const camera=gsap.timeline({
        scrollTrigger:{trigger:'.journey',start:'top top',end:'bottom bottom',scrub:.9}
      });
      camera
        .to('.master-courtroom__image',{scale:1.045,yPercent:-.5,duration:.65,ease:'none'})
        .to('.master-courtroom__image',{scale:1.045,duration:.38,ease:'none'})
        .to('.master-courtroom__image',{scale:1.105,yPercent:-1.7,duration:.65,ease:'none'})
        .to('.master-courtroom__image',{scale:1.105,duration:.42,ease:'none'})
        .to('.master-courtroom__image',{scale:1.165,yPercent:-3,duration:.65,ease:'none'})
        .to('.master-courtroom__image',{scale:1.165,duration:.42,ease:'none'})
        .to('.master-courtroom__image',{scale:1.225,yPercent:-4.2,duration:.65,ease:'none'})
        .to('.master-courtroom__image',{scale:1.225,duration:.42,ease:'none'})
        .to('.master-courtroom__image',{scale:1.29,yPercent:-5.5,duration:.65,ease:'none'});

      gsap.utils.toArray('[data-journey-chapter]').forEach((chapter,index)=>{
        const copy=chapter.querySelector('.chapter-copy')||chapter.querySelector('.position-intro')||chapter.querySelector('.faq-slide');
        if(copy){
          gsap.fromTo(copy,
            {autoAlpha:.08,y:48},
            {autoAlpha:1,y:0,ease:'none',scrollTrigger:{trigger:chapter,start:'top 78%',end:'top 32%',scrub:.55}}
          );
          if(index<8){
            gsap.to(copy,{autoAlpha:.12,y:-34,ease:'none',scrollTrigger:{trigger:chapter,start:'65% 44%',end:'bottom 12%',scrub:.5}});
          }
        }
        const photo=chapter.querySelector('.chapter-photo');
        if(photo){
          gsap.fromTo(photo,
            {autoAlpha:0,xPercent:7,scale:.94},
            {autoAlpha:1,xPercent:0,scale:1,ease:'none',scrollTrigger:{trigger:chapter,start:'top 76%',end:'top 28%',scrub:.55}}
          );
          gsap.to(photo.querySelector('img'),{scale:1.08,ease:'none',scrollTrigger:{trigger:chapter,start:'top 70%',end:'bottom 30%',scrub:.7}});
          gsap.to(photo,{autoAlpha:.1,xPercent:-4,ease:'none',scrollTrigger:{trigger:chapter,start:'58% 48%',end:'bottom 10%',scrub:.45}});
        }
      });

      gsap.fromTo('.case-timeline__line',{scaleX:0},{scaleX:1,ease:'none',scrollTrigger:{trigger:'.journey-chapter--position',start:'top 70%',end:'center 46%',scrub:.55}});
      gsap.fromTo('.case-timeline>button',{y:32,autoAlpha:0},{y:0,autoAlpha:1,stagger:.08,ease:'none',scrollTrigger:{trigger:'.journey-chapter--position',start:'top 62%',end:'center 45%',scrub:.55}});

      gsap.fromTo('.journey-end__copy',{y:44,autoAlpha:0},{y:0,autoAlpha:1,ease:'none',scrollTrigger:{trigger:'.journey-end',start:'top 75%',end:'center 55%',scrub:.5}});
    },root.current);

    ScrollTrigger.refresh();
    return()=>{
      context.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  },[root,paused]);
}
