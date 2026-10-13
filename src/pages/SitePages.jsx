import {useState} from 'react';
import CriminalJourney from '../cinematic/CriminalJourney.jsx';
import {faqs} from '../content.js';

const HERO='/judicial-passage.webp';
const OFFICE='https://images.pexels.com/photos/6077089/pexels-photo-6077089.jpeg?auto=compress&dpr=1&w=1600';
const GAVEL='https://images.pexels.com/photos/5668484/pexels-photo-5668484.jpeg?auto=compress&dpr=1&w=1600';
const DOCUMENTS='https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&dpr=1&w=1600';
const COUNSEL='https://images.pexels.com/photos/5668791/pexels-photo-5668791.jpeg?auto=compress&dpr=1&w=1600';

const practices=[
  ['Misdemeanor & Felony Defense','Serious charges require immediate control of the record, deadlines, and defense strategy.'],
  ['DUI & Traffic Crimes','Protect your license, record, and options before deadlines narrow them.'],
  ['White Collar & Fraud','Complex allegations demand discreet preparation and careful document review.'],
  ['Domestic Violence Defense','High-stakes allegations require privacy, speed, and disciplined communication.'],
  ['Juvenile Defense','Early decisions can shape a young person’s future long after the case ends.'],
  ['Record Sealing','Where available, clearing the record can help restore practical opportunities.']
];

const stages=[
  ['01','Investigation','Before charges','Preserve the timeline, communications, notices, and details while they are still fresh.'],
  ['02','Charges Filed','Case active','Understand the accusation, evidence, court dates, and immediate decisions.'],
  ['03','Review','After a decision','Start with the ruling, record, and every deadline attached to the next step.']
];

function PageHero({eyebrow,title,accent,copy,image=HERO}){
  return <section className="page-hero">
    <img src={image} alt="" aria-hidden="true"/>
    <div className="page-hero__shade"/>
    <div className="container page-hero__content">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}<br/><em>{accent}</em></h1>
      <p>{copy}</p>
    </div>
  </section>;
}

export function HomePage(props){
  return <CriminalJourney {...props}/>;
}

export function PracticeAreasPage({onPrepare}){
  return <>
    <PageHero eyebrow="PRACTICE AREAS" title="Focused defense for" accent="high-stakes charges." copy="A serious criminal-defense website should make it immediately clear where the firm can help — without making clients hunt through walls of text."/>
    <section className="page-section page-section--light">
      <div className="container practice-editorial">
        <div className="practice-editorial__lead"><span className="eyebrow">WHAT WE HANDLE</span><h2>Clear categories. Serious attention.</h2><p>Clients should know immediately whether the firm handles the problem in front of them.</p></div>
        <div className="practice-editorial__list">
          {practices.map(([title,copy],i)=><article key={title}>
            <span>0{i+1}</span><h3>{title}</h3><p>{copy}</p><button onClick={onPrepare}>Prepare for a consultation <b>→</b></button>
          </article>)}
        </div>
      </div>
    </section>
  </>;
}

export function CaseStagesPage({matterIndex,onMatterChange,onPrepare}){
  return <>
    <PageHero eyebrow="CASE STAGES" title="Know where the" accent="case stands." copy="The pressure changes at each stage. The need for clear timing, documents, and decisions does not."/>
    <section className="page-section case-stage-page">
      <div className="container case-stage-page__grid">
        <div className="case-stage-page__nav">
          {stages.map((s,i)=><button key={s[1]} className={matterIndex===i?'is-active':''} onClick={()=>onMatterChange(i)}>
            <span>{s[0]}</span><div><strong>{s[1]}</strong><small>{s[2]}</small></div><b>→</b>
          </button>)}
        </div>
        <div className="case-stage-page__detail">
          <span className="case-stage-page__number">{stages[matterIndex][0]}</span>
          <span className="eyebrow">{stages[matterIndex][2]}</span>
          <h2>{stages[matterIndex][1]}</h2>
          <p>{stages[matterIndex][3]}</p>
          <div className="case-stage-page__check">
            <strong>Bring into focus</strong>
            <span>Dates and deadlines</span><span>Notices and correspondence</span><span>Documents and evidence</span><span>Questions that still need answers</span>
          </div>
          <button className="button primary" onClick={onPrepare}>Prepare for this stage <b>→</b></button>
        </div>
      </div>
    </section>
  </>;
}

export function AboutPage(){
  return <>
    <PageHero eyebrow="OUR APPROACH" title="Serious counsel." accent="No theatre." copy="Trust is built before the argument begins: by listening carefully, preparing thoroughly, and communicating clearly." image={OFFICE}/>
    <section className="page-section page-section--light">
      <div className="container about-editorial">
        <div><span className="eyebrow">HOW THE WORK SHOULD FEEL</span><h2>Calm in the room.<br/>Pressure on the problem.</h2></div>
        <div className="about-editorial__points">
          <article><span>01</span><h3>Discreet</h3><p>Privacy should be obvious from the first conversation.</p></article>
          <article><span>02</span><h3>Prepared</h3><p>The record comes before performance, assumptions, or noise.</p></article>
          <article><span>03</span><h3>Direct</h3><p>Clients should understand what matters now and what happens next.</p></article>
        </div>
      </div>
    </section>
  </>;
}

export function QuestionsPage(){
  const [open,setOpen]=useState(0);
  return <>
    <PageHero eyebrow="QUESTIONS" title="Know more before" accent="the first conversation." copy="Reduce uncertainty with practical answers about preparation, privacy, and what this website is designed to do." image={DOCUMENTS}/>
    <section className="page-section questions-page">
      <div className="container questions-page__grid">
        <div><span className="eyebrow">COMMON QUESTIONS</span><h2>Straight answers.</h2><p>Short enough to read. Useful enough to act on.</p></div>
        <div className="questions-page__list">
          {faqs.map((item,i)=><button key={item.question} className={open===i?'is-open':''} onClick={()=>setOpen(open===i?-1:i)}>
            <span>0{i+1}</span><strong>{item.question}</strong><b>{open===i?'−':'+'}</b>{open===i?<p>{item.answer}</p>:null}
          </button>)}
        </div>
      </div>
    </section>
  </>;
}

export function ContactPage({onPrepare}){
  return <>
    <PageHero eyebrow="CONTACT" title="Start with a" accent="clear first step." copy="Before any consultation, put the timeline, documents, and questions in order so the conversation begins with substance." image={GAVEL}/>
    <section className="page-section contact-page">
      <div className="container contact-page__grid">
        <div className="contact-page__card">
          <span className="eyebrow">PREPARE FIRST</span>
          <h2>Walk in ready.</h2>
          <p>Create a private preparation checklist in this browser. Nothing is submitted through this demonstration site.</p>
          <button className="button primary" onClick={onPrepare}>Create your checklist <b>→</b></button>
        </div>
        <div className="contact-page__aside">
          <div><span>01</span><strong>Timeline</strong><p>Put the sequence of events in order.</p></div>
          <div><span>02</span><strong>Documents</strong><p>Gather notices, correspondence, and case papers.</p></div>
          <div><span>03</span><strong>Questions</strong><p>Write down what still needs a clear answer.</p></div>
        </div>
      </div>
    </section>
  </>;
}
