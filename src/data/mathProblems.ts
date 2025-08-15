export interface MathProblem {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  category: 'arithmetic' | 'algebra' | 'geometry' | 'probability';
  visualizationType: string;
}

export const mathProblems: MathProblem[] = [
  {
    id: 1,
    question: "Si el 40% de los estudiantes de un grupo practica fútbol y el 60% del resto practica béisbol, ¿qué porcentaje del grupo practica béisbol?",
    options: ["24%", "36%", "40%", "60%"],
    correctAnswer: "36%",
    explanation: "Si 40% practica fútbol, entonces 60% no practica fútbol. De ese 60%, el 60% practica béisbol: 0.60 × 0.60 = 0.36 = 36%",
    category: "arithmetic",
    visualizationType: "percentage"
  },
  {
    id: 2,
    question: "Si 5 trabajadores construyen una pared en 12 días, ¿cuántos días tardarán 15 trabajadores en construir la misma pared?",
    options: ["3", "4", "6", "8"],
    correctAnswer: "4",
    explanation: "Trabajo total = 5 × 12 = 60 días-trabajador. Con 15 trabajadores: 60 ÷ 15 = 4 días",
    category: "arithmetic",
    visualizationType: "workers"
  },
  {
    id: 3,
    question: "La suma de dos números es 45 y su diferencia es 11. ¿Cuál es el número mayor?",
    options: ["17", "28", "34", "39"],
    correctAnswer: "28",
    explanation: "x + y = 45 y x - y = 11. Sumando: 2x = 56, x = 28. Por lo tanto y = 17, el mayor es 28",
    category: "algebra",
    visualizationType: "equation"
  },
  {
    id: 4,
    question: "Si √(x² - 6x + 9) = 3, entonces x =",
    options: ["0", "3", "6", "0 o 6"],
    correctAnswer: "0 o 6",
    explanation: "x² - 6x + 9 = (x - 3)² = 9, entonces |x - 3| = 3. Esto da x - 3 = 3 o x - 3 = -3, por lo tanto x = 6 o x = 0",
    category: "algebra",
    visualizationType: "parabola"
  },
  {
    id: 5,
    question: "En un triángulo rectángulo, si los catetos miden 3 y 4, ¿cuánto mide la hipotenusa?",
    options: ["5", "7", "12", "25"],
    correctAnswer: "5",
    explanation: "Por el teorema de Pitágoras: h² = 3² + 4² = 9 + 16 = 25, entonces h = 5",
    category: "geometry",
    visualizationType: "triangle"
  },
  {
    id: 6,
    question: "El área de un círculo es 36π. ¿Cuál es su perímetro?",
    options: ["6π", "12π", "18π", "36π"],
    correctAnswer: "12π",
    explanation: "Área = πr² = 36π, entonces r² = 36, r = 6. Perímetro = 2πr = 2π(6) = 12π",
    category: "geometry",
    visualizationType: "circle"
  },
  {
    id: 7,
    question: "Si lanzamos dos dados, ¿cuál es la probabilidad de obtener una suma de 7?",
    options: ["1/12", "1/6", "1/4", "1/3"],
    correctAnswer: "1/6",
    explanation: "Casos favorables: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos. Total de casos = 36. P = 6/36 = 1/6",
    category: "probability",
    visualizationType: "dice"
  },
  {
    id: 8,
    question: "Si f(x) = 2x - 3 y g(x) = x², entonces g(f(2)) =",
    options: ["1", "4", "9", "16"],
    correctAnswer: "1",
    explanation: "f(2) = 2(2) - 3 = 1. g(f(2)) = g(1) = 1² = 1",
    category: "algebra",
    visualizationType: "function"
  },
  {
    id: 9,
    question: "Un rectángulo tiene perímetro 20 y área 21. ¿Cuáles son sus dimensiones?",
    options: ["3 y 7", "4 y 6", "2 y 8", "1 y 9"],
    correctAnswer: "3 y 7",
    explanation: "2(l + w) = 20, entonces l + w = 10. l × w = 21. Resolviendo: l = 7, w = 3",
    category: "geometry",
    visualizationType: "rectangle"
  },
  {
    id: 10,
    question: "Si log₂(x) = 3, entonces x =",
    options: ["6", "8", "9", "16"],
    correctAnswer: "8",
    explanation: "log₂(x) = 3 significa 2³ = x, entonces x = 8",
    category: "algebra",
    visualizationType: "exponential"
  },
  {
    id: 11,
    question: "La media de 5 números es 12. Si agregamos un sexto número que es 18, ¿cuál es la nueva media?",
    options: ["12", "13", "14", "15"],
    correctAnswer: "13",
    explanation: "Suma original = 5 × 12 = 60. Nueva suma = 60 + 18 = 78. Nueva media = 78 ÷ 6 = 13",
    category: "arithmetic",
    visualizationType: "average"
  },
  {
    id: 12,
    question: "¿Cuántas diagonales tiene un hexágono?",
    options: ["6", "9", "12", "15"],
    correctAnswer: "9",
    explanation: "Número de diagonales = n(n-3)/2 = 6(6-3)/2 = 6×3/2 = 9",
    category: "geometry",
    visualizationType: "polygon"
  },
  {
    id: 13,
    question: "Si 3^(x+1) = 27, entonces x =",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2",
    explanation: "3^(x+1) = 27 = 3³, entonces x + 1 = 3, x = 2",
    category: "algebra",
    visualizationType: "exponential"
  },
  {
    id: 14,
    question: "Un tanque se llena con una llave en 6 horas y se vacía con otra en 9 horas. Si ambas llaves están abiertas, ¿en cuánto tiempo se llena?",
    options: ["15 horas", "18 horas", "20 horas", "24 horas"],
    correctAnswer: "18 horas",
    explanation: "Velocidad de llenado = 1/6 - 1/9 = 3/18 - 2/18 = 1/18 tanque/hora. Tiempo = 18 horas",
    category: "arithmetic",
    visualizationType: "tank"
  },
  {
    id: 15,
    question: "El volumen de un cubo es 125 cm³. ¿Cuál es el área de una de sus caras?",
    options: ["5 cm²", "25 cm²", "125 cm²", "625 cm²"],
    correctAnswer: "25 cm²",
    explanation: "V = a³ = 125, entonces a = 5 cm. Área de una cara = a² = 25 cm²",
    category: "geometry",
    visualizationType: "cube"
  },
  {
    id: 16,
    question: "Si x² - 5x + 6 = 0, entonces los valores de x son:",
    options: ["1 y 6", "2 y 3", "-2 y -3", "-1 y -6"],
    correctAnswer: "2 y 3",
    explanation: "Factorizando: (x - 2)(x - 3) = 0, entonces x = 2 o x = 3",
    category: "algebra",
    visualizationType: "parabola"
  },
  {
    id: 17,
    question: "En una urna hay 4 bolas rojas y 6 azules. Si sacamos 2 bolas sin reemplazo, ¿cuál es la probabilidad de que ambas sean rojas?",
    options: ["2/15", "4/25", "6/45", "8/45"],
    correctAnswer: "2/15",
    explanation: "P(primera roja) = 4/10, P(segunda roja|primera roja) = 3/9. P(ambas rojas) = 4/10 × 3/9 = 12/90 = 2/15",
    category: "probability",
    visualizationType: "balls"
  },
  {
    id: 18,
    question: "Si sen(θ) = 3/5 y θ está en el primer cuadrante, entonces cos(θ) =",
    options: ["2/5", "3/5", "4/5", "5/5"],
    correctAnswer: "4/5",
    explanation: "sen²(θ) + cos²(θ) = 1. (3/5)² + cos²(θ) = 1. cos²(θ) = 16/25. Como θ está en el primer cuadrante, cos(θ) = 4/5",
    category: "geometry",
    visualizationType: "trigonometry"
  },
  {
    id: 19,
    question: "La sucesión 2, 6, 18, 54, ... es una progresión geométrica. ¿Cuál es el quinto término?",
    options: ["108", "162", "216", "324"],
    correctAnswer: "162",
    explanation: "La razón es r = 3. El quinto término = 2 × 3⁴ = 2 × 81 = 162",
    category: "algebra",
    visualizationType: "sequence"
  },
  {
    id: 20,
    question: "Un comerciante vende un artículo con 20% de ganancia. Si lo vendió en $180, ¿cuál fue su costo?",
    options: ["$144", "$150", "$160", "$165"],
    correctAnswer: "$150",
    explanation: "Precio de venta = Costo × 1.20 = $180. Costo = $180 ÷ 1.20 = $150",
    category: "arithmetic",
    visualizationType: "percentage"
  }
];