import {useState} from 'react';
import HeroDepthScene from '../components/HeroDepthScene.jsx';
import {faqs} from '../content.js';

const PAPER_PHOTO='https://images.pexels.com/photos/7875863/pexels-photo-7875863.jpeg?auto=compress&dpr=1&w=1440';
const LAWYER_PHOTO='https://images.pexels.com/photos/7841443/pexels-photo-7841443.jpeg?auto=compress&dpr=1&w=1440';

const stages=[
  {title:'Investigation',sub:'Before charges',line:'Protect the timeline.',meta:'Notices · interviews · dates'},
  {title:'Charges filed',sub:'Case active',line:'Understand what the state must prove.',meta:'Charging papers · evidence · court dates'},
  {title:'Review',sub:'After a decision',line:'Start with the ruling and the record.',meta:'Decision · record · deadlines'}
];

const practices=[
  'Misdemeanor & felony defense',
  'DUI & traffic crimes',
  'White collar & fraud',
  'Domestic violence',
  'Juvenile defense'
];

export default function CriminalJourney({onPrepare,matterIndex,onMatterChange,paused=false}){
  const [openFaq,setOpenFaq]=useState(0);

  return <div className="journey" id="approach">
    <section className="journey-chapter journey-chapter--hero" data-journey-chapter="0">
      <div className="hero-depth-scene-wrap"><HeroDepthScene paused={paused}/></div>
      <div className="glow-path" aria-hidden="true"><i/><i/></div>

      <div className="container hero-shell">
        <div className="chapter-copy chapter-copy--hero">
          <span>Your rights. Our focus.</span>
          <h1>Experienced<br/>Criminal Defense<br/><em>When It Matters.</em></h1>
          <p className="hero-subline">Strategic. Thorough. Discreet.</p>
          <p className="hero-support">When a charge can change your future, the first priority is control: understand the record, the risk, and the next decision.</p>
          <div className="hero-actions">
            <button className="button primary" onClick={onPrepare}>Speak with an attorney <b>→</b></button>
            <a className="button secondary" href="#situation">See the case path <b>↘</b></a>
          </div>

          <div className="trust-strip" aria-label="Firm principles">
            <div><strong>Confidential</strong><small>Private from the first conversation.</small></div>
            <div><strong>Strategic</strong><small>Focused on leverage, timing, and risk.</small></div>
            <div><strong>Responsive</strong><small>Clear communication when timing matters.</small></div>
          </div>
        </div>
      </div>

      <div className="practice-rail" id="practice" aria-label="Practice areas">
        <div className="container">
          {practices.map((item,index)=><a href="#preparation" key={item}>
            <span>0{index+1}</span>
            <strong>{item}</strong>
            <b aria-hidden="true">↗</b>
          </a>)}
        </div>
      </div>
      <div className="chapter-marker">01 / 06</div>
    </section>

    <section className="journey-chapter journey-chapter--position" id="situation" data-journey-chapter="1">
      <div className="container case-stage-shell">
        <div className="position-intro">
          <span>Your case. A clear path forward.</span>
          <h2>Know where the case stands.</h2>
          <p>The pressure changes. The need for clarity does not.</p>
        </div>

        <div className="case-stage-editorial" role="group" aria-label="Case stage">
          {stages.map((stage,index)=><button key={stage.title} className={matterIndex===index?'is-active':''} aria-pressed={matterIndex===index} onClick={()=>onMatterChange(index)}>
            <span className="case-stage-editorial__number">0{index+1}</span>
            <small>{stage.sub}</small>
            <strong>{stage.title}</strong>
            <p>{stage.line}</p>
            <em>{stage.meta}</em>
          </button>)}
        </div>
      </div>
      <div className="chapter-marker">02 / 06</div>
    </section>

    <section className="journey-chapter journey-chapter--preparation" id="preparation" data-journey-chapter="2">
      <div className="chapter-photo chapter-photo--papers" aria-hidden="true">
        <img src={PAPER_PHOTO} alt=""/>
        <div/>
      </div>
      <div className="container">
        <div className="chapter-copy compact">
          <span>Preparation before pressure</span>
          <h2>Build the record.<br/><em>Then build the defense.</em></h2>
          <p>Timeline · documents · evidence · deadlines</p>

          <div className="approach-lines">
            <div><b>01</b><strong>What happened?</strong><small>Put events, people, notices, and dates in order.</small></div>
            <div><b>02</b><strong>What can be proved?</strong><small>Separate the record from assumptions and noise.</small></div>
            <div><b>03</b><strong>What comes next?</strong><small>Define the next action, deadline, and responsibility.</small></div>
          </div>
        </div>
      </div>
      <div className="chapter-marker">03 / 06</div>
    </section>

    <section className="journey-chapter journey-chapter--counsel" data-journey-chapter="3">
      <div className="chapter-photo chapter-photo--lawyer" aria-hidden="true">
        <img src={LAWYER_PHOTO} alt=""/>
        <div/>
      </div>
      <div className="container">
        <div className="chapter-copy compact">
          <span>Serious counsel. No theatre.</span>
          <h2>Calm in the room.<br/><em>Pressure on the problem.</em></h2>
          <p>Discretion, preparation, and direct communication should feel obvious before a client ever signs anything.</p>
          <div className="counsel-proof">
            <div><strong>Private</strong><span>Your situation is treated with discretion.</span></div>
            <div><strong>Prepared</strong><span>The record comes before the performance.</span></div>
            <div><strong>Direct</strong><span>You should know what matters now and what happens next.</span></div>
          </div>
        </div>
      </div>
      <div className="chapter-marker">04 / 06</div>
    </section>

    <section className="journey-chapter journey-chapter--faq" id="questions" data-journey-chapter="4">
      <div className="container faq-slide">
        <div>
          <span>Before you call</span>
          <h2>Questions,<br/><em>clearly answered.</em></h2>
          <p>Reduce uncertainty before the first conversation.</p>
        </div>
        <div className="faq-slide__items">
          {faqs.map((item,index)=><button key={item.question} className={openFaq===index?'is-open':''} onClick={()=>setOpenFaq(openFaq===index?-1:index)}>
            <span>0{index+1}</span>
            <strong>{item.question}</strong>
            <em>{openFaq===index?'−':'+'}</em>
            {openFaq===index?<p>{item.answer}</p>:null}
          </button>)}
        </div>
      </div>
      <div className="chapter-marker">05 / 06</div>
    </section>

    <section className="journey-end" data-journey-chapter="5">
      <div className="container journey-end__copy">
        <span>When the stakes are personal</span>
        <h2>Start with clarity.</h2>
        <p>Put the facts in order. Protect your privacy. Know what to ask next.</p>
        <button className="button primary" onClick={onPrepare}>Prepare your case <b>→</b></button>
      </div>
      <div className="chapter-marker">06 / 06</div>
    </section>
  </div>;
}
