import {useEffect} from 'react';
import Lenis from 'lenis';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);

export default function useMotion(root,paused){
  useEffect(()=>{
    if(paused||!root.current)return;

    const lenis=new Lenis({duration:.86,smoothWheel:true,anchors:{offset:-24}});
    const tick=time=>lenis.raf(time*1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    lenis.on('scroll',ScrollTrigger.update);

    const context=gsap.context(()=>{
      const camera=gsap.timeline({
        scrollTrigger:{trigger:'.journey',start:'top top',end:'bottom bottom',scrub:.8}
      });
      camera
        .to('.master-courtroom__image',{scale:1.045,yPercent:-.4,duration:.6,ease:'none'})
        .to('.master-courtroom__image',{scale:1.095,yPercent:-1.5,duration:.6,ease:'none'})
        .to('.master-courtroom__image',{scale:1.15,yPercent:-2.8,duration:.6,ease:'none'})
        .to('.master-courtroom__image',{scale:1.205,yPercent:-4.0,duration:.6,ease:'none'})
        .to('.master-courtroom__image',{scale:1.255,yPercent:-5.0,duration:.6,ease:'none'});

      gsap.fromTo('.glow-path i',
        {scaleX:.12,opacity:.12},
        {scaleX:1,opacity:.78,stagger:.08,ease:'none',scrollTrigger:{trigger:'.journey-chapter--hero',start:'top top',end:'68% top',scrub:.68}}
      );

      gsap.fromTo('.hero-depth-scene-wrap',
        {y:20,scale:.96},
        {y:-18,scale:1.04,ease:'none',scrollTrigger:{trigger:'.journey-chapter--hero',start:'top top',end:'75% top',scrub:.72}}
      );

      gsap.utils.toArray('[data-journey-chapter]').forEach((chapter,index)=>{
        const copy=chapter.querySelector('.chapter-copy')||chapter.querySelector('.position-intro')||chapter.querySelector('.faq-slide');
        if(copy){
          gsap.fromTo(copy,{autoAlpha:.18,y:38},{autoAlpha:1,y:0,ease:'none',scrollTrigger:{trigger:chapter,start:'top 78%',end:'top 35%',scrub:.48}});
          if(index<5){
            gsap.to(copy,{autoAlpha:.16,y:-24,ease:'none',scrollTrigger:{trigger:chapter,start:'68% 45%',end:'bottom 10%',scrub:.42}});
          }
        }

        const photo=chapter.querySelector('.chapter-photo');
        if(photo){
          gsap.fromTo(photo,{autoAlpha:0,xPercent:7,scale:.965},{autoAlpha:1,xPercent:0,scale:1,ease:'none',scrollTrigger:{trigger:chapter,start:'top 76%',end:'top 30%',scrub:.52}});
          gsap.to(photo.querySelector('img'),{scale:1.065,ease:'none',scrollTrigger:{trigger:chapter,start:'top 70%',end:'bottom 28%',scrub:.65}});
          gsap.to(photo,{autoAlpha:.12,xPercent:-3,ease:'none',scrollTrigger:{trigger:chapter,start:'60% 48%',end:'bottom 10%',scrub:.42}});
        }
      });

      gsap.fromTo('.practice-rail a',
        {y:18,autoAlpha:0},
        {y:0,autoAlpha:1,stagger:.045,ease:'none',scrollTrigger:{trigger:'.journey-chapter--hero',start:'55% 70%',end:'82% 62%',scrub:.45}}
      );

      gsap.fromTo('.case-stage-editorial>button',
        {y:34,autoAlpha:0,rotateX:3},
        {y:0,autoAlpha:1,rotateX:0,stagger:.08,ease:'none',scrollTrigger:{trigger:'.journey-chapter--position',start:'top 68%',end:'center 48%',scrub:.5}}
      );

      gsap.fromTo('.journey-end__copy',{y:38,autoAlpha:0},{y:0,autoAlpha:1,ease:'none',scrollTrigger:{trigger:'.journey-end',start:'top 75%',end:'center 56%',scrub:.48}});
    },root.current);

    ScrollTrigger.refresh();
    return()=>{
      context.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  },[root,paused]);
}
