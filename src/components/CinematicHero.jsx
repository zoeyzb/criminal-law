import {motion} from 'motion/react';
import DepthLayer from './DepthLayer.jsx';

const Arrow=()=> <span aria-hidden="true">↗</span>;

export default function CinematicHero({paused,depthRef,imageRef,onPrepare}) {
  const reveal=paused?{duration:0}:{duration:.75,ease:[.22,1,.36,1]};
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero-atmosphere" aria-hidden="true">
      <div className="hero-atmosphere__beam"/>
      <div className="hero-atmosphere__vignette"/>
    </div>
    <div className="hero-subject" ref={imageRef} aria-hidden="true">
      <img src="/judicial-passage.webp" alt="" fetchPriority="high" width="1536" height="1024"/>
      <div className="hero-subject__warmth"/>
      <DepthLayer paused={paused} progress={depthRef}/>
    </div>
    <div className="hero-architecture" aria-hidden="true">
      <span className="hero-architecture__left"/>
      <span className="hero-architecture__right"/>
      <span className="hero-architecture__top"/>
    </div>
    <div className="hero-shade" aria-hidden="true"/>
    <div className="hero-content container">
      <motion.p className="eyebrow" initial={paused?false:{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{...reveal,delay:.15}}>Criminal defense / when the stakes change</motion.p>
      <motion.h1 id="hero-title" initial={paused?false:{opacity:0,y:32,filter:'blur(8px)'}} animate={{opacity:1,y:0,filter:'blur(0px)'}} transition={{...reveal,delay:.28}}>
        The record is only<br/><span>part of the story.</span>
      </motion.h1>
      <motion.p className="hero-copy" initial={paused?false:{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{...reveal,delay:.48}}>
        When an investigation, charge, or decision changes what comes next, start by putting the facts, dates, documents, and questions in order.
      </motion.p>
      <motion.div className="hero-actions" initial={paused?false:{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{...reveal,delay:.62}}>
        <button className="button primary" onClick={onPrepare}>Prepare your brief <Arrow/></button>
        <a className="text-link" href="#situation">Find your position <span aria-hidden="true">↓</span></a>
      </motion.div>
      <div className="hero-index" aria-hidden="true"><span>01</span><i/><span>03</span></div>
    </div>
  </section>;
}
