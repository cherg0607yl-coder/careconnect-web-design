import { useState } from "react";

export default function Volunteer() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [city,setCity] = useState("");
  const [availability,setAvailability] = useState("");
  const [skills,setSkills] = useState("");
  const [ok,setOk] = useState(false);

  function onSubmit(e){
    e.preventDefault();
    const entry = {name,email,city,availability,skills,createdAt:new Date().toISOString()};
    const list = JSON.parse(localStorage.getItem("volunteers")||"[]");
    list.push(entry);
    localStorage.setItem("volunteers", JSON.stringify(list));
    setOk(true);
    setName("");setEmail("");setCity("");setAvailability("");setSkills("");
  }

  return (
    <section>
      <h1>Volunteer Sign-up</h1>
      {ok && <p role="status">Thanks! Your info was saved locally for demo purposes.</p>}

      <form onSubmit={onSubmit} style={{display:'grid',gap:'0.75rem',maxWidth:720}}>
        <label>Full name
          <input className="input" required value={name} onChange={e=>setName(e.target.value)} />
        </label>
        <label>Email
          <input className="input" type="email" required value={email} onChange={e=>setEmail(e.target.value)} />
        </label>
        <label>City
          <input className="input" value={city} onChange={e=>setCity(e.target.value)} />
        </label>
        <label>Availability
          <input className="input" placeholder="Weekends, evenings…" value={availability} onChange={e=>setAvailability(e.target.value)} />
        </label>
        <label>Skills
          <input className="input" placeholder="Driving, translation, companionship…" value={skills} onChange={e=>setSkills(e.target.value)} />
        </label>
        <button className="btn" type="submit">Submit</button>
      </form>
    </section>
  );
}