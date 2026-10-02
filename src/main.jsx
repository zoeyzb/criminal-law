import React,{useEffect,useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {MotionConfig} from 'motion/react';
import {faqs} from './content.js';
import PreparationDialog from './components/PreparationDialog.jsx';
import AmbientBackdrop from './components/AmbientBackdrop.jsx';
import SiteHeader from './components/SiteHeader.jsx';
import CinematicHero from './components/CinematicHero.jsx';
import PrinciplesSequence from './components/PrinciplesSequence.jsx';
import CaseStageDeck from './components/CaseStageDeck.jsx';
import PreparationSequence from './components/PreparationSequence.jsx';
import EditorialFaq from './components/EditorialFaq.jsx';
import useMotion from './useMotion.js';
import './criminal.css';

function App(){
  const root=useRef(null);
  const heroImage=useRef(null);
  const heroDepth=useRef(0);
  const [matterIndex,setMatterIndex]=useState(0);
  const [open,setOpen]=useState(false);
  const [checked,setChecked]=useState([false,false,false]);
  const [quiet,setQuiet]=useState(false);
  const [reduced,setReduced]=useState(()=>matchMedia('(prefers-reduced-motion: reduce)').matches);

  useEffect(()=>{
    const media=matchMedia('(prefers-reduced-motion: reduce)');
    const onChange=()=>setReduced(media.matches);
    media.addEventListener('change',onChange);
    return()=>media.removeEventListener('change',onChange);
  },[]);

  const paused=quiet||reduced;
  useMotion(root,heroImage,heroDepth,paused);
  const showPreparation=()=>setOpen(true);

  return <MotionConfig reducedMotion={paused?'always':'user'}>
    <div ref={root} className={'law-site'+(paused?' motion-paused':'')}>
      <AmbientBackdrop/>
      <a className="skip-link" href="#approach">Skip to content</a>
      <SiteHeader onPrepare={showPreparation}/>
      <main id="top">
        <CinematicHero paused={paused} depthRef={heroDepth} imageRef={heroImage} onPrepare={showPreparation}/>
        <PrinciplesSequence paused={paused}/>
        <CaseStageDeck matterIndex={matterIndex} onMatterChange={setMatterIndex} onPrepare={showPreparation} paused={paused}/>
        <PreparationSequence onPrepare={showPreparation}/>
        <EditorialFaq faqs={faqs}/>
        <section className="closing">
          <div className="container closing-frame">
            <div className="closing-frame__eyebrow">Your next conversation should start clearer than this moment feels.</div>
            <div className="closing-frame__main">
              <h2>Put the facts in order.<br/><span>Then ask better questions.</span></h2>
              <div>
                <p>Organize the timeline, documents, dates, and questions you want to discuss. Nothing is submitted from this page.</p>
                <button className="button primary" onClick={showPreparation}>Create your checklist <span aria-hidden="true">↗</span></button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer container">
        <div className="footer-top">
          <a className="wordmark" href="#top">LAW YOUR WAY<span>CRIMINAL DEFENSE</span></a>
          <div>
            <a href="#approach">Approach</a>
            <a href="#questions">Questions</a>
            <button className="text-button" aria-pressed={paused} disabled={reduced} onClick={()=>setQuiet(value=>!value)}>{paused?'Motion paused':'Pause motion'}</button>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Law Your Way is a demonstration identity, not a verified law firm. This website does not provide legal advice, receive case enquiries, or create an attorney-client relationship.</p>
          <span>© {new Date().getFullYear()} Law Your Way</span>
        </div>
      </footer>
      <PreparationDialog open={open} onClose={()=>setOpen(false)} matterIndex={matterIndex} onMatterChange={setMatterIndex} checked={checked} onCheck={(index,value)=>setChecked(items=>items.map((item,i)=>i===index?value:item))}/>
    </div>
  </MotionConfig>;
}

const reactRoot=import.meta.hot?.data.root||createRoot(document.getElementById('root'));
reactRoot.render(<App/>);
if(import.meta.hot)import.meta.hot.data.root=reactRoot;
