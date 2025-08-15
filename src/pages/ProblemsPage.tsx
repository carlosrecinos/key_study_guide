import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { mathProblems } from '../data/mathProblems';
import './ProblemsPage.css';

const ProblemsPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'arithmetic', 'algebra', 'geometry', 'probability'];
  
  const filteredProblems = selectedCategory === 'all' 
    ? mathProblems 
    : mathProblems.filter(p => p.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'arithmetic': return '#FF6B6B';
      case 'algebra': return '#4ECDC4';
      case 'geometry': return '#45B7D1';
      case 'probability': return '#96CEB4';
      default: return '#667eea';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'arithmetic': return '🔢';
      case 'algebra': return '📈';
      case 'geometry': return '📐';
      case 'probability': return '🎲';
      default: return '📚';
    }
  };

  return (
    <div className="problems-container">
      <motion.div 
        className="problems-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button 
          className="back-button"
          onClick={() => navigate('/')}
        >
          ← Volver al Inicio
        </button>
        <h1>Problemas de Matemáticas PAA</h1>
        <p>Selecciona un problema para ver su solución animada</p>
      </motion.div>

      <motion.div 
        className="category-filter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
            style={{
              backgroundColor: selectedCategory === cat ? getCategoryColor(cat) : 'transparent',
              borderColor: getCategoryColor(cat),
              color: selectedCategory === cat ? 'white' : getCategoryColor(cat)
            }}
          >
            {cat === 'all' ? 'Todos' : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </motion.div>

      <motion.div 
        className="problems-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {filteredProblems.map((problem, index) => (
          <motion.div
            key={problem.id}
            className="problem-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => navigate(`/problem/${problem.id}`)}
            style={{
              borderLeft: `4px solid ${getCategoryColor(problem.category)}`
            }}
          >
            <div className="problem-header">
              <span className="problem-number">Problema #{problem.id}</span>
              <span className="problem-category-icon">{getCategoryIcon(problem.category)}</span>
            </div>
            
            <h3 className="problem-title">
              {problem.question.substring(0, 80)}...
            </h3>
            
            <div className="problem-footer">
              <span 
                className="problem-category"
                style={{ color: getCategoryColor(problem.category) }}
              >
                {problem.category.charAt(0).toUpperCase() + problem.category.slice(1)}
              </span>
              <button className="solve-button">
                Ver Solución →
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="progress-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: '0%' }}
          />
        </div>
        <p>0 de {mathProblems.length} problemas completados</p>
      </motion.div>
    </div>
  );
};

export default ProblemsPage;