import {useState} from 'react';
import {compactStages,filmScenes} from './story.js';

function SceneCopy({scene,index}){
  return <div className={'film-copy film-copy--'+scene.id} data-film-copy={index}>
    <span>{scene.eyebrow}</span>
    {index===0
      ? <h1>When everything changes,<br/><em>clarity matters.</em></h1>
      : <h2>{scene.title}</h2>}
    <p>{scene.line}</p>
  </div>;
}

export default function CinematicStory({onPrepare,matterIndex,onMatterChange}){
  const [hovered,setHovered]=useState(null);
  return <section className="film" id="approach">
    <div className="film-pin">
      <div className="film-depth-guides" aria-hidden="true">
        <i/><i/><i/>
      </div>

      <div className="film-ui container">
        {filmScenes.map((scene,index)=><SceneCopy key={scene.id} scene={scene} index={index}/>)}

        <div className="film-progress" aria-hidden="true"><span>01</span><i/><span>04</span></div>
        <button className="film-primary" onClick={onPrepare}>Prepare your case <span>↗</span></button>

        <div className="film-stages" id="situation">
          <div className="film-stages__intro">
            <span>Your position</span>
            <h2>Where does the case stand?</h2>
            <p>Choose the point closest to where things stand now.</p>
          </div>
          <div className="stage-rail">
            {compactStages.map((stage,index)=><button
              key={stage.id}
              className={(matterIndex===index?'is-active ':'')+(hovered===index?'is-hovered':'')}
              onClick={()=>onMatterChange(index)}
              onMouseEnter={()=>setHovered(index)}
              onMouseLeave={()=>setHovered(null)}
              aria-pressed={matterIndex===index}
            >
              <span className="stage-rail__number">0{index+1}</span>
              <div className="stage-rail__title"><strong>{stage.title}</strong><small>{stage.label}</small></div>
              <div className="stage-rail__detail">
                <span>{stage.focus}</span>
                <span>{stage.bring}</span>
                <span>{stage.ask}</span>
              </div>
              <span className="stage-rail__arrow">↗</span>
            </button>)}
          </div>
        </div>
      </div>
    </div>
  </section>;
}
