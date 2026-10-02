import {motion} from 'motion/react';

const principles=[
  {number:'01',kicker:'Listen',title:'Start with what happened.',text:'Before strategy comes the account: events, people, documents, dates, and the questions that still do not have answers.'},
  {number:'02',kicker:'Understand',title:'Make the record legible.',text:'Separate what is known from what is assumed. Put the important dates, paperwork, and uncertainty where they can be seen clearly.'},
  {number:'03',kicker:'Act',title:'Define the next informed step.',text:'A useful conversation should leave responsibilities, timing, open questions, and the immediate next action easier to understand.'},
];

export default function PrinciplesSequence({paused}) {
  return <section id="approach" className="principles-section section">
    <div className="container principles-intro">
      <p className="section-label">Before the courtroom</p>
      <h2>A defense begins<br/>with the whole picture.</h2>
      <p>Documents matter. So do context, sequence, priorities, and the life around the case.</p>
    </div>
    <div className="container principles-stage">
      {principles.map((item,index)=><motion.article
        className="principle-card"
        key={item.number}
        initial={paused?false:{opacity:0,y:64,rotateX:7}}
        whileInView={{opacity:1,y:0,rotateX:0}}
        viewport={{once:false,amount:.45}}
        transition={{duration:paused?0:.65,delay:paused?0:index*.07,ease:[.22,1,.36,1]}}
      >
        <div className="principle-card__number">{item.number}</div>
        <div className="principle-card__body"><span>{item.kicker}</span><h3>{item.title}</h3><p>{item.text}</p></div>
        <div className="principle-card__edge" aria-hidden="true"/>
      </motion.article>)}
    </div>
  </section>;
}
