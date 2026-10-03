export default function AmbientBackdrop(){
  return <div className="ambient-world" aria-hidden="true">
    <div className="master-courtroom">
      <img className="master-courtroom__image" src="/judicial-passage.webp" alt=""/>
      <div className="master-courtroom__depth"/>
      <div className="master-courtroom__shade"/>
      <div className="master-courtroom__light"/>
    </div>
    <div className="ambient-world__grain"/>
  </div>;
}
