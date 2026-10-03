import {prepShots} from './story.js';

const PAPER_PHOTO='https://images.pexels.com/photos/9870146/pexels-photo-9870146.jpeg?auto=compress&cs=tinysrgb&w=1600';

export default function PreparationFilm({onPrepare}){
  return <section className="prep-film" id="preparation">
    <div className="prep-film__pin">
      <div className="case-photo" aria-hidden="true">
        <img src={PAPER_PHOTO} alt=""/>
        <div className="case-photo__shade"/>
        <div className="case-photo__frame"/>
      </div>
      <div className="container prep-film__copy">
        <div className="prep-film__lead">
          <span>Preparing a criminal defense</span>
          <h2>Build the record.<br/>Understand the defense.</h2>
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
