import React,{useEffect,useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {MotionConfig} from 'motion/react';
import PreparationDialog from './components/PreparationDialog.jsx';
import AmbientBackdrop from './components/AmbientBackdrop.jsx';
import SiteHeader from './components/SiteHeader.jsx';
import CriminalJourney from './cinematic/CriminalJourney.jsx';
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
    <div ref={root} className={'law-site'+(paused?' motion-paused':'')}>
      <AmbientBackdrop/>
      <a className="skip-link" href="#approach">Skip to story</a>
      <SiteHeader onPrepare={showPreparation}/>
      <main id="top">
        <CriminalJourney onPrepare={showPreparation} matterIndex={matterIndex} onMatterChange={setMatterIndex}/>
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
