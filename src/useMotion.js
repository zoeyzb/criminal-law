import {useEffect} from 'react';
import Lenis from 'lenis';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';
gsap.registerPlugin(ScrollTrigger);

export default function useMotion(root, hero, depth, paused) {
  useEffect(() => {
    if(paused || !root.current || !hero.current) {depth.current=0; return;}
    const lenis = new Lenis({duration:.8,smoothWheel:true,anchors:{offset:-32}});
    const tick = time => lenis.raf(time*1000);
    gsap.ticker.add(tick);
    lenis.on('scroll',ScrollTrigger.update);
    const context = gsap.context(() => {
      // Depth draws the eye from the judicial passage to the next content section.
      // The text never transforms or pins; the background moves only 40px.
      gsap.to(hero.current, {y:40,scale:1.035,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:.7}});
      gsap.to(depth, {current:1,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:.7}});
    },root.current);
    return () => {context.revert();gsap.ticker.remove(tick);lenis.destroy();};
  },[root,hero,depth,paused]);
}
