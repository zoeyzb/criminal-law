export default function AmbientBackdrop() {
  return <div className="ambient-world" aria-hidden="true">
    <div className="ambient-world__base"/>
    <div className="ambient-world__glow ambient-world__glow--bronze"/>
    <div className="ambient-world__glow ambient-world__glow--cold"/>
    <div className="ambient-world__lines"/>
    <div className="ambient-world__grain"/>
  </div>;
}
