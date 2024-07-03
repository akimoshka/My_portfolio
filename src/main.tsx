import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { Bio, Home } from './components/Bio';
import Comic from './comic';
import Projects from './projects';
// import 'C:\\Users\\akimo\\Desktop\\labFr\\Style.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Bio />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/comic" element={<Comic />} />
      </Routes>
    </Router>
  );
}

const renderApp = () => {
  const rootEl = document.getElementById('root');
  if (!rootEl) return;

  const root = createRoot(rootEl);
  root.render(<App />);
};

window.onload = renderApp;
