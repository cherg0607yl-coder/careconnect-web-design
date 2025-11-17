import { useParams, Link } from "react-router-dom";
import data from "../data/ngos.json";

export default function NgoDetail() {
  const { id } = useParams();
  const ngo = data.find(x => x.id === id);

  if (!ngo) return <p>Not found. <Link to="/browse">Back to Browse</Link></p>;

  return (
    <article className="card">
      <h1>{ngo.name}</h1>
      <p className="small">{ngo.city}, {ngo.state} • {ngo.cost_model}</p>
      <p>{ngo.description}</p>

      <h3>Services</h3>
      <div style={{marginBottom:'.75rem'}}>
        {ngo.services.map(s => <span key={s} className="badge">{s}</span>)}
      </div>

      <h3>Languages</h3>
      <div style={{marginBottom:'.75rem'}}>
        {ngo.languages.map(l => <span key={l} className="badge">{l}</span>)}
      </div>

      <div style={{display:'flex',gap:'.5rem',flexWrap:'wrap',marginTop:'.5rem'}}>
        <a className="btn" href={`mailto:${ngo.email}`}>Email</a>
        {ngo.phone && <a className="btn" href={`tel:${ngo.phone}`}>Call</a>}
        {ngo.website_url && <a className="btn" target="_blank" rel="noreferrer" href={ngo.website_url}>Website</a>}
        <Link className="btn" to="/browse">Back</Link>
      </div>
    </article>
  );
}