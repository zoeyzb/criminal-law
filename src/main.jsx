import React,{useEffect,useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {MotionConfig} from 'motion/react';
import {faqs} from './content.js';
import PreparationDialog from './components/PreparationDialog.jsx';
import AmbientBackdrop from './components/AmbientBackdrop.jsx';
import SiteHeader from './components/SiteHeader.jsx';
import CinematicStory from './cinematic/CinematicStory.jsx';
import PreparationFilm from './cinematic/PreparationFilm.jsx';
import CompactFaq from './cinematic/CompactFaq.jsx';
import useMotion from './useMotion.js';
import './criminal.css';

function App(){
  const root=useRef(null);
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
  useMotion(root,paused);
  const showPreparation=()=>setOpen(true);

  return <MotionConfig reducedMotion={paused?'always':'user'}>
    <div ref={root} className={'law-site cinematic-site'+(paused?' motion-paused':'')}>
      <AmbientBackdrop/>
      <a className="skip-link" href="#approach">Skip to story</a>
      <SiteHeader onPrepare={showPreparation}/>
      <main id="top">
        <CinematicStory onPrepare={showPreparation} matterIndex={matterIndex} onMatterChange={setMatterIndex}/>
        <PreparationFilm onPrepare={showPreparation}/>
        <CompactFaq faqs={faqs}/>
        <section className="film-exit">
          <div className="film-exit__world" aria-hidden="true">
            <img src="/judicial-passage.webp" alt=""/>
            <div className="film-exit__shade"/>
            <div className="film-exit__door"/>
          </div>
          <div className="container film-exit__copy">
            <span>Before the conversation begins</span>
            <h2>Walk in prepared.</h2>
            <p>Put the facts in order. Keep the questions close.</p>
            <div>
              <button className="button primary" onClick={showPreparation}>Create your checklist <span aria-hidden="true">↗</span></button>
              <a className="text-link" href="#situation">Review your stage <span aria-hidden="true">↑</span></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer container">
        <div className="footer-top">
          <a className="wordmark" href="#top">LAW YOUR WAY<span>CRIMINAL DEFENSE</span></a>
          <div>
            <a href="#approach">Story</a>
            <a href="#situation">Your position</a>
            <a href="#questions">Questions</a>
            <button className="text-button" aria-pressed={paused} disabled={reduced} onClick={()=>setQuiet(value=>!value)}>{paused?'Motion paused':'Pause motion'}</button>
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
