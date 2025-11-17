import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Browse from "./pages/Browse.jsx";
import NgoDetail from "./pages/NgoDetail.jsx";
import Volunteer from "./pages/Volunteer.jsx";
import About from "./pages/About.jsx";

export default function App() {
  return (
    <>
      <header>
        <nav style={{display:'flex',gap:'1rem',padding:'1rem',background:'#f3f4f6'}}>
          <Link to="/" aria-label="Home">Home</Link>
          <Link to="/browse" aria-label="Browse NGOs">Browse</Link>
          <Link to="/volunteer" aria-label="Volunteer">Volunteer</Link>
          <Link to="/about" aria-label="About">About</Link>
        </nav>
      </header>

      <main style={{padding:'1rem',maxWidth:1050,margin:'0 auto'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/ngo/:id" element={<NgoDetail />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
}