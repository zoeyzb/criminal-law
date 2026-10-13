import {useState} from 'react';
import CriminalJourney from '../cinematic/CriminalJourney.jsx';
import {faqs} from '../content.js';

const HERO='/judicial-passage.webp';
const LADY='https://images.pexels.com/photos/6077123/pexels-photo-6077123.jpeg?auto=compress&dpr=1&w=1800';
const OFFICE='https://images.pexels.com/photos/6077089/pexels-photo-6077089.jpeg?auto=compress&dpr=1&w=1800';
const GAVEL='https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&dpr=1&w=1800';
const DOCUMENTS='https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&dpr=1&w=1800';

const practices=[
  ['Misdemeanor & Felony Defense','Serious charges require immediate control of the record, deadlines, and defense strategy.'],
  ['DUI & Traffic Crimes','Protect your license, record, and options before deadlines narrow them.'],
  ['White Collar & Fraud','Complex allegations demand discreet preparation and careful document review.'],
  ['Domestic Violence Defense','High-stakes allegations require privacy, speed, and disciplined communication.'],
  ['Juvenile Defense','Early decisions can shape a young person’s future long after the case ends.'],
  ['Other Criminal Charges','Start by clarifying the accusation, the immediate risk, and the next deadline.']
];

const stages=[
  ['01','Investigation','Before charges','Preserve the timeline, communications, notices, and details while they are still fresh.'],
  ['02','Charges Filed','Case active','Understand the accusation, evidence, court dates, and immediate decisions.'],
  ['03','Review','After a decision','Start with the ruling, record, and every deadline attached to the next step.']
];

export function HomePage(props){ return <CriminalJourney {...props}/>; }

export function PracticeAreasPage({onPrepare}){
  return <>
    <section className="practice-hero-scene">
      <img src={LADY} alt="" aria-hidden="true"/>
      <div className="scene-shade"/>
      <div className="container practice-hero-scene__copy">
        <span className="eyebrow">PRACTICE AREAS</span>
        <h1>Defense Tailored<br/><em>to the Charge.</em></h1>
        <p>Focused criminal defense across the matters that can put freedom, reputation, and future opportunities at risk.</p>
        <button className="button primary" onClick={onPrepare}>Start with your situation <b>→</b></button>
      </div>
    </section>

    <section className="practice-dark">
      <div className="container practice-dark__head">
        <div><span className="eyebrow">COMPREHENSIVE DEFENSE</span><h2>Clear focus for serious charges.</h2></div>
        <p>No wall of legal jargon. Find the issue closest to yours, then start with the facts and deadlines that matter first.</p>
      </div>
      <div className="container practice-dark__grid">
        {practices.map(([title,copy],i)=><article key={title}>
          <span>0{i+1}</span><h3>{title}</h3><p>{copy}</p><button onClick={onPrepare}>Prepare for a consultation <b>→</b></button>
        </article>)}
      </div>
    </section>
  </>;
}

export function CaseStagesPage({matterIndex,onMatterChange,onPrepare}){
  return <>
    <section className="stages-hero-scene">
      <img src={HERO} alt="" aria-hidden="true"/>
      <div className="scene-shade"/>
      <div className="container stages-hero-scene__head">
        <span className="eyebrow">YOUR CASE. A CLEAR PATH FORWARD.</span>
        <h1>Know Where<br/><em>Your Case Stands.</em></h1>
        <p>Three moments. Clear next steps.</p>
      </div>
      <div className="container stages-hero-cards" role="group" aria-label="Case stage">
        {stages.map((s,i)=><button key={s[1]} className={matterIndex===i?'is-active':''} onClick={()=>onMatterChange(i)}>
          <span>{s[0]}</span><small>{s[2]}</small><strong>{s[1]}</strong><p>{s[3]}</p><b>→</b>
        </button>)}
      </div>
    </section>

    <section className="stage-guidance">
      <div className="container stage-guidance__grid">
        <div><span className="eyebrow">THE CURRENT STAGE</span><h2>{stages[matterIndex][1]}</h2><p>{stages[matterIndex][3]}</p></div>
        <div className="stage-guidance__check">
          <span>Bring into focus</span>
          <strong>Dates and deadlines</strong><strong>Notices and correspondence</strong><strong>Documents and evidence</strong><strong>Questions that still need answers</strong>
          <button className="button primary" onClick={onPrepare}>Prepare for this stage <b>→</b></button>
        </div>
      </div>
    </section>
  </>;
}

export function AboutPage(){
  return <>
    <section className="about-hero-scene">
      <img src={OFFICE} alt="" aria-hidden="true"/>
      <div className="scene-shade"/>
      <div className="container about-hero-scene__copy">
        <span className="eyebrow">OUR APPROACH</span>
        <h1>Grounded Advice.<br/><em>Serious Defense.</em></h1>
        <p>People first. Preparation before performance. Clear communication before uncertainty compounds.</p>
      </div>
    </section>
    <section className="about-principles">
      <div className="container about-principles__head"><span className="eyebrow">FOUR PRINCIPLES. ONE PURPOSE.</span><h2>Make the hard decisions easier to understand.</h2></div>
      <div className="container about-principles__grid">
        <article><span>01</span><h3>Clarity</h3><p>Separate what is known from what is assumed.</p></article>
        <article><span>02</span><h3>Preparation</h3><p>Build the timeline and organize the record early.</p></article>
        <article><span>03</span><h3>Strategy</h3><p>Focus on leverage, timing, uncertainty, and risk.</p></article>
        <article><span>04</span><h3>Respect</h3><p>Treat the client’s life as more than a case file.</p></article>
      </div>
    </section>
  </>;
}

export function QuestionsPage(){
  const [open,setOpen]=useState(0);
  return <>
    <section className="questions-hero-scene">
      <img src={DOCUMENTS} alt="" aria-hidden="true"/>
      <div className="scene-shade"/>
      <div className="container questions-hero-scene__copy">
        <span className="eyebrow">QUESTIONS BEFORE YOU CALL</span>
        <h1>Get Informed<br/><em>Before You Call.</em></h1>
        <p>Know what to bring, what this website does, and what the first conversation should accomplish.</p>
      </div>
    </section>
    <section className="questions-dark">
      <div className="container questions-dark__grid">
        <div className="questions-dark__list">
          <span className="eyebrow">STRAIGHT ANSWERS. REAL CLARITY.</span>
          {faqs.map((item,i)=><button key={item.question} className={open===i?'is-open':''} onClick={()=>setOpen(open===i?-1:i)}>
            <span>0{i+1}</span><strong>{item.question}</strong><b>{open===i?'−':'+'}</b>{open===i?<p>{item.answer}</p>:null}
          </button>)}
        </div>
        <aside className="bring-card"><span className="eyebrow">PREPARE FIRST</span><h2>What to Bring to Your Consultation</h2><p>A useful first conversation starts with structure.</p><ol><li>A short timeline of events</li><li>Notices or correspondence</li><li>Upcoming dates or deadlines</li><li>Questions you need answered</li></ol></aside>
      </div>
    </section>
  </>;
}

export function ContactPage({onPrepare}){
  return <>
    <section className="contact-hero-scene">
      <img src={GAVEL} alt="" aria-hidden="true"/>
      <div className="scene-shade"/>
      <div className="container contact-hero-scene__grid">
        <div><span className="eyebrow">START THE CONVERSATION</span><h1>Start with<br/><em>Clarity.</em></h1><p>This demonstration site does not submit case enquiries. Use the private preparation tool to organize what you would want ready for a real consultation.</p></div>
        <div className="contact-prep-card"><span className="eyebrow">PRIVATE PREPARATION</span><h2>Put your case in order first.</h2><p>Your checklist stays in this browser. Nothing is sent through this demonstration website.</p><button className="button primary" onClick={onPrepare}>Prepare Your Case <b>→</b></button></div>
      </div>
    </section>
  </>;
}
