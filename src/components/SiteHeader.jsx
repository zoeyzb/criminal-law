import {useEffect,useRef,useState} from 'react';

const Arrow=()=> <span aria-hidden="true">↗</span>;

export default function SiteHeader({onPrepare}) {
  const [menuOpen,setMenuOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  const trigger=useRef(null);

  useEffect(()=>{
    const onScroll=()=>setScrolled(window.scrollY>56);
    onScroll();
    window.addEventListener('scroll',onScroll,{passive:true});
    return()=>window.removeEventListener('scroll',onScroll);
  },[]);
  useEffect(()=>{
    const onKey=event=>{
      if(event.key==='Escape'&&menuOpen){
        setMenuOpen(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener('keydown',onKey);
    return()=>document.removeEventListener('keydown',onKey);
  },[menuOpen]);

  const prepare=()=>{setMenuOpen(false);onPrepare();};
  const close=()=>setMenuOpen(false);

  return <header className={'site-header'+(scrolled?' is-scrolled':'')}>
    <a className="wordmark" href="#top" aria-label="Law Your Way home">LAW YOUR WAY<span>CRIMINAL DEFENSE</span></a>
    <nav aria-label="Main navigation" className="desktop-nav">
      <a href="#approach">Story</a>
      <a href="#situation">Your position</a>
      <a href="#preparation">Preparation</a>
      <a href="#questions">Questions</a>
    </nav>
    <button className="header-action" onClick={prepare}>Prepare your case <Arrow/></button>
    <button ref={trigger} className="menu-button" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={()=>setMenuOpen(value=>!value)}>
      {menuOpen?'Close':'Menu'} <span aria-hidden="true">{menuOpen?'×':'+'}</span>
    </button>
    <nav id="mobile-menu" aria-label="Mobile navigation" className={'mobile-menu'+(menuOpen?' is-open':'')} hidden={!menuOpen}>
      <a onClick={close} href="#approach">Approach</a>
      <a onClick={close} href="#situation">Your position</a>
      <a onClick={close} href="#preparation">Preparation</a>
      <a onClick={close} href="#questions">Questions</a>
      <button onClick={prepare}>Prepare your case <Arrow/></button>
    </nav>
  </header>;
}
