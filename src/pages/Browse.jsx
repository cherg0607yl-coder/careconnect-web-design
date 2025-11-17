import { useMemo, useState } from "react";
import data from "../data/ngos.json";
import NgoCard from "../components/NgoCard.jsx";

export default function Browse() {
  const [q, setQ] = useState("");
  const [city, setCity] = useState("");
  const [service, setService] = useState("");
  const [language, setLanguage] = useState("");
  const [cost, setCost] = useState("");

  const filtered = useMemo(() => {
    return data.filter(n => {
      const mq = !q ||
        n.name.toLowerCase().includes(q.toLowerCase()) ||
        n.services.join(" ").toLowerCase().includes(q.toLowerCase());

      const mc = !city || n.city.toLowerCase().includes(city.toLowerCase());
      const ms = !service || n.services.some(s => s.toLowerCase().includes(service.toLowerCase()));
      const ml = !language || n.languages.some(l => l.toLowerCase().includes(language.toLowerCase()));
      const mcost = !cost || n.cost_model === cost;

      return mq && mc && ms && ml && mcost;
    });
  }, [q, city, service, language, cost]);

  return (
    <section>
      <h1>Browse Resources</h1>
      <p className="small">Filter by service, city, language, and cost. Click a card for details.</p>

      {/* Filters */}
      <div className="card" style={{display:'grid',gap:'.5rem',marginBottom:'1rem'}}>
        <label>Search
          <input className="input" placeholder="name or service…" value={q} onChange={e=>setQ(e.target.value)} />
        </label>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:'.5rem'}}>
          <label>City
            <input className="input" value={city} onChange={e=>setCity(e.target.value)} />
          </label>
          <label>Service
            <input className="input" placeholder="Bereavement…" value={service} onChange={e=>setService(e.target.value)} />
          </label>
          <label>Language
            <input className="input" placeholder="Spanish…" value={language} onChange={e=>setLanguage(e.target.value)} />
          </label>
          <label>Cost
            <select className="input" value={cost} onChange={e=>setCost(e.target.value)}>
              <option value="">Any</option>
              <option value="Free">Free</option>
              <option value="Sliding scale">Sliding scale</option>
            </select>
          </label>
        </div>
      </div>

      {filtered.length === 0 && <p>No results. Try clearing filters.</p>}

      <div className="grid">
        {filtered.map(n => <NgoCard key={n.id} ngo={n} />)}
      </div>
    </section>
  );
}