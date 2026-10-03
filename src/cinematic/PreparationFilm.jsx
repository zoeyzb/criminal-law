import {prepShots} from './story.js';

export default function PreparationFilm({onPrepare}){
  return <section className="prep-film" id="preparation">
    <div className="prep-film__pin">
      <div className="prep-film__visual" aria-hidden="true">
        <div className="prep-film__desk"/>
        <div className="prep-film__folder"/>
        <div className="prep-film__pages">
          <i/><i/><i/>
        </div>
        <div className="prep-film__conversation">
          <span/><span/>
        </div>
        <div className="prep-film__door"/>
      </div>
      <div className="container prep-film__copy">
        <div className="prep-film__lead">
          <span>Preparation / three moves</span>
          <h2>Less noise.<br/>Better questions.</h2>
        </div>
        <div className="prep-film__shots">
          {prepShots.map((shot,index)=><article key={shot.id} data-prep-shot={index}>
            <span>{shot.number}</span>
            <h3>{shot.title}</h3>
            <p>{shot.line}</p>
          </article>)}
        </div>
        <button className="button primary prep-film__cta" onClick={onPrepare}>Create your checklist <span>↗</span></button>
      </div>
    </div>
  </section>;
}
