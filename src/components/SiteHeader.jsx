import {useEffect,useRef,useState} from 'react';

const nav=[
  ['home','/','Home'],
  ['practice','/practice-areas','Practice Areas'],
  ['stages','/case-stages','Case Stages'],
  ['about','/about','About'],
  ['questions','/questions','Questions']
];

export default function SiteHeader({onPrepare,route}) {
  const [menuOpen,setMenuOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  const trigger=useRef(null);

  useEffect(()=>{
    const onScroll=()=>setScrolled(window.scrollY>64);
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

  return <header className={'site-header'+(scrolled?' is-scrolled':'')}>
    <a className="wordmark" href="/" aria-label="Law Your Way home">
      <span className="wordmark-mark" aria-hidden="true">LYW</span>
      <span className="wordmark-copy">LAW YOUR WAY<small>CRIMINAL DEFENSE</small></span>
    </a>

    <nav aria-label="Main navigation" className="desktop-nav">
      {nav.map(([key,href,label])=><a className={route===key?'is-active':''} key={key} href={href}>{label}</a>)}
    </nav>

    <a className="header-action" href="/contact">Free Consultation <span aria-hidden="true">→</span></a>

    <button ref={trigger} className="menu-button" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={()=>setMenuOpen(value=>!value)}>
      {menuOpen?'Close':'Menu'} <span aria-hidden="true">{menuOpen?'×':'+'}</span>
    </button>

    <nav id="mobile-menu" aria-label="Mobile navigation" className={'mobile-menu'+(menuOpen?' is-open':'')} hidden={!menuOpen}>
      {nav.map(([key,href,label])=><a className={route===key?'is-active':''} key={key} href={href}>{label}</a>)}
      <a href="/contact">Contact</a>
    </nav>
  </header>;
}
