export default function CompactFaq({faqs}){
  return <section className="compact-faq" id="questions">
    <div className="container compact-faq__layout">
      <div>
        <span className="section-label">Before you move forward</span>
        <h2>Remove the avoidable uncertainty.</h2>
      </div>
      <div className="compact-faq__list">
        {faqs.map((item,index)=><details key={item.question}>
          <summary><span>0{index+1}</span>{item.question}<b>+</b></summary>
          <p>{item.answer}</p>
        </details>)}
      </div>
    </div>
  </section>;
}
