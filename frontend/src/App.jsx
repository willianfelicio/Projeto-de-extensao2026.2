import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Procedimentos from './components/Procedimentos';
import ComoFunciona from './components/ComoFunciona';
import Depoimentos from './components/Depoimentos';
import Formularios from './components/Formularios';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
      <Hero />
      <Sobre />
      <Procedimentos />
      <ComoFunciona />
      <Depoimentos />
      <Formularios />
      <Footer />
    </div>
  );
}