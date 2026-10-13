import {useState} from 'react';
import {faqs} from '../content.js';

const HERO_GAVEL='https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&dpr=1&w=1600';
const PAPER_PHOTO='https://images.pexels.com/photos/6077447/pexels-photo-6077447.jpeg?auto=compress&dpr=1&w=1600';

const practices=[
  ['Misdemeanor & Felony','Defense'],
  ['DUI & Traffic','Crimes'],
  ['White Collar','& Fraud'],
  ['Domestic Violence','Defense'],
  ['Juvenile','Defense'],
  ['Other Criminal','Charges']
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
          <p className="hero-reference__tag">Strategic. Thorough. Relentless.</p>
          <p className="hero-reference__body">When a criminal charge puts your freedom, reputation, or future at risk, the first move should be clear, private, and deliberate.</p>
          <div className="hero-actions">
            <button className="button primary" onClick={onPrepare}>Speak with an Attorney <b>→</b></button>
            <a className="button secondary" href="/case-stages">Learn Our Approach</a>
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

    <section className="difference-story" data-journey-chapter="1">
      <div className="container difference-story__grid">
        <div className="difference-story__headline">
          <span className="eyebrow">A HIGHER STANDARD OF DEFENSE</span>
          <h2>More Than a Defense.<br/><em>A Different Approach.</em></h2>
        </div>
        <div className="difference-story__body">
          <p>A serious defense begins before anyone enters a courtroom. It starts with listening closely, organizing the record, identifying what is urgent, and making the next decision with a clear view of the risk.</p>
          <a href="/about">How we approach a case <span>→</span></a>
        </div>
        <div className="difference-story__principles">
          <div><span>01</span><strong>Private</strong><small>Discretion from the first conversation.</small></div>
          <div><span>02</span><strong>Prepared</strong><small>The record before the rhetoric.</small></div>
          <div><span>03</span><strong>Direct</strong><small>Clear answers and clear expectations.</small></div>
          <div><span>04</span><strong>Responsive</strong><small>Attention when timing matters.</small></div>
        </div>
      </div>
    </section>

    <section className="case-cinema" id="situation" data-journey-chapter="2">
      <div className="container case-cinema__header">
        <div>
          <span className="eyebrow">YOUR CASE. A CLEAR PATH FORWARD.</span>
          <h2>Know Where<br/><em>Your Case Stands.</em></h2>
        </div>
        <p>Three moments. Clear next steps.</p>
      </div>

      <div className="container case-cinema__cards" role="group" aria-label="Case stage">
        {stages.map((stage,index)=><button key={stage.title} onClick={()=>onMatterChange(index)} aria-pressed={matterIndex===index} className={matterIndex===index?'is-active':''}>
          <span className="case-cinema__num">0{index+1}</span>
          <small>{stage.label}</small>
          <strong>{stage.title}</strong>
          <p>{stage.copy}</p>
          <b>→</b>
        </button>)}
      </div>

      <div className="container case-cinema__active" aria-live="polite">
        <span>0{matterIndex+1}</span>
        <div><strong>{activeStage.headline}</strong><p>{activeStage.copy}</p></div>
        <button className="button primary" onClick={onPrepare}>Prepare for this stage <b>→</b></button>
      </div>
    </section>

    <section className="approach-story" id="preparation" data-journey-chapter="3">
      <div className="approach-story__photo" aria-hidden="true"><img src={PAPER_PHOTO} alt=""/></div>
      <div className="container approach-story__inner">
        <div className="approach-story__copy">
          <span className="eyebrow">A CLEAR PROCESS. A STRONGER DEFENSE.</span>
          <h2>Preparation is the first advantage.</h2>
          <p>Before strategy comes structure. Bring the record into focus, then decide what deserves attention first.</p>
          <div className="approach-story__steps">
            <div><span>01</span><strong>Listen.</strong><small>Understand what happened and what is urgent.</small></div>
            <div><span>02</span><strong>Organize.</strong><small>Timeline, documents, evidence, deadlines.</small></div>
            <div><span>03</span><strong>Assess.</strong><small>Options, exposure, timing, uncertainty.</small></div>
            <div><span>04</span><strong>Act.</strong><small>Define the next move and who owns it.</small></div>
          </div>
        </div>
      </div>
    </section>

    <section className="faq-story" id="questions" data-journey-chapter="4">
      <div className="container faq-story__grid">
        <div>
          <span className="eyebrow">BEFORE YOU CALL</span>
          <h2>Get informed.<br/><em>Then decide.</em></h2>
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
        <h2>Start the conversation with clarity.</h2>
        <p>Bring the facts. Protect your privacy. Know what comes next.</p>
        <button className="button primary" onClick={onPrepare}>Prepare Your Case <b>→</b></button>
      </div>
    </section>
  </div>;
}
