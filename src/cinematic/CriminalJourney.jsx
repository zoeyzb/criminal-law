import {useState} from 'react';
import HeroDepthScene from '../components/HeroDepthScene.jsx';
import {faqs} from '../content.js';

const PAPER_PHOTO='https://images.pexels.com/photos/7875863/pexels-photo-7875863.jpeg?auto=compress&dpr=1&w=1260';
const LAWYER_PHOTO='https://images.pexels.com/photos/7841443/pexels-photo-7841443.jpeg?auto=compress&dpr=1&w=1260';

const stages=[
  {title:'Investigation',sub:'Before charges',line:'Protect the timeline.',meta:'Notices · interviews · dates'},
  {title:'Charges filed',sub:'Case active',line:'Understand the allegations.',meta:'Charging papers · court dates'},
  {title:'Review',sub:'After a decision',line:'Start with the ruling.',meta:'Decision · record · deadlines'}
];

const practices=[
  ['Misdemeanor & felony defense','Serious charges, clear strategy.'],
  ['DUI & traffic crimes','Protect your record and your options.'],
  ['White collar & fraud','Discreet defense for complex allegations.'],
  ['Domestic violence','High-stakes representation with discretion.'],
  ['Juvenile defense','Protecting futures when the stakes are early.'],
  ['Record sealing','A cleaner path forward where available.']
];

export default function CriminalJourney({onPrepare,matterIndex,onMatterChange,paused=false}){
  const [openFaq,setOpenFaq]=useState(0);
  return <div className="journey" id="approach">
    <section className="journey-chapter journey-chapter--hero" data-journey-chapter="0">
      <div className="hero-depth-scene-wrap"><HeroDepthScene paused={paused}/></div>
      <div className="glow-path" aria-hidden="true"><i/><i/><i/></div>
      <div className="container hero-grid">
        <div className="chapter-copy chapter-copy--left">
          <span>Your rights. Our focus.</span>
          <h1>Experienced<br/>Criminal Defense<br/><em>When It Matters.</em></h1>
          <p className="hero-subline">Strategic. Thorough. Discreet.</p>
          <p className="hero-support">Criminal charges can threaten your freedom, reputation, and future. Start with a clear understanding of what matters now.</p>
          <div className="hero-actions">
            <button className="button primary" onClick={onPrepare}>Speak with an attorney <b>→</b></button>
            <a className="button secondary" href="#situation">Understand the process <b>↘</b></a>
          </div>
          <div className="trust-strip">
            <div><span>◆</span><strong>Confidential & Discreet</strong><small>Your privacy comes first.</small></div>
            <div><span>◆</span><strong>Strategic Advocacy</strong><small>Focused on the decisions that matter.</small></div>
            <div><span>◆</span><strong>Client-Focused</strong><small>Clear guidance, without noise.</small></div>
          </div>
        </div>
      </div>
      <div className="chapter-marker">01 / 07</div>
    </section>

    <section className="journey-chapter journey-chapter--practice" id="practice" data-journey-chapter="1">
      <div className="container practice-layout">
        <div className="practice-copy">
          <span>Practice areas</span>
          <h2>Defense for the charges that change everything.</h2>
          <p>Focused criminal defense across the moments that put your freedom, record, or future at risk.</p>
        </div>
        <div className="practice-grid">
          {practices.map(([title,line],index)=><article key={title}>
            <span>0{index+1}</span>
            <h3>{title}</h3>
            <p>{line}</p>
            <i aria-hidden="true">↗</i>
          </article>)}
        </div>
      </div>
      <div className="chapter-marker">02 / 07</div>
    </section>

    <section className="journey-chapter journey-chapter--position" id="situation" data-journey-chapter="2">
      <div className="container">
        <div className="position-intro">
          <span>Your case. A clear path forward.</span>
          <h2>Know where your case stands.</h2>
          <p>Three moments. Clearer next steps.</p>
        </div>
        <div className="case-stage-plaque-wrap" role="group" aria-label="Case stage">
          <div className="stage-path" aria-hidden="true"/>
          {stages.map((stage,index)=><button key={stage.title} className={'case-stage-plaque '+(matterIndex===index?'is-active':'')} aria-pressed={matterIndex===index} onClick={()=>onMatterChange(index)}>
            <span className="case-stage-plaque__number">0{index+1}</span>
            <span className="case-stage-plaque__icon" aria-hidden="true">{index===0?'⌕':index===1?'§':'▤'}</span>
            <strong>{stage.title}</strong>
            <small>{stage.sub}</small>
            <p>{stage.line}</p>
            <em>{stage.meta}</em>
            <b aria-hidden="true">→</b>
          </button>)}
        </div>
      </div>
      <div className="chapter-marker">03 / 07</div>
    </section>

    <section className="journey-chapter journey-chapter--approach" id="preparation" data-journey-chapter="3">
      <div className="chapter-photo chapter-photo--papers" aria-hidden="true">
        <img src={PAPER_PHOTO} alt=""/>
        <div/>
      </div>
      <div className="container chapter-copy chapter-copy--left compact">
        <span>Preparation before pressure</span>
        <h2>Build the record.<br/>Understand the defense.</h2>
        <p>Timeline · documents · evidence · next steps</p>
        <div className="approach-points">
          <div><b>01</b><strong>Understand the facts</strong><small>Separate what is known from what is assumed.</small></div>
          <div><b>02</b><strong>Build the strategy</strong><small>Clarify the issues, options, timing, and risk.</small></div>
          <div><b>03</b><strong>Know the next move</strong><small>Leave with a clear action and responsibility.</small></div>
        </div>
      </div>
      <div className="chapter-marker">04 / 07</div>
    </section>

    <section className="journey-chapter journey-chapter--about" data-journey-chapter="4">
      <div className="chapter-photo chapter-photo--lawyer" aria-hidden="true">
        <img src={LAWYER_PHOTO} alt=""/>
        <div/>
      </div>
      <div className="container chapter-copy chapter-copy--left compact">
        <span>People first. Strategy always.</span>
        <h2>Strategic counsel<br/>when the stakes are personal.</h2>
        <p>Discreet preparation. Clear communication. Serious attention to the record.</p>
        <div className="trust-strip trust-strip--stacked">
          <div><span>◆</span><strong>Discretion</strong><small>Privacy before publicity.</small></div>
          <div><span>◆</span><strong>Preparation</strong><small>Nothing important left to chance.</small></div>
          <div><span>◆</span><strong>Relentless Advocacy</strong><small>Focused on what protects your future.</small></div>
        </div>
      </div>
      <div className="chapter-marker">05 / 07</div>
    </section>

    <section className="journey-chapter journey-chapter--faq" id="questions" data-journey-chapter="5">
      <div className="container faq-slide">
        <div>
          <span>Real questions. Straight answers.</span>
          <h2>Questions,<br/><em>clearly answered.</em></h2>
          <p>Fear grows when the process feels unclear. Start with the questions that usually matter first.</p>
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
      <div className="chapter-marker">06 / 07</div>
    </section>

    <section className="journey-end" data-journey-chapter="6">
      <div className="container journey-end__copy">
        <span>Before the conversation begins</span>
        <h2>Start with clarity.</h2>
        <p>Put the facts in order. Protect your privacy. Know what to ask next.</p>
        <button className="button primary" onClick={onPrepare}>Prepare your case <b>→</b></button>
      </div>
      <div className="chapter-marker">07 / 07</div>
    </section>
  </div>;
}
