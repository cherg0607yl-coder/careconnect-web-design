import { Link } from "react-router-dom";

export default function NgoCard({ ngo }) {
  return (
    <article className="card" aria-labelledby={`ngo-${ngo.id}-title`}>
      <h3 id={`ngo-${ngo.id}-title`}>{ngo.name}</h3>
      <p className="small">{ngo.city}, {ngo.state} • {ngo.cost_model}</p>

      <div className="small" style={{marginBottom:".5rem"}}>
        {ngo.languages?.map(l => <span key={l} className="badge">{l}</span>)}
      </div>

      <div style={{marginBottom:".5rem"}}>
        {ngo.services?.slice(0,4).map(s => <span key={s} className="badge">{s}</span>)}
        {ngo.services?.length > 4 && <span className="badge">+{ngo.services.length-4} more</span>}
      </div>

      <div style={{display:'flex',gap:'.5rem',flexWrap:'wrap'}}>
        <a className="btn" href={`mailto:${ngo.email}`}>Email</a>
        {ngo.phone && <a className="btn" href={`tel:${ngo.phone}`}>Call</a>}
        {ngo.website_url && <a className="btn" target="_blank" rel="noreferrer" href={ngo.website_url}>Website</a>}
        <Link className="btn" to={`/ngo/${ngo.id}`}>Details</Link>
      </div>
    </article>
  );
}