import {useState} from 'react';
import {faqs} from '../content.js';

const HERO_GAVEL='https://images.pexels.com/photos/5668484/pexels-photo-5668484.jpeg?auto=compress&dpr=1&w=1600';
const PAPER_PHOTO='https://images.pexels.com/photos/6077447/pexels-photo-6077447.jpeg?auto=compress&dpr=1&w=1600';

const practices=[
  ['Misdemeanor & Felony','Defense'],
  ['DUI & Traffic','Crimes'],
  ['White Collar','& Fraud'],
  ['Domestic Violence','Defense'],
  ['Juvenile','Defense']
];

const stages=[
  {title:'Investigation',label:'Before charges',headline:'Move early. Protect the record.',copy:'Preserve the timeline, communications, notices, and details that can become harder to recover later.'},
  {title:'Charges Filed',label:'Case active',headline:'Know exactly what is alleged.',copy:'Start with the charging papers, court dates, available evidence, and the decisions that cannot wait.'},
  {title:'Review',label:'After a decision',headline:'Read the ruling against the record.',copy:'Bring the order, the record, and every deadline attached to the next available step.'}
];

export default function CriminalJourney({onPrepare,matterIndex,onMatterChange}){
  const [openFaq,setOpenFaq]=useState(0);
  const activeStage=stages[matterIndex];

  return <div className="journey">
    <section className="hero-reference" data-journey-chapter="0">
      <div className="hero-reference__veil" aria-hidden="true"/>
      <div className="hero-reference__light" aria-hidden="true"/>
      <div className="hero-reference__object" aria-hidden="true"><img src={HERO_GAVEL} alt=""/></div>

      <div className="container hero-reference__inner">
        <div className="hero-reference__copy">
          <span className="eyebrow">YOUR RIGHTS. OUR FOCUS.</span>
          <h1>Experienced<br/>Criminal Defense<br/><em>When It Matters.</em></h1>
          <p className="hero-reference__tag">Strategic. Thorough. Discreet.</p>
          <p className="hero-reference__body">Serious criminal charges demand a defense built around the record, the timing, and the decisions that protect your future.</p>
          <div className="hero-actions">
            <button className="button primary" onClick={onPrepare}>Speak with an Attorney <b>→</b></button>
            <a className="button secondary" href="/case-stages">Learn Our Approach <b>↘</b></a>
          </div>
        </div>
      </div>

      <div className="practice-rail" aria-label="Practice areas">
        <div className="container">
          {practices.map(([title,sub],index)=><a href="/practice-areas" key={title}>
            <span>0{index+1}</span>
            <strong>{title}<small>{sub}</small></strong>
            <b aria-hidden="true">↗</b>
          </a>)}
        </div>
      </div>
    </section>

    <section className="trust-story" data-journey-chapter="1">
      <div className="container trust-story__grid">
        <div className="trust-story__lead">
          <span className="eyebrow">A DEFENSE SHOULD FEEL CONTROLLED</span>
          <h2>Less uncertainty.<br/>More command of what happens next.</h2>
        </div>
        <div className="trust-story__points">
          <article><span>01</span><h3>Private from the first conversation.</h3><p>Discretion is not a feature. It is the starting condition.</p></article>
          <article><span>02</span><h3>Prepared before pressure.</h3><p>Dates, documents, evidence, and unanswered questions in one view.</p></article>
          <article><span>03</span><h3>Clear about the next move.</h3><p>Know the decision in front of you, the timing, and who owns the next action.</p></article>
        </div>
      </div>
    </section>

    <section className="case-story" id="situation" data-journey-chapter="2">
      <div className="container case-story__layout">
        <div className="case-story__intro">
          <span className="eyebrow">CASE STAGES</span>
          <h2>Where does your case stand?</h2>
          <p>Choose the stage closest to what is happening now.</p>
          <div className="case-story__tabs" role="group" aria-label="Case stage">
            {stages.map((stage,index)=><button key={stage.title} onClick={()=>onMatterChange(index)} aria-pressed={matterIndex===index} className={matterIndex===index?'is-active':''}>
              <span>0{index+1}</span>
              <div><strong>{stage.title}</strong><small>{stage.label}</small></div>
              <b aria-hidden="true">→</b>
            </button>)}
          </div>
        </div>

        <div className="case-story__panel" aria-live="polite">
          <div className="case-story__panel-number">0{matterIndex+1}</div>
          <span className="eyebrow">{activeStage.label}</span>
          <h3>{activeStage.headline}</h3>
          <p>{activeStage.copy}</p>
          <button className="text-link" onClick={onPrepare}>Prepare for this stage <span>→</span></button>
        </div>
      </div>
    </section>

    <section className="approach-story" id="preparation" data-journey-chapter="3">
      <div className="approach-story__photo" aria-hidden="true"><img src={PAPER_PHOTO} alt=""/></div>
      <div className="container approach-story__inner">
        <div className="approach-story__copy">
          <span className="eyebrow">PREPARATION BEFORE PRESSURE</span>
          <h2>Build the record.<br/>Then build the defense.</h2>
          <p>The first useful advantage is not noise. It is structure.</p>
          <div className="approach-story__steps">
            <div><span>01</span><strong>Build the timeline.</strong><small>Events, people, contact, notices.</small></div>
            <div><span>02</span><strong>Read the record.</strong><small>Documents, evidence, dates, gaps.</small></div>
            <div><span>03</span><strong>Define the next move.</strong><small>Options, timing, responsibility.</small></div>
          </div>
        </div>
      </div>
    </section>

    <section className="faq-story" id="questions" data-journey-chapter="4">
      <div className="container faq-story__grid">
        <div>
          <span className="eyebrow">BEFORE YOU CALL</span>
          <h2>Questions,<br/><em>clearly answered.</em></h2>
          <p>Know what to bring, what this site does, and what the first conversation is for.</p>
        </div>
        <div className="faq-story__list">
          {faqs.map((item,index)=><button key={item.question} className={openFaq===index?'is-open':''} onClick={()=>setOpenFaq(openFaq===index?-1:index)}>
            <span>0{index+1}</span>
            <strong>{item.question}</strong>
            <b>{openFaq===index?'−':'+'}</b>
            {openFaq===index?<p>{item.answer}</p>:null}
          </button>)}
        </div>
      </div>
    </section>

    <section className="final-story" data-journey-chapter="5">
      <div className="container final-story__inner">
        <span className="eyebrow">WHEN THE STAKES ARE PERSONAL</span>
        <h2>Start with a clear first conversation.</h2>
        <p>Bring the facts. Protect your privacy. Know what comes next.</p>
        <button className="button primary" onClick={onPrepare}>Prepare Your Case <b>→</b></button>
      </div>
    </section>
  </div>;
}
