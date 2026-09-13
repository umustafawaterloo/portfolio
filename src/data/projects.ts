import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'titanium-knights-robotics',
    title: 'Titanium Knights Robotics (FTC Connect Winner!)',
    caption:
      'FIRST Competition robot that operates autonomously and manually using sensors, odometry, and custom controls',
    photo: '/images/TitaniumKnightsRobotics.jpg',
    githubUrl: null,
    tech: ['Java', 'Python', 'Spring', 'OpenCV'],
  },
  {
    id: 'pipaws',
    title: 'PiPaws',
    caption: 'Raspberry-Pi powered pet feeder, activated by user input from a web application',
    photo: '/images/PiPaws.webp',
    githubUrl: 'https://github.com/owenz0523/pet-feeder',
    tech: ['JavaScript', 'Python', 'React', 'Tailwind', 'Node.js', 'Express.js', 'Raspberry Pi', 'Linux'],
  },
  {
    id: 'nba-tic-tac-toe',
    title: 'NBA Tic-Tac-Toe',
    caption:
      'Basketball-themed tic-tac-toe game where users enter NBA players that match row and column teams',
    photo: '/images/NBATicTacToe.png',
    githubUrl: 'https://github.com/owenz0523/cs348',
    tech: ['Python', 'SQL', 'JavaScript', 'React', 'Vite', 'FastAPI', 'PostgreSQL'],
  },
  {
    id: 'birdbase',
    title: 'BirdBase',
    caption: 'Mobile app for gathering and storing bird media and fetching weather data',
    photo: '/images/BirdBase.webp',
    githubUrl: 'https://github.com/Ranzadet/Capstone-Technology-Demo',
    tech: ['JavaScript', 'React', 'React Native', 'Firebase', 'Google Sheets'],
  },
  {
    id: 'er-prediction-model',
    title: 'ER Prediction Model',
    caption:
      'PyTorch-based machine learning model to predict likelihood of patients landing in ER based on diagnoses',
    photo: '/images/ERPredictionModel.webp',
    githubUrl: null,
    tech: ['Python', 'SQL', 'PyTorch', 'Pandas', 'Numpy'],
  },
  {
    id: 'teacher-wordle',
    title: 'Teacher Wordle',
    caption: "Fun Wordle-inspired game made with my high school teachers' names",
    photo: '/images/TeacherWordle.webp',
    githubUrl: 'https://github.com/umaralimustafa/umaralimustafa.github.io',
    tech: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 'quiz-maker',
    title: 'Quiz Maker',
    caption: 'Simple web application for making quizzes, answering them, and receiving grades',
    photo: '/images/QuizMaker.webp',
    githubUrl: 'https://github.com/umaralimustafa/quiz-maker',
    tech: ['JavaScript', 'HTML', 'CSS'],
  },
]
