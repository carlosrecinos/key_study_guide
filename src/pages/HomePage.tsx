import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <motion.div 
        className="hero-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="main-title"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          Guía de Estudio PAA
        </motion.h1>
        
        <motion.h2 
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Carlos Recinos - Key Institute
        </motion.h2>

        <motion.div 
          className="description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p>
            Bienvenido a tu plataforma interactiva de preparación para la Prueba de Aptitud Académica.
            Domina conceptos matemáticos con visualizaciones animadas en 2D que te ayudarán
            a comprender cada problema paso a paso.
          </p>
        </motion.div>

        <motion.div 
          className="features"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="feature-card">
            <div className="feature-icon">📐</div>
            <h3>Geometría Interactiva</h3>
            <p>Visualiza triángulos, círculos y polígonos en tiempo real</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Álgebra Animada</h3>
            <p>Observa cómo se resuelven ecuaciones paso a paso</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🎲</div>
            <h3>Probabilidad Visual</h3>
            <p>Comprende conceptos estadísticos con simulaciones</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🔢</div>
            <h3>Aritmética Dinámica</h3>
            <p>Aprende porcentajes y proporciones con animaciones</p>
          </div>
        </motion.div>

        <motion.button 
          className="start-button"
          onClick={() => navigate('/problems')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          Comenzar a Practicar
        </motion.button>

        <motion.div 
          className="stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <div className="stat">
            <span className="stat-number">20</span>
            <span className="stat-label">Problemas Resueltos</span>
          </div>
          <div className="stat">
            <span className="stat-number">4</span>
            <span className="stat-label">Categorías</span>
          </div>
          <div className="stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">Interactivo</span>
          </div>
        </motion.div>
      </motion.div>

      <div className="background-animation">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-symbol"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100
            }}
            animate={{ 
              y: -100,
              x: Math.random() * window.innerWidth
            }}
            transition={{ 
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            {['π', '∑', '√', '∫', '∞', 'θ', 'λ', 'Δ'][Math.floor(Math.random() * 8)]}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;