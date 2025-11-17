import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <h1>CareConnect</h1>
      <p>
        A simple way for families and caregivers to find hospice-related NGOs and
        resources nearby.
      </p>
      <ul>
        <li>Filter by service, city, language, and cost</li>
        <li>See contact info at a glance (email, phone, website)</li>
        <li>Sign up to volunteer and help</li>
      </ul>
      <Link className="btn" to="/browse">Browse resources</Link>
    </section>
  );
}