import {useState} from 'react';
import {faqs} from '../content.js';

const PAPER_PHOTO='https://images.pexels.com/photos/7875863/pexels-photo-7875863.jpeg?auto=compress&dpr=1&w=1260';
const LAWYER_PHOTO='https://images.pexels.com/photos/7841443/pexels-photo-7841443.jpeg?auto=compress&dpr=1&w=1260';

const stages=[
  {title:'Investigation',sub:'Before charges',line:'Preserve the timeline.',meta:'Notices · interviews · dates'},
  {title:'Charges filed',sub:'Case active',line:'Understand the allegations.',meta:'Charging papers · court dates'},
  {title:'Review',sub:'After a decision',line:'Start with the ruling.',meta:'Decision · record · deadlines'}
];

export default function CriminalJourney({onPrepare,matterIndex,onMatterChange}){
  const [openFaq,setOpenFaq]=useState(0);
  return <div className="journey" id="approach">
    <section className="journey-chapter journey-chapter--hero" data-journey-chapter="0">
      <div className="container chapter-copy chapter-copy--left">
        <span>Criminal defense</span>
        <h1>When everything changes,<br/><em>clarity matters.</em></h1>
        <p>Facts. Rights. What comes next.</p>
        <button className="button primary" onClick={onPrepare}>Prepare your case <b>↗</b></button>
      </div>
      <div className="chapter-marker">01 / 09</div>
    </section>

    <section className="journey-chapter" data-journey-chapter="1">
      <div className="container chapter-copy chapter-copy--left compact">
        <span>Before charges</span>
        <h2>Protect the timeline.</h2>
        <p>Calls. Notices. Interviews. Dates.</p>
        <div className="legal-note">
          <strong>Investigation</strong>
          <small>What happened first can matter later.</small>
        </div>
      </div>
      <div className="chapter-marker">02 / 09</div>
    </section>

    <section className="journey-chapter" data-journey-chapter="2">
      <div className="chapter-photo chapter-photo--lawyer" aria-hidden="true">
        <img src={LAWYER_PHOTO} alt=""/>
        <div/>
      </div>
      <div className="container chapter-copy chapter-copy--left compact">
        <span>After charges</span>
        <h2>Know the case<br/>against you.</h2>
        <p>Charges. Evidence. Deadlines.</p>
      </div>
      <div className="chapter-marker">03 / 09</div>
    </section>

    <section className="journey-chapter" data-journey-chapter="3">
      <div className="chapter-photo chapter-photo--papers" aria-hidden="true">
        <img src={PAPER_PHOTO} alt=""/>
        <div/>
      </div>
      <div className="container chapter-copy chapter-copy--left compact">
        <span>The record</span>
        <h2>Build the facts<br/>before the argument.</h2>
        <p>Timeline. Documents. Evidence.</p>
      </div>
      <div className="chapter-marker">04 / 09</div>
    </section>

    <section className="journey-chapter journey-chapter--position" id="situation" data-journey-chapter="4">
      <div className="container">
        <div className="position-intro">
          <span>Your position</span>
          <h2>Where does the case stand?</h2>
        </div>
        <div className="case-timeline" role="group" aria-label="Case stage">
          <div className="case-timeline__line" aria-hidden="true"/>
          {stages.map((stage,index)=><button key={stage.title} className={matterIndex===index?'is-active':''} aria-pressed={matterIndex===index} onClick={()=>onMatterChange(index)}>
            <span className="case-timeline__dot"><i/></span>
            <span className="case-timeline__number">0{index+1}</span>
            <strong>{stage.title}</strong>
            <small>{stage.sub}</small>
            <p>{stage.line}</p>
            <em>{stage.meta}</em>
          </button>)}
        </div>
      </div>
      <div className="chapter-marker">05 / 09</div>
    </section>

    <section className="journey-chapter" id="preparation" data-journey-chapter="5">
      <div className="chapter-photo chapter-photo--papers chapter-photo--close" aria-hidden="true">
        <img src={PAPER_PHOTO} alt=""/>
        <div/>
      </div>
      <div className="container chapter-copy chapter-copy--left compact">
        <span>Preparing the defense / 01</span>
        <h2>Build the case record.</h2>
        <p>Timeline · documents · evidence</p>
      </div>
      <div className="chapter-marker">06 / 09</div>
    </section>

    <section className="journey-chapter" data-journey-chapter="6">
      <div className="chapter-photo chapter-photo--lawyer chapter-photo--close" aria-hidden="true">
        <img src={LAWYER_PHOTO} alt=""/>
        <div/>
      </div>
      <div className="container chapter-copy chapter-copy--left compact">
        <span>Preparing the defense / 02</span>
        <h2>Understand the defense.</h2>
        <p>Issues · options · risk</p>
      </div>
      <div className="chapter-marker">07 / 09</div>
    </section>

    <section className="journey-chapter" data-journey-chapter="7">
      <div className="container chapter-copy chapter-copy--left compact">
        <span>Preparing the defense / 03</span>
        <h2>Know the next move.</h2>
        <p>Action · deadline · responsibility</p>
        <button className="button primary" onClick={onPrepare}>Create your checklist <b>↗</b></button>
      </div>
      <div className="chapter-marker">08 / 09</div>
    </section>

    <section className="journey-chapter journey-chapter--faq" id="questions" data-journey-chapter="8">
      <div className="container faq-slide">
        <div>
          <span>Before you move forward</span>
          <h2>Four things to know.</h2>
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
      <div className="chapter-marker">09 / 09</div>
    </section>

    <section className="journey-end">
      <div className="container journey-end__copy">
        <span>Before the conversation begins</span>
        <h2>Walk in prepared.</h2>
        <p>Put the facts in order. Keep the questions close.</p>
        <button className="button primary" onClick={onPrepare}>Create your checklist <b>↗</b></button>
      </div>
    </section>
  </div>;
}
