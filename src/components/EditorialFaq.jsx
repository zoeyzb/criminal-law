export default function EditorialFaq({faqs}) {
  return <section id="questions" className="questions-section section">
    <div className="container questions-layout">
      <div className="questions-heading">
        <p className="section-label">Questions before action</p>
        <h2>Remove the<br/>avoidable uncertainty.</h2>
        <p>This site helps organize a first conversation. It does not replace advice from a qualified attorney who has reviewed the actual record.</p>
      </div>
      <div className="faq-list">
        {faqs.map((item,index)=><details key={item.question}>
          <summary><span className="faq-number">0{index+1}</span><span className="faq-question">{item.question}</span><span className="faq-plus" aria-hidden="true">+</span></summary>
          <div className="faq-answer"><p>{item.answer}</p></div>
        </details>)}
      </div>
    </div>
  </section>;
}
