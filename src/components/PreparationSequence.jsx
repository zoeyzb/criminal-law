import {stages} from '../content.js';

const Arrow=()=> <span aria-hidden="true">↗</span>;

export default function PreparationSequence({onPrepare}) {
  return <section id="preparation" className="preparation-story section">
    <div className="container preparation-story__head">
      <div><p className="section-label">Preparation / three moves</p><h2>Know what happened.<br/><span>Know what comes next.</span></h2></div>
      <p>A first conversation becomes more useful when the record, the choices, and the immediate next action are visible at the same time.</p>
    </div>
    <div className="container preparation-track">
      <div className="preparation-track__line" aria-hidden="true"/>
      {stages.map((stage,index)=><article className="preparation-step" key={stage.id} data-step={index+1}>
        <div className="preparation-step__number">0{index+1}</div>
        <div className="preparation-step__surface">
          <span>{stage.kicker}</span>
          <h3>{stage.name}</h3>
          <p>{stage.text}</p>
          <div className="preparation-step__diagram" aria-hidden="true">
            <i/><i/><i/>
          </div>
        </div>
      </article>)}
    </div>
    <div className="container preparation-outro">
      <p>Three essentials. One clearer starting point.</p>
      <button className="button primary" onClick={onPrepare}>Create your checklist <Arrow/></button>
    </div>
  </section>;
}
