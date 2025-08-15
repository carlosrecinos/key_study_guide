import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { mathProblems } from '../data/mathProblems';
import MathVisualization from '../components/MathVisualization';
import './ProblemDetail.css';

const ProblemDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const problem = mathProblems.find(p => p.id === parseInt(id || '0'));

  useEffect(() => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setIsCorrect(null);
  }, [id]);

  if (!problem) {
    return <div>Problema no encontrado</div>;
  }

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    const correct = answer === problem.correctAnswer;
    setIsCorrect(correct);
    setTimeout(() => {
      setShowExplanation(true);
    }, 500);
  };

  const nextProblem = () => {
    const nextId = problem.id < mathProblems.length ? problem.id + 1 : 1;
    navigate(`/problem/${nextId}`);
  };

  const prevProblem = () => {
    const prevId = problem.id > 1 ? problem.id - 1 : mathProblems.length;
    navigate(`/problem/${prevId}`);
  };

  return (
    <div className="problem-detail-container">
      <div className="problem-nav">
        <button onClick={() => navigate('/problems')} className="nav-btn back">
          ← Volver a Problemas
        </button>
        <div className="problem-counter">
          Problema {problem.id} de {mathProblems.length}
        </div>
      </div>

      <motion.div 
        className="problem-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="problem-main">
          <motion.div 
            className="question-section"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="category-badge" style={{
              background: problem.category === 'arithmetic' ? '#FF6B6B' :
                         problem.category === 'algebra' ? '#4ECDC4' :
                         problem.category === 'geometry' ? '#45B7D1' : '#96CEB4'
            }}>
              {problem.category.toUpperCase()}
            </div>
            
            <h2 className="question-text">{problem.question}</h2>

            <div className="options-grid">
              {problem.options.map((option, index) => (
                <motion.button
                  key={index}
                  className={`option-btn ${
                    selectedAnswer === option 
                      ? isCorrect 
                        ? 'correct' 
                        : 'incorrect'
                      : ''
                  } ${
                    showExplanation && option === problem.correctAnswer && !isCorrect
                      ? 'show-correct'
                      : ''
                  }`}
                  onClick={() => !selectedAnswer && handleAnswerSelect(option)}
                  disabled={!!selectedAnswer}
                  whileHover={!selectedAnswer ? { scale: 1.05 } : {}}
                  whileTap={!selectedAnswer ? { scale: 0.95 } : {}}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="option-text">{option}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="visualization-section"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3>Visualización Interactiva</h3>
            <MathVisualization 
              type={problem.visualizationType} 
              problemId={problem.id}
              showSolution={showExplanation}
            />
          </motion.div>
        </div>

        {showExplanation && (
          <motion.div 
            className="explanation-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`result-message ${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect ? '¡Correcto! 🎉' : 'Incorrecto 😔'}
            </div>
            
            <div className="explanation-box">
              <h3>Explicación:</h3>
              <p>{problem.explanation}</p>
              <div className="correct-answer">
                Respuesta correcta: <strong>{problem.correctAnswer}</strong>
              </div>
            </div>

            <div className="navigation-buttons">
              <button onClick={prevProblem} className="nav-btn prev">
                ← Problema Anterior
              </button>
              <button onClick={() => window.location.reload()} className="nav-btn retry">
                Reintentar
              </button>
              <button onClick={nextProblem} className="nav-btn next">
                Siguiente Problema →
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ProblemDetail;