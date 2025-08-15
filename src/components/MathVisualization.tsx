import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './MathVisualization.css';

interface MathVisualizationProps {
  type: string;
  problemId: number;
  showSolution: boolean;
}

const MathVisualization: React.FC<MathVisualizationProps> = ({ type, problemId, showSolution }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 400;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      switch (type) {
        case 'percentage':
          drawPercentageVisualization(ctx, canvas, animationStep, showSolution);
          break;
        case 'workers':
          drawWorkersVisualization(ctx, canvas, animationStep, showSolution);
          break;
        case 'equation':
          drawEquationVisualization(ctx, canvas, animationStep, showSolution);
          break;
        case 'parabola':
          drawParabolaVisualization(ctx, canvas, animationStep, showSolution);
          break;
        case 'triangle':
          drawTriangleVisualization(ctx, canvas, animationStep, showSolution);
          break;
        case 'circle':
          drawCircleVisualization(ctx, canvas, animationStep, showSolution);
          break;
        case 'dice':
          drawDiceVisualization(ctx, canvas, animationStep, showSolution);
          break;
        case 'function':
          drawFunctionVisualization(ctx, canvas, animationStep, showSolution);
          break;
        case 'rectangle':
          drawRectangleVisualization(ctx, canvas, animationStep, showSolution);
          break;
        case 'exponential':
          drawExponentialVisualization(ctx, canvas, animationStep, showSolution);
          break;
        case 'average':
          drawAverageVisualization(ctx, canvas, animationStep, showSolution);
          break;
        case 'polygon':
          drawPolygonVisualization(ctx, canvas, animationStep, showSolution);
          break;
        case 'tank':
          drawTankVisualization(ctx, canvas, animationStep, showSolution);
          break;
        case 'cube':
          drawCubeVisualization(ctx, canvas, animationStep, showSolution);
          break;
        case 'balls':
          drawBallsVisualization(ctx, canvas, animationStep, showSolution);
          break;
        case 'trigonometry':
          drawTrigonometryVisualization(ctx, canvas, animationStep, showSolution);
          break;
        case 'sequence':
          drawSequenceVisualization(ctx, canvas, animationStep, showSolution);
          break;
        default:
          drawDefaultVisualization(ctx, canvas, animationStep, showSolution);
      }
    };

    const animationInterval = setInterval(() => {
      setAnimationStep(prev => (prev + 1) % 360);
      animate();
    }, 50);

    return () => clearInterval(animationInterval);
  }, [type, animationStep, showSolution, problemId]);

  return (
    <motion.div 
      className="visualization-container"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <canvas ref={canvasRef} className="math-canvas" />
      {showSolution && (
        <motion.div 
          className="solution-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Solución Visualizada
        </motion.div>
      )}
    </motion.div>
  );
};

// Visualization Functions
function drawPercentageVisualization(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, step: number, showSolution: boolean) {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 100;
  
  // Draw base circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.fillStyle = '#e0e0e0';
  ctx.fill();
  
  // Draw percentage arc (animated)
  const percentage = showSolution ? 0.36 : 0.40;
  const endAngle = -Math.PI / 2 + (2 * Math.PI * percentage * Math.min(step / 60, 1));
  
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radius, -Math.PI / 2, endAngle);
  ctx.closePath();
  ctx.fillStyle = showSolution ? '#4caf50' : '#667eea';
  ctx.fill();
  
  // Draw text
  ctx.fillStyle = '#333';
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(showSolution ? '36%' : '40%', centerX, centerY + 8);
}

function drawWorkersVisualization(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, step: number, showSolution: boolean) {
  const workers = showSolution ? 15 : 5;
  const cols = 5;
  const size = 30;
  const spacing = 10;
  
  for (let i = 0; i < workers; i++) {
    const row = Math.floor(i / cols);
    const col = i % cols;
    const x = 50 + col * (size + spacing);
    const y = 100 + row * (size + spacing);
    
    // Animate workers appearing
    if (step / 10 > i) {
      ctx.fillStyle = showSolution ? '#4caf50' : '#667eea';
      ctx.fillRect(x, y, size, size);
      
      // Draw worker icon
      ctx.fillStyle = 'white';
      ctx.font = '20px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('👷', x + size/2, y + size/2 + 7);
    }
  }
  
  // Draw days counter
  ctx.fillStyle = '#333';
  ctx.font = 'bold 20px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(`${showSolution ? '4' : '12'} días`, canvas.width / 2, 300);
}

function drawTriangleVisualization(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, step: number, showSolution: boolean) {
  const scale = 30;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  
  // Triangle vertices
  const x1 = centerX - 2 * scale;
  const y1 = centerY + scale;
  const x2 = centerX + scale;
  const y2 = centerY + scale;
  const x3 = centerX + scale;
  const y3 = centerY - 2 * scale;
  
  // Draw triangle
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.closePath();
  ctx.strokeStyle = '#667eea';
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.fillStyle = 'rgba(102, 126, 234, 0.1)';
  ctx.fill();
  
  // Draw right angle indicator
  ctx.beginPath();
  ctx.moveTo(x2 - 20, y2);
  ctx.lineTo(x2 - 20, y2 - 20);
  ctx.lineTo(x2, y2 - 20);
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Labels
  ctx.fillStyle = '#333';
  ctx.font = 'bold 16px Arial';
  ctx.fillText('3', (x1 + x2) / 2, y1 + 20);
  ctx.fillText('4', x2 + 15, (y2 + y3) / 2);
  
  if (showSolution) {
    // Animate hypotenuse
    const progress = Math.min(step / 60, 1);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    const endX = x1 + (x3 - x1) * progress;
    const endY = y1 + (y3 - y1) * progress;
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = '#4caf50';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    if (progress === 1) {
      ctx.fillStyle = '#4caf50';
      ctx.font = 'bold 20px Arial';
      ctx.fillText('5', (x1 + x3) / 2 - 20, (y1 + y3) / 2);
    }
  }
}

function drawCircleVisualization(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, step: number, showSolution: boolean) {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 60; // r = 6, scaled by 10
  
  // Draw circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = '#667eea';
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.fillStyle = 'rgba(102, 126, 234, 0.1)';
  ctx.fill();
  
  // Draw radius
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + radius, centerY);
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Labels
  ctx.fillStyle = '#333';
  ctx.font = 'bold 16px Arial';
  ctx.fillText('r = 6', centerX + radius / 2, centerY - 10);
  ctx.fillText('Área = 36π', centerX, centerY + radius + 30);
  
  if (showSolution) {
    // Animate perimeter
    const angle = (step * 2 * Math.PI) / 180;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = '#4caf50';
    ctx.fill();
    
    ctx.fillStyle = '#4caf50';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Perímetro = 12π', centerX, centerY - radius - 30);
  }
}

function drawDiceVisualization(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, step: number, showSolution: boolean) {
  const diceSize = 60;
  const spacing = 20;
  
  // Draw two dice
  for (let d = 0; d < 2; d++) {
    const x = 120 + d * (diceSize + spacing);
    const y = 150;
    
    // Draw dice cube
    ctx.fillStyle = 'white';
    ctx.fillRect(x, y, diceSize, diceSize);
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, diceSize, diceSize);
    
    // Animate dice values
    const value = showSolution ? (d === 0 ? 3 : 4) : Math.floor((step / 30) % 6) + 1;
    
    // Draw dots
    ctx.fillStyle = '#333';
    const dotSize = 8;
    const positions = getDicePositions(value);
    positions.forEach(([dx, dy]) => {
      ctx.beginPath();
      ctx.arc(x + dx * diceSize, y + dy * diceSize, dotSize / 2, 0, 2 * Math.PI);
      ctx.fill();
    });
  }
  
  // Show sum
  if (showSolution) {
    ctx.fillStyle = '#4caf50';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Suma = 7', canvas.width / 2, 250);
    ctx.font = '16px Arial';
    ctx.fillText('Probabilidad = 1/6', canvas.width / 2, 280);
  }
}

function getDicePositions(value: number): number[][] {
  const positions: { [key: number]: number[][] } = {
    1: [[0.5, 0.5]],
    2: [[0.3, 0.3], [0.7, 0.7]],
    3: [[0.3, 0.3], [0.5, 0.5], [0.7, 0.7]],
    4: [[0.3, 0.3], [0.3, 0.7], [0.7, 0.3], [0.7, 0.7]],
    5: [[0.3, 0.3], [0.3, 0.7], [0.5, 0.5], [0.7, 0.3], [0.7, 0.7]],
    6: [[0.3, 0.3], [0.3, 0.5], [0.3, 0.7], [0.7, 0.3], [0.7, 0.5], [0.7, 0.7]]
  };
  return positions[value] || positions[1];
}

function drawParabolaVisualization(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, step: number, showSolution: boolean) {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const scale = 20;
  
  // Draw axes
  ctx.strokeStyle = '#ddd';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, centerY);
  ctx.lineTo(canvas.width, centerY);
  ctx.moveTo(centerX, 0);
  ctx.lineTo(centerX, canvas.height);
  ctx.stroke();
  
  // Draw parabola y = (x - 3)²
  ctx.beginPath();
  ctx.strokeStyle = '#667eea';
  ctx.lineWidth = 2;
  
  for (let px = 0; px < canvas.width; px++) {
    const x = (px - centerX) / scale;
    const y = Math.pow(x - 3, 2);
    const py = centerY - y * scale;
    
    if (px === 0) {
      ctx.moveTo(px, py);
    } else {
      ctx.lineTo(px, py);
    }
  }
  ctx.stroke();
  
  if (showSolution) {
    // Mark solutions x = 0 and x = 6
    const solutions = [0, 6];
    solutions.forEach(sol => {
      const x = centerX + sol * scale;
      const y = centerY - 9 * scale; // y = 9 when (x-3)² = 9
      
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = '#4caf50';
      ctx.fill();
      
      ctx.fillStyle = '#4caf50';
      ctx.font = 'bold 14px Arial';
      ctx.fillText(`x = ${sol}`, x, y - 10);
    });
  }
}

function drawEquationVisualization(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, step: number, showSolution: boolean) {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  
  // Draw balance scale
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 3;
  
  // Base
  ctx.beginPath();
  ctx.moveTo(centerX - 30, centerY + 50);
  ctx.lineTo(centerX + 30, centerY + 50);
  ctx.lineTo(centerX, centerY);
  ctx.closePath();
  ctx.stroke();
  
  // Balance beam
  const tilt = showSolution ? 0 : Math.sin(step / 30) * 0.1;
  ctx.beginPath();
  ctx.moveTo(centerX - 100, centerY + tilt * 50);
  ctx.lineTo(centerX + 100, centerY - tilt * 50);
  ctx.stroke();
  
  // Left side (x + y = 45)
  ctx.fillStyle = '#667eea';
  ctx.font = 'bold 18px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('x + y', centerX - 70, centerY + tilt * 50 - 20);
  ctx.fillText('= 45', centerX - 70, centerY + tilt * 50);
  
  // Right side (x - y = 11)
  ctx.fillText('x - y', centerX + 70, centerY - tilt * 50 - 20);
  ctx.fillText('= 11', centerX + 70, centerY - tilt * 50);
  
  if (showSolution) {
    ctx.fillStyle = '#4caf50';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('x = 28', centerX, centerY + 100);
    ctx.fillText('y = 17', centerX, centerY + 130);
  }
}

function drawFunctionVisualization(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, step: number, showSolution: boolean) {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  
  // Draw function boxes
  const boxWidth = 100;
  const boxHeight = 60;
  
  // f(x) box
  ctx.fillStyle = '#667eea';
  ctx.fillRect(50, centerY - 30, boxWidth, boxHeight);
  ctx.fillStyle = 'white';
  ctx.font = 'bold 16px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('f(x) = 2x - 3', 100, centerY);
  
  // g(x) box
  ctx.fillStyle = '#4ecdc4';
  ctx.fillRect(250, centerY - 30, boxWidth, boxHeight);
  ctx.fillStyle = 'white';
  ctx.fillText('g(x) = x²', 300, centerY);
  
  // Animate flow
  if (showSolution) {
    const progress = (step % 60) / 60;
    
    // Arrow from input to f
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(30, centerY);
    ctx.lineTo(50, centerY);
    ctx.stroke();
    
    // Value flowing
    if (progress < 0.33) {
      const x = 30 + (50 - 30) * (progress * 3);
      ctx.fillStyle = '#4caf50';
      ctx.font = 'bold 18px Arial';
      ctx.fillText('2', x, centerY - 40);
    }
    
    // Arrow from f to g
    ctx.beginPath();
    ctx.moveTo(150, centerY);
    ctx.lineTo(250, centerY);
    ctx.stroke();
    
    if (progress > 0.33 && progress < 0.66) {
      const x = 150 + (250 - 150) * ((progress - 0.33) * 3);
      ctx.fillStyle = '#4caf50';
      ctx.fillText('1', x, centerY - 40);
    }
    
    // Output
    ctx.beginPath();
    ctx.moveTo(350, centerY);
    ctx.lineTo(370, centerY);
    ctx.stroke();
    
    if (progress > 0.66) {
      ctx.fillStyle = '#4caf50';
      ctx.font = 'bold 24px Arial';
      ctx.fillText('= 1', 380, centerY);
    }
  }
}

function drawRectangleVisualization(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, step: number, showSolution: boolean) {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const width = showSolution ? 210 : 200; // 7 * 30 or placeholder
  const height = showSolution ? 90 : 100; // 3 * 30 or placeholder
  
  // Draw rectangle
  ctx.fillStyle = 'rgba(102, 126, 234, 0.2)';
  ctx.fillRect(centerX - width/2, centerY - height/2, width, height);
  ctx.strokeStyle = '#667eea';
  ctx.lineWidth = 3;
  ctx.strokeRect(centerX - width/2, centerY - height/2, width, height);
  
  // Draw dimensions
  ctx.fillStyle = '#333';
  ctx.font = 'bold 16px Arial';
  ctx.textAlign = 'center';
  
  if (showSolution) {
    ctx.fillText('7', centerX, centerY - height/2 - 10);
    ctx.fillText('3', centerX - width/2 - 20, centerY);
    
    ctx.fillStyle = '#4caf50';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('Perímetro = 20', centerX, centerY + height/2 + 40);
    ctx.fillText('Área = 21', centerX, centerY + height/2 + 65);
  } else {
    ctx.fillText('l', centerX, centerY - height/2 - 10);
    ctx.fillText('w', centerX - width/2 - 20, centerY);
  }
}

function drawExponentialVisualization(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, step: number, showSolution: boolean) {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const scale = 30;
  
  // Draw axes
  ctx.strokeStyle = '#ddd';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(50, centerY);
  ctx.lineTo(350, centerY);
  ctx.moveTo(100, 50);
  ctx.lineTo(100, 350);
  ctx.stroke();
  
  // Draw exponential curve y = 2^x
  ctx.beginPath();
  ctx.strokeStyle = '#667eea';
  ctx.lineWidth = 2;
  
  for (let px = 0; px <= 5; px += 0.1) {
    const x = 100 + px * scale;
    const y = centerY - Math.log2(Math.pow(2, px)) * scale;
    
    if (px === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.stroke();
  
  if (showSolution) {
    // Mark point (3, 8)
    const x = 100 + 3 * scale;
    const y = centerY - 3 * scale; // log₂(8) = 3
    
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = '#4caf50';
    ctx.fill();
    
    ctx.font = 'bold 16px Arial';
    ctx.fillText('(3, 8)', x + 10, y - 10);
    ctx.fillText('log₂(8) = 3', centerX, 320);
  }
}

function drawAverageVisualization(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, step: number, showSolution: boolean) {
  const barWidth = 40;
  const maxHeight = 150;
  const values = [10, 11, 12, 13, 14];
  const newValue = 18;
  
  // Draw bars for original values
  values.forEach((val, i) => {
    const x = 50 + i * (barWidth + 10);
    const height = (val / 20) * maxHeight;
    const y = 250 - height;
    
    ctx.fillStyle = '#667eea';
    ctx.fillRect(x, y, barWidth, height);
    
    ctx.fillStyle = '#333';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(val.toString(), x + barWidth/2, y - 5);
  });
  
  // Draw average line
  const avg = showSolution ? 13 : 12;
  const avgY = 250 - (avg / 20) * maxHeight;
  
  ctx.strokeStyle = '#ff6b6b';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(40, avgY);
  ctx.lineTo(showSolution ? 350 : 300, avgY);
  ctx.stroke();
  ctx.setLineDash([]);
  
  ctx.fillStyle = '#ff6b6b';
  ctx.font = 'bold 16px Arial';
  ctx.fillText(`Media = ${avg}`, 350, avgY);
  
  if (showSolution) {
    // Add new bar
    const x = 300;
    const height = (newValue / 20) * maxHeight;
    const y = 250 - height;
    
    ctx.fillStyle = '#4caf50';
    ctx.fillRect(x, y, barWidth, height);
    
    ctx.fillStyle = '#333';
    ctx.font = '14px Arial';
    ctx.fillText(newValue.toString(), x + barWidth/2, y - 5);
  }
}

function drawPolygonVisualization(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, step: number, showSolution: boolean) {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 80;
  const sides = 6; // Hexagon
  
  // Draw hexagon
  ctx.beginPath();
  for (let i = 0; i <= sides; i++) {
    const angle = (i * 2 * Math.PI) / sides - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.strokeStyle = '#667eea';
  ctx.lineWidth = 3;
  ctx.stroke();
  
  // Draw vertices
  for (let i = 0; i < sides; i++) {
    const angle = (i * 2 * Math.PI) / sides - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = '#667eea';
    ctx.fill();
  }
  
  if (showSolution) {
    // Draw diagonals
    let diagonalCount = 0;
    for (let i = 0; i < sides; i++) {
      for (let j = i + 2; j < sides && j !== (i + sides - 1) % sides; j++) {
        if (diagonalCount * 10 < step) {
          const angle1 = (i * 2 * Math.PI) / sides - Math.PI / 2;
          const angle2 = (j * 2 * Math.PI) / sides - Math.PI / 2;
          const x1 = centerX + radius * Math.cos(angle1);
          const y1 = centerY + radius * Math.sin(angle1);
          const x2 = centerX + radius * Math.cos(angle2);
          const y2 = centerY + radius * Math.sin(angle2);
          
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = '#4caf50';
          ctx.lineWidth = 1;
          ctx.stroke();
          
          diagonalCount++;
        }
      }
    }
    
    ctx.fillStyle = '#4caf50';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('9 diagonales', centerX, centerY + radius + 40);
  }
}

function drawTankVisualization(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, step: number, showSolution: boolean) {
  const tankWidth = 150;
  const tankHeight = 200;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  
  // Draw tank outline
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 3;
  ctx.strokeRect(centerX - tankWidth/2, centerY - tankHeight/2, tankWidth, tankHeight);
  
  // Calculate water level
  const fillRate = 1/6; // fills in 6 hours
  const drainRate = 1/9; // drains in 9 hours
  const netRate = showSolution ? (fillRate - drainRate) : fillRate;
  const waterLevel = (step / 360) * netRate * tankHeight;
  
  // Draw water
  ctx.fillStyle = 'rgba(66, 165, 245, 0.6)';
  ctx.fillRect(
    centerX - tankWidth/2 + 3,
    centerY + tankHeight/2 - waterLevel - 3,
    tankWidth - 6,
    waterLevel
  );
  
  // Draw pipes
  // Fill pipe
  ctx.fillStyle = '#4caf50';
  ctx.fillRect(centerX - tankWidth/2 - 30, centerY - tankHeight/2 + 50, 30, 20);
  ctx.fillStyle = '#333';
  ctx.font = '14px Arial';
  ctx.fillText('Llena: 6h', centerX - tankWidth/2 - 80, centerY - tankHeight/2 + 65);
  
  if (showSolution) {
    // Drain pipe
    ctx.fillStyle = '#f44336';
    ctx.fillRect(centerX + tankWidth/2, centerY + tankHeight/2 - 50, 30, 20);
    ctx.fillText('Vacía: 9h', centerX + tankWidth/2 + 40, centerY + tankHeight/2 - 35);
    
    ctx.fillStyle = '#4caf50';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Tiempo total: 18 horas', centerX, centerY + tankHeight/2 + 40);
  }
}

function drawCubeVisualization(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, step: number, showSolution: boolean) {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const size = 100;
  const offset = 30;
  
  // Draw cube in 3D perspective
  // Front face
  ctx.fillStyle = 'rgba(102, 126, 234, 0.3)';
  ctx.fillRect(centerX - size/2, centerY - size/2, size, size);
  ctx.strokeStyle = '#667eea';
  ctx.lineWidth = 2;
  ctx.strokeRect(centerX - size/2, centerY - size/2, size, size);
  
  // Back face
  ctx.fillStyle = 'rgba(102, 126, 234, 0.1)';
  ctx.fillRect(centerX - size/2 + offset, centerY - size/2 - offset, size, size);
  ctx.strokeRect(centerX - size/2 + offset, centerY - size/2 - offset, size, size);
  
  // Connect faces
  ctx.beginPath();
  ctx.moveTo(centerX - size/2, centerY - size/2);
  ctx.lineTo(centerX - size/2 + offset, centerY - size/2 - offset);
  ctx.moveTo(centerX + size/2, centerY - size/2);
  ctx.lineTo(centerX + size/2 + offset, centerY - size/2 - offset);
  ctx.moveTo(centerX + size/2, centerY + size/2);
  ctx.lineTo(centerX + size/2 + offset, centerY + size/2 - offset);
  ctx.moveTo(centerX - size/2, centerY + size/2);
  ctx.lineTo(centerX - size/2 + offset, centerY + size/2 - offset);
  ctx.stroke();
  
  // Labels
  ctx.fillStyle = '#333';
  ctx.font = 'bold 16px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('a = 5 cm', centerX, centerY + size/2 + 30);
  
  if (showSolution) {
    // Highlight one face
    ctx.fillStyle = 'rgba(76, 175, 80, 0.3)';
    ctx.fillRect(centerX - size/2, centerY - size/2, size, size);
    
    ctx.fillStyle = '#4caf50';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('Área de cara = 25 cm²', centerX, centerY + size/2 + 60);
    ctx.fillText('Volumen = 125 cm³', centerX, centerY + size/2 + 85);
  }
}

function drawBallsVisualization(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, step: number, showSolution: boolean) {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const ballRadius = 15;
  const totalBalls = 10;
  const redBalls = 4;
  const blueBalls = 6;
  
  // Draw urn
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(centerX - 60, centerY - 80);
  ctx.lineTo(centerX - 50, centerY + 50);
  ctx.lineTo(centerX + 50, centerY + 50);
  ctx.lineTo(centerX + 60, centerY - 80);
  ctx.stroke();
  
  // Draw balls in urn
  let ballIndex = 0;
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 4; col++) {
      if (ballIndex < totalBalls) {
        const x = centerX - 40 + col * 30;
        const y = centerY - 40 + row * 30;
        
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, 2 * Math.PI);
        ctx.fillStyle = ballIndex < redBalls ? '#f44336' : '#2196f3';
        ctx.fill();
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        ballIndex++;
      }
    }
  }
  
  if (showSolution) {
    // Show probability calculation
    ctx.fillStyle = '#333';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('P(1ª roja) = 4/10', centerX, centerY + 90);
    ctx.fillText('P(2ª roja|1ª roja) = 3/9', centerX, centerY + 110);
    
    ctx.fillStyle = '#4caf50';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('P(ambas rojas) = 2/15', centerX, centerY + 140);
  }
}

function drawTrigonometryVisualization(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, step: number, showSolution: boolean) {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 100;
  
  // Draw unit circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = '#ddd';
  ctx.lineWidth = 1;
  ctx.stroke();
  
  // Draw axes
  ctx.beginPath();
  ctx.moveTo(centerX - radius - 20, centerY);
  ctx.lineTo(centerX + radius + 20, centerY);
  ctx.moveTo(centerX, centerY - radius - 20);
  ctx.lineTo(centerX, centerY + radius + 20);
  ctx.stroke();
  
  // Calculate angle where sin = 3/5
  const sinValue = 3/5;
  const cosValue = showSolution ? 4/5 : Math.sqrt(1 - sinValue * sinValue);
  const angle = Math.asin(sinValue);
  
  // Draw radius to point
  const x = centerX + cosValue * radius;
  const y = centerY - sinValue * radius;
  
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(x, y);
  ctx.strokeStyle = '#667eea';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Draw point
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, 2 * Math.PI);
  ctx.fillStyle = '#667eea';
  ctx.fill();
  
  // Draw right triangle
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(x, centerY);
  ctx.lineTo(x, y);
  ctx.strokeStyle = '#ff6b6b';
  ctx.lineWidth = 1;
  ctx.setLineDash([5, 5]);
  ctx.stroke();
  ctx.setLineDash([]);
  
  // Labels
  ctx.fillStyle = '#333';
  ctx.font = '16px Arial';
  ctx.fillText('sen(θ) = 3/5', centerX + radius + 30, centerY - 50);
  
  if (showSolution) {
    ctx.fillStyle = '#4caf50';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('cos(θ) = 4/5', centerX + radius + 30, centerY - 20);
  }
}

function drawSequenceVisualization(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, step: number, showSolution: boolean) {
  const sequence = [2, 6, 18, 54];
  const nextTerm = 162;
  const boxWidth = 60;
  const boxHeight = 40;
  const spacing = 20;
  
  // Draw sequence boxes
  sequence.forEach((term, i) => {
    const x = 50 + i * (boxWidth + spacing);
    const y = 150;
    
    // Animate boxes appearing
    if (step / 30 > i) {
      ctx.fillStyle = '#667eea';
      ctx.fillRect(x, y, boxWidth, boxHeight);
      
      ctx.fillStyle = 'white';
      ctx.font = 'bold 18px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(term.toString(), x + boxWidth/2, y + boxHeight/2 + 6);
      
      // Draw multiplication arrow
      if (i < sequence.length - 1) {
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x + boxWidth + 5, y + boxHeight/2);
        ctx.lineTo(x + boxWidth + spacing - 5, y + boxHeight/2);
        ctx.stroke();
        
        ctx.fillStyle = '#333';
        ctx.font = '14px Arial';
        ctx.fillText('×3', x + boxWidth + spacing/2, y + boxHeight/2 - 10);
      }
    }
  });
  
  if (showSolution) {
    // Draw next term
    const x = 50 + sequence.length * (boxWidth + spacing);
    const y = 150;
    
    // Arrow
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x - spacing + 5, y + boxHeight/2);
    ctx.lineTo(x - 5, y + boxHeight/2);
    ctx.stroke();
    
    ctx.fillStyle = '#333';
    ctx.font = '14px Arial';
    ctx.fillText('×3', x - spacing/2, y + boxHeight/2 - 10);
    
    // Next term box
    ctx.fillStyle = '#4caf50';
    ctx.fillRect(x, y, boxWidth, boxHeight);
    
    ctx.fillStyle = 'white';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(nextTerm.toString(), x + boxWidth/2, y + boxHeight/2 + 6);
    
    // Formula
    ctx.fillStyle = '#333';
    ctx.font = '16px Arial';
    ctx.fillText('Progresión geométrica: r = 3', canvas.width/2, 250);
    ctx.fillStyle = '#4caf50';
    ctx.fillText('5° término = 2 × 3⁴ = 162', canvas.width/2, 280);
  }
}

function drawDefaultVisualization(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, step: number, showSolution: boolean) {
  // Default visualization for unspecified types
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  
  // Draw animated math symbols
  const symbols = ['∑', '∫', '√', 'π', '∞'];
  symbols.forEach((symbol, i) => {
    const angle = (step / 30 + i * (2 * Math.PI / symbols.length)) % (2 * Math.PI);
    const x = centerX + Math.cos(angle) * 80;
    const y = centerY + Math.sin(angle) * 80;
    
    ctx.fillStyle = showSolution ? '#4caf50' : '#667eea';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(symbol, x, y);
  });
  
  ctx.fillStyle = '#333';
  ctx.font = '18px Arial';
  ctx.fillText('Visualización Matemática', centerX, centerY);
}

export default MathVisualization;