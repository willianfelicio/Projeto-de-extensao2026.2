import React from 'react';
import { motion } from 'framer-motion';

// Importação dos componentes
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Procedimentos from './components/Procedimentos';
import ComoFunciona from './components/ComoFunciona';
import Depoimentos from './components/Depoimentos';
import Formularios from './components/Formularios';
import Footer from './components/Footer';

// Animação para as seções do site
const sectionAnimation = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function App() {
  return (
    
    // Container principal do site
    <div className="min-h-screen bg-slate-50 text-slate-800 scroll-smooth selection:bg-purple-100 selection:text-purple-800">
      <Navbar />
      
      <main>
        <Hero />
        
        <motion.div {...sectionAnimation}>
          <Sobre />
        </motion.div>
        
        <motion.div {...sectionAnimation}>
          <Procedimentos />
        </motion.div>

        <motion.div {...sectionAnimation}>
          <ComoFunciona />
        </motion.div>

        <motion.div {...sectionAnimation}>
          <Depoimentos />
        </motion.div>

        <motion.div {...sectionAnimation}>
          <Formularios />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}