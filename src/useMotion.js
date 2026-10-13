import {useEffect} from 'react';
import Lenis from 'lenis';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);

export default function useMotion(root,paused){
  useEffect(()=>{
    if(paused||!root.current)return;

    const lenis=new Lenis({duration:.88,smoothWheel:true,anchors:{offset:-24}});
    const tick=time=>lenis.raf(time*1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    lenis.on('scroll',ScrollTrigger.update);

    const context=gsap.context(()=>{
      const camera=gsap.timeline({
        scrollTrigger:{trigger:'.journey',start:'top top',end:'bottom bottom',scrub:.85}
      });
      camera
        .to('.master-courtroom__image',{scale:1.045,yPercent:-.5,duration:.55,ease:'none'})
        .to('.master-courtroom__image',{scale:1.045,duration:.35,ease:'none'})
        .to('.master-courtroom__image',{scale:1.105,yPercent:-1.7,duration:.55,ease:'none'})
        .to('.master-courtroom__image',{scale:1.105,duration:.35,ease:'none'})
        .to('.master-courtroom__image',{scale:1.17,yPercent:-3,duration:.55,ease:'none'})
        .to('.master-courtroom__image',{scale:1.17,duration:.35,ease:'none'})
        .to('.master-courtroom__image',{scale:1.235,yPercent:-4.3,duration:.55,ease:'none'})
        .to('.master-courtroom__image',{scale:1.235,duration:.35,ease:'none'})
        .to('.master-courtroom__image',{scale:1.30,yPercent:-5.5,duration:.55,ease:'none'});

      gsap.fromTo('.glow-path i',
        {scaleX:.08,opacity:.16},
        {scaleX:1,opacity:.9,stagger:.08,ease:'none',scrollTrigger:{trigger:'.journey-chapter--hero',start:'top top',end:'75% top',scrub:.7}}
      );

      gsap.utils.toArray('[data-journey-chapter]').forEach((chapter,index)=>{
        const copy=chapter.querySelector('.chapter-copy')||chapter.querySelector('.practice-copy')||chapter.querySelector('.position-intro')||chapter.querySelector('.faq-slide');
        if(copy){
          gsap.fromTo(copy,{autoAlpha:.16,y:42},{autoAlpha:1,y:0,ease:'none',scrollTrigger:{trigger:chapter,start:'top 78%',end:'top 34%',scrub:.5}});
          if(index<6){
            gsap.to(copy,{autoAlpha:.14,y:-30,ease:'none',scrollTrigger:{trigger:chapter,start:'67% 44%',end:'bottom 10%',scrub:.45}});
          }
        }

        const photo=chapter.querySelector('.chapter-photo');
        if(photo){
          gsap.fromTo(photo,{autoAlpha:0,xPercent:8,scale:.95},{autoAlpha:1,xPercent:0,scale:1,ease:'none',scrollTrigger:{trigger:chapter,start:'top 76%',end:'top 30%',scrub:.55}});
          gsap.to(photo.querySelector('img'),{scale:1.075,ease:'none',scrollTrigger:{trigger:chapter,start:'top 70%',end:'bottom 26%',scrub:.7}});
          gsap.to(photo,{autoAlpha:.12,xPercent:-4,ease:'none',scrollTrigger:{trigger:chapter,start:'58% 48%',end:'bottom 10%',scrub:.45}});
        }
      });

      gsap.fromTo('.practice-grid article',
        {y:30,autoAlpha:0},
        {y:0,autoAlpha:1,stagger:.06,ease:'none',scrollTrigger:{trigger:'.journey-chapter--practice',start:'top 62%',end:'center 44%',scrub:.5}}
      );

      gsap.fromTo('.case-stage-plaque',
        {y:48,autoAlpha:0,rotateX:5},
        {y:0,autoAlpha:1,rotateX:0,stagger:.08,ease:'none',scrollTrigger:{trigger:'.journey-chapter--position',start:'top 66%',end:'center 46%',scrub:.52}}
      );

      gsap.fromTo('.stage-path',
        {scaleX:0,transformOrigin:'left center'},
        {scaleX:1,ease:'none',scrollTrigger:{trigger:'.journey-chapter--position',start:'top 66%',end:'center 48%',scrub:.55}}
      );

      gsap.fromTo('.journey-end__copy',{y:42,autoAlpha:0},{y:0,autoAlpha:1,ease:'none',scrollTrigger:{trigger:'.journey-end',start:'top 75%',end:'center 56%',scrub:.5}});
    },root.current);

    ScrollTrigger.refresh();
    return()=>{
      context.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  },[root,paused]);
}
