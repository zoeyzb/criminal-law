import React, {useEffect, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {MotionConfig, motion} from 'motion/react';
import {matters, stages, faqs} from './content.js';
import PreparationDialog from './components/PreparationDialog.jsx';
import useMotion from './useMotion.js';
import './criminal.css';

import DepthLayer from './components/DepthLayer.jsx';
const Arrow = () => <span aria-hidden="true">↗</span>;

function App() {
  const root = useRef(null);
  const heroImage = useRef(null);
  const heroDepth = useRef(0);
  const menuButton = useRef(null);
  const [matterIndex, setMatterIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [checked, setChecked] = useState([false,false,false]);
  const [quiet, setQuiet] = useState(false);
  const [reduced, setReduced] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const change = () => setReduced(media.matches);
    media.addEventListener('change',change);
    return () => media.removeEventListener('change',change);
  },[]);
  useEffect(() => {
    const key = event => {if(event.key === 'Escape' && menuOpen) {setMenuOpen(false);menuButton.current?.focus();}};
    document.addEventListener('keydown',key);
    return () => document.removeEventListener('keydown',key);
  },[menuOpen]);
  const paused = quiet || reduced;
  useMotion(root, heroImage, heroDepth, paused);
  const matter = matters[matterIndex];
  const showPreparation = () => {setMenuOpen(false);setOpen(true);};
  const selectMatter = index => setMatterIndex(index);
  const navigate = () => setMenuOpen(false);

  return <MotionConfig reducedMotion={paused?'always':'user'}><div ref={root} className={'law-site' + (paused?' motion-paused':'')}>
    <div className="ambient-layer" aria-hidden="true"><div className="ambient-light"/><div className="ambient-grain"/></div>
    <a className="skip-link" href="#object">Skip to content</a>
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Law Your Way home">LAW YOUR WAY<span>CRIMINAL DEFENSE</span></a>
      <nav aria-label="Main navigation" className="desktop-nav"><a href="#object">Our approach</a><a href="#materials">Your situation</a><a href="#collection">Preparation</a><a href="#questions">Questions</a></nav>
      <button className="header-action" onClick={showPreparation}>Prepare a conversation <Arrow/></button>
      <button ref={menuButton} className="menu-button" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen?'Close':'Menu'} <span aria-hidden="true">{menuOpen?'×':'+'}</span></button>
      <nav id="mobile-menu" aria-label="Mobile navigation" className={'mobile-menu' + (menuOpen?' is-open':'')} hidden={!menuOpen}>
        <a onClick={navigate} href="#object">Our approach</a><a onClick={navigate} href="#materials">Your situation</a><a onClick={navigate} href="#collection">Preparation</a><a onClick={navigate} href="#questions">Questions</a><button onClick={showPreparation}>Prepare a conversation <Arrow/></button>
      </nav>
    </header>
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-subject" ref={heroImage} aria-hidden="true"><img src="/judicial-passage.webp" alt="" fetchPriority="high" width="1536" height="1024"/><DepthLayer paused={paused} progress={heroDepth}/></div>
        <div className="hero-shade" aria-hidden="true"/>
        <div className="hero-content container">
          <motion.p className="eyebrow" initial={paused?false:{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:paused?0:.6}}>Criminal defense. Personal perspective.</motion.p>
          <h1 id="hero-title">Your future.<br/><span>Your defense.</span></h1>
          <p className="hero-copy">Facing an investigation or criminal charge? Begin with clear questions, careful preparation, and a better understanding of what comes next.</p>
          <div className="hero-actions"><button className="button primary" onClick={showPreparation}>Prepare your next step <Arrow/></button><a className="text-link" href="#materials">Find your starting point <span aria-hidden="true">↓</span></a></div>
        </div>
      </section>

      <section id="object" className="approach section container">
        <div className="approach-heading"><p className="section-label">The person comes first</p><h2>A case has a record.<br/>A person has a life.</h2><p>The paperwork is only part of the picture. Your work, family, concerns, and priorities belong in the conversation too.</p></div>
        <div className="principles"><article><span className="principle-mark" aria-hidden="true">/</span><div><h3>Listen before deciding.</h3><p>Start with your account of events and the questions you need answered.</p></div></article><article><span className="principle-mark" aria-hidden="true">/</span><div><h3>Make the detail understandable.</h3><p>Keep documents, dates, and uncertainty in view. Clear language makes the conversation useful.</p></div></article><article><span className="principle-mark" aria-hidden="true">/</span><div><h3>Know the next step.</h3><p>Discuss the options, responsibilities, and communication you would expect from counsel.</p></div></article></div>
      </section>

      <section id="materials" className="situations section">
        <div className="container"><div className="section-heading"><h2>Where are you<br/>in the process?</h2><p>Choose the situation closest to yours. Bring the right information to the first conversation.</p></div>
          <div className="matter-layout"><div className="matter-options" aria-label="Your situation">{matters.map((item,index) => <button key={item.id} aria-pressed={matterIndex===index} onClick={() => selectMatter(index)} className={matterIndex===index?'is-selected':''}><span>{item.label}</span><span className="matter-stage">{item.short}</span><Arrow/></button>)}</div>
            <div className="matter-panel" aria-live="polite"><div className="matter-panel-top"><span>{matter.short}</span><span aria-hidden="true">LAW YOUR WAY</span></div><h3>{matter.title}</h3><p>{matter.text}</p><h4>Useful to have together</h4><ul>{matter.notes.map(item => <li key={item}>{item}</li>)}</ul><div className="question-note"><span>A question to begin with</span><p>{matter.question}</p></div><button className="text-link" onClick={showPreparation}>Build your checklist <Arrow/></button></div>
          </div>
        </div>
      </section>

      <section id="collection" className="preparation section container">
        <div className="preparation-heading"><h2>Clarity begins<br/>with preparation.</h2><p>You do not need to have every answer. A short timeline, the documents you have, and a list of questions give the conversation somewhere to start.</p><button className="button secondary" onClick={showPreparation}>Open preparation checklist <Arrow/></button></div>
        <ol className="process-list">{stages.map((stage,index) => <li key={stage.id}><span className="process-number">{String(index+1).padStart(2,'0')}</span><div><h3>{stage.name}</h3><p>{stage.text}</p></div></li>)}</ol>
      </section>

      <section id="questions" className="questions section container"><div><h2>Before you<br/>take the next step.</h2><p>Practical answers about using this website and preparing a conversation.</p></div><div className="faq-list">{faqs.map(item => <details key={item.question}><summary>{item.question}<span className="faq-plus" aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></section>

      <section className="closing container"><div className="closing-surface"><h2>Start with<br/>what matters to you.</h2><div><p>Put your questions in order.<br/>Keep your future in view.</p><button className="button primary" onClick={showPreparation}>Create your checklist <Arrow/></button></div></div></section>
    </main>
    <footer className="site-footer container"><div className="footer-top"><a className="wordmark" href="#top">LAW YOUR WAY<span>CRIMINAL DEFENSE</span></a><div><a href="#object">Our approach</a><a href="#questions">Questions</a><button className="text-button" aria-pressed={paused} disabled={reduced} onClick={() => setQuiet(!quiet)}>{paused?'Motion paused':'Pause motion'}</button><a href="#top">Back to top ↑</a></div></div><div className="footer-bottom"><p>Law Your Way is a demonstration identity, not a verified law firm. This website does not provide legal advice, receive case enquiries, or create an attorney-client relationship.</p><span>© {new Date().getFullYear()} Law Your Way</span></div></footer>
    <PreparationDialog open={open} onClose={() => setOpen(false)} matterIndex={matterIndex} onMatterChange={setMatterIndex} checked={checked} onCheck={(index,value) => setChecked(items => items.map((item,i) => i===index?value:item))}/>
  </div></MotionConfig>;
}
const reactRoot = import.meta.hot?.data.root || createRoot(document.getElementById('root'));
reactRoot.render(<App/>);
if (import.meta.hot) import.meta.hot.data.root = reactRoot;
