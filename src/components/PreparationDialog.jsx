import {useEffect, useRef, useState} from 'react';
import {essentials, matters} from '../content.js';
import {createBrief} from '../brief.js';

export default function PreparationDialog({open, onClose, matterIndex, onMatterChange, checked, onCheck}) {
  const dialog = useRef(null);
  const closeButton = useRef(null);
  const previousFocus = useRef(null);
  const [notice, setNotice] = useState('');
  const matter = matters[matterIndex];

  useEffect(() => {
    if (!open) return;
    previousFocus.current = document.activeElement;
    setNotice('');
    dialog.current.showModal();
    closeButton.current?.focus();
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.current?.close();
      document.body.style.overflow = oldOverflow;
      previousFocus.current?.focus();
    };
  }, [open]);

  const brief = createBrief(matter, checked);
  const downloadUrl = `/checklists/${matter.id}-${checked.map(value => Number(value)).join('')}.txt`;

  function containFocus(event) {
    if(event.key !== 'Tab') return;
    const controls = [...dialog.current.querySelectorAll('button, select, input, a[href], summary')].filter(element => !element.disabled && element.getClientRects().length);
    const first = controls[0], last = controls.at(-1);
    if(event.shiftKey && document.activeElement === first) {event.preventDefault(); last?.focus();}
    else if(!event.shiftKey && document.activeElement === last) {event.preventDefault(); first?.focus();}
  }

  return <dialog ref={dialog} className="preparation-dialog" onKeyDown={containFocus} aria-labelledby="preparation-title" onCancel={event => {event.preventDefault(); onClose();}} onClick={event => {if(event.target === event.currentTarget) onClose();}}>
    <div className="dialog-inner" data-lenis-prevent>
      <div className="dialog-top"><span className="wordmark small">LAW YOUR WAY</span><button ref={closeButton} className="text-button" onClick={onClose}>Close <span aria-hidden="true">×</span></button></div>
      <h2 id="preparation-title">Make the first conversation count.</h2>
      <p className="dialog-intro">A few essentials, organized in one place. Your selections stay in this page.</p>
      <label className="field-label" htmlFor="matter-choice">Your situation</label>
      <select id="matter-choice" value={matterIndex} onChange={event => {onMatterChange(Number(event.target.value));setNotice('');}}>{matters.map((item,index) => <option value={index} key={item.id}>{item.label}</option>)}</select>
      <fieldset className="checklist"><legend>Preparation checklist</legend>{essentials.map((item,index) => <label key={item}><input type="checkbox" checked={checked[index]} onChange={event => {onCheck(index,event.target.checked);setNotice('');}}/><span>{item}</span></label>)}</fieldset>
      <div className="privacy-note"><strong>Keep the details private.</strong><p>Nothing is submitted here. Share documents only through a secure channel confirmed by a verified firm.</p></div>
      <div className="dialog-bottom"><span>{checked.filter(Boolean).length} of 3 essentials organized</span><a className="button primary" href={downloadUrl} download="law-your-way-checklist.txt" onClick={() => setNotice('Download requested. Check your browser downloads.')}>Download checklist <span aria-hidden="true">↗</span></a><p role="status">{notice || 'A personal preparation aid. No legal advice or case submission.'}</p></div>
      <details className="brief-fallback"><summary>View text version</summary><pre>{brief}</pre></details>
    </div>
  </dialog>;
}
