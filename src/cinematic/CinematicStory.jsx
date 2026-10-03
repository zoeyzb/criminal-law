import {useState} from 'react';
import {compactStages,filmScenes} from './story.js';

function SceneCopy({scene,index}){
  return <div className={'film-copy film-copy--'+scene.id} data-film-copy={index}>
    <span>{scene.eyebrow}</span>
    <h1>{index===0?<>When everything changes,<br/><em>clarity matters.</em></>:scene.title}</h1>
    <p>{scene.line}</p>
  </div>;
}

function JudgeFigure(){
  return <div className="scene-judge" aria-hidden="true">
    <div className="scene-judge__halo"/>
    <div className="scene-judge__head"/>
    <div className="scene-judge__body"/>
    <div className="scene-judge__bench"/>
  </div>;
}

function RecordFigure(){
  return <div className="scene-record" aria-hidden="true">
    <div className="scene-record__person"><i/><b/></div>
    <div className="scene-paper scene-paper--a"><span>CASE FILE</span><i/><i/><i/></div>
    <div className="scene-paper scene-paper--b"><span>DATES</span><i/><i/></div>
    <div className="scene-paper scene-paper--c"><span>NOTES</span><i/><i/><i/></div>
  </div>;
}

function WitnessFigure(){
  return <div className="scene-witness" aria-hidden="true">
    <div className="scene-witness__rail"/>
    <div className="scene-witness__person"><i/><b/></div>
    <div className="scene-witness__stand"/>
    <div className="scene-witness__light"/>
  </div>;
}

export default function CinematicStory({onPrepare,matterIndex,onMatterChange}){
  const [hovered,setHovered]=useState(null);
  return <section className="film" id="approach">
    <div className="film-pin">
      <div className="film-world" aria-hidden="true">
        <img className="film-courtroom" src="/judicial-passage.webp" alt=""/>
        <div className="film-vignette"/>
        <div className="film-light"/>
        <div className="film-frame film-frame--left"/>
        <div className="film-frame film-frame--right"/>
        <JudgeFigure/>
        <RecordFigure/>
        <WitnessFigure/>
      </div>

      <div className="film-ui container">
        {filmScenes.map((scene,index)=><SceneCopy key={scene.id} scene={scene} index={index}/>)}

        <div className="film-progress" aria-hidden="true">
          <span>01</span><i/><span>04</span>
        </div>

        <button className="film-primary" onClick={onPrepare}>Prepare your case <span>↗</span></button>

        <div className="film-stages" id="situation">
          <div className="film-stages__intro">
            <span>Your position</span>
            <h2>Where does the case stand?</h2>
          </div>
          <div className="film-stages__grid">
            {compactStages.map((stage,index)=><button
              key={stage.id}
              className={(matterIndex===index?'is-active ':'')+(hovered===index?'is-hovered':'')}
              onClick={()=>onMatterChange(index)}
              onMouseEnter={()=>setHovered(index)}
              onMouseLeave={()=>setHovered(null)}
              aria-pressed={matterIndex===index}
            >
              <span className="film-stage__index">0{index+1}</span>
              <strong>{stage.title}</strong>
              <small>{stage.label}</small>
              <div className="film-stage__detail">
                <p><b>Focus</b>{stage.focus}</p>
                <p><b>Bring</b>{stage.bring}</p>
                <p><b>Ask</b>{stage.ask}</p>
              </div>
            </button>)}
          </div>
        </div>
      </div>
    </div>
  </section>;
}
