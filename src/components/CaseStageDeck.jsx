import {AnimatePresence,motion} from 'motion/react';
import {matters} from '../content.js';

const Arrow=()=> <span aria-hidden="true">↗</span>;

export default function CaseStageDeck({matterIndex,onMatterChange,onPrepare,paused}) {
  const matter=matters[matterIndex];
  return <section id="situation" className="case-section section">
    <div className="container">
      <div className="case-heading">
        <div><p className="section-label">Your position</p><h2>Where are you<br/>in the process?</h2></div>
        <p>Choose the stage closest to where things stand now. The page changes around the information most useful to organize first.</p>
      </div>
      <div className="case-deck">
        <div className="case-tabs" role="group" aria-label="Your position">
          {matters.map((item,index)=><button key={item.id} aria-pressed={matterIndex===index} onClick={()=>onMatterChange(index)} className={matterIndex===index?'is-selected':''}>
            <span className="case-tab__number">0{index+1}</span>
            <span className="case-tab__label">{item.label}</span>
            <span className="case-tab__stage">{item.short}</span>
          </button>)}
        </div>
        <div className="case-visual">
          <div className="case-visual__rail" aria-hidden="true"/>
          <AnimatePresence mode="wait">
            <motion.article
              key={matter.id}
              className="case-card"
              initial={paused?false:{opacity:0,x:42,rotateY:-5,scale:.985}}
              animate={{opacity:1,x:0,rotateY:0,scale:1}}
              exit={paused?undefined:{opacity:0,x:-28,rotateY:4,scale:.99}}
              transition={{duration:paused?0:.45,ease:[.22,1,.36,1]}}
            >
              <div className="case-card__top"><span>{matter.short}</span><span>LAW YOUR WAY / {String(matterIndex+1).padStart(2,'0')}</span></div>
              <h3>{matter.title}</h3>
              <p className="case-card__lead">{matter.text}</p>
              <div className="case-card__grid">
                <section><span>What matters now</span><p>{matter.focus}</p></section>
                <section><span>Bring with you</span><ul>{matter.notes.map(note=><li key={note}>{note}</li>)}</ul></section>
                <section><span>Question to ask</span><p className="case-card__question">{matter.question}</p></section>
              </div>
              <button className="text-link case-card__action" onClick={onPrepare}>Prepare this stage <Arrow/></button>
            </motion.article>
          </AnimatePresence>
          <div className="case-card-shadow case-card-shadow--one" aria-hidden="true"/>
          <div className="case-card-shadow case-card-shadow--two" aria-hidden="true"/>
        </div>
      </div>
    </div>
  </section>;
}
