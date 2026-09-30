import {useEffect} from 'react';
import Lenis from 'lenis';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';
gsap.registerPlugin(ScrollTrigger);
export default function useMotion(root,canvas,hero,progress,paused){useEffect(()=>{
 const el=root.current;if(!el)return;
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('n-visible')}),{threshold:.1});el.querySelectorAll('.n-reveal,.n-product,.n-spec-row').forEach(n=>observer.observe(n));
 const c=canvas.current,g=c?.getContext('2d');let frame=0,last=0;const stars=Array.from({length:75},(_,i)=>({x:(i*.618)%1,y:(i*.379)%1,z:(i*.173)%1}));
 const draw=time=>{if(c&&g){const dpr=Math.min(devicePixelRatio,1.5),w=c.clientWidth,h=c.clientHeight;if(c.width!==w*dpr||c.height!==h*dpr){c.width=w*dpr;c.height=h*dpr;g.setTransform(dpr,0,0,dpr,0,0)}g.clearRect(0,0,w,h);for(const p of stars){if(!paused)p.y=(p.y-.0001+1)%1;g.globalAlpha=.08+p.z*.3;g.fillStyle='#fff';g.fillRect(p.x*w,p.y*h,.6+p.z,.6+p.z)}}if(!paused)frame=requestAnimationFrame(t=>{if(t-last>32){last=t;draw(t)}else frame=requestAnimationFrame(draw)})};draw(0);
 if(paused){return()=>{observer.disconnect();cancelAnimationFrame(frame)}}
 const lenis=new Lenis({duration:1.05,smoothWheel:true,anchors:{offset:-72}});const tick=t=>lenis.raf(t*1000);gsap.ticker.add(tick);lenis.on('scroll',ScrollTrigger.update);
 const move=e=>{el.style.setProperty('--mx',e.clientX+'px');el.style.setProperty('--my',e.clientY+'px')};window.addEventListener('pointermove',move);
 const ctx=gsap.context(()=>{gsap.to(hero.current,{y:60,scale:1.2,ease:'none',scrollTrigger:{trigger:'.n-hero',start:'top top',end:'bottom top',scrub:1}});gsap.to(progress,{current:1,ease:'none',scrollTrigger:{trigger:'.n-explode',start:'top 75%',end:'bottom 40%',scrub:1}})},el);
 return()=>{observer.disconnect();cancelAnimationFrame(frame);window.removeEventListener('pointermove',move);ctx.revert();gsap.ticker.remove(tick);lenis.destroy()}
 },[paused,root,canvas,hero,progress])}
