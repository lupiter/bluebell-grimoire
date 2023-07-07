import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css';
import { Sweater } from "./sweater/Sweater";
import logo from './assets/logo.png';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="sweater" element={<Sweater />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <h1><img src={logo} alt="📘" className='logo' /> The Bluebell Grimoire</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sweater">Sweaters & Jumpers</Link>
          </li>
          <li>
            <Link to="/sock">Socks</Link>
          </li>
          <li>
            <Link to="/pant-skirt">Pants & Skirts</Link>
          </li>
          <li>
            <Link to="/dress">Dresses</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Welcome() {
  return (
    <div>
      <h2>Welcome!</h2>
      <p>These are some pattern calculators I've adapted from old Singer and Brother knitting machine patterns for 5-ply wool aka Paton's Bluebell.</p>
      <p>These patterns have <strong>not</strong> been tested!! Use at your own risk. But if you do try them please let me know how it goes.</p>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Sorry!</h2>
      <p>
        This isn't ready yet, <Link to="/">go home</Link>.
      </p>
    </div>
  );
}

export default App;
