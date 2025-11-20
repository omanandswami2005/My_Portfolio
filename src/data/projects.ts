export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Path Genie",
    description: 'A modern personalized visual learning path generator',
    tech: ['Perplexity AI API', 'Node-js', 'React-Flow', 'Tailwind CSS'],
    image: '../Path-Genie.png',
    link: 'https://pathgenie.onrender.com/',
  },
  {
    title: "My_Portfolio",
    description: "A personal portfolio website built with a modern stack.",
    tech: ["TypeScript", "React", "Vite", "Tailwind CSS", "JavaScript"],
    image: "../project_my_portfolio.png",
    link: "https://omanandswami.vercel.app"
  },
  {
    title: "hactoberFest-LegaliTeaAI",
    "description": "An AI-powered legal document analysis platform that transforms complex legal language into clear, actionable insights.",
    tech: ["TypeScript", "JavaScript", "React", "Vercel", "DigitalOcean Gradient AI (Llama 3.3-70B)", "Google Generative AI"],
    image: "../project_legalitea_ai.png",
    link: "https://legalitea-genai.vercel.app"
  },
  {
    title: "Gemini Live SDK NPM Package",
    description: "A Node.js SDK for interacting with the Gemini Live API.",
    tech: ["Node.js", "TypeScript", "npm", "JavaScript", "Tailwind CSS"],
    image: "../project_gemini_live_sdk.png",
    link: "https://www.npmjs.com/package/gemini-live-sdk"
  },
  {
    title: "CampusConnect",
    description: "A full-stack campus event management system with API integration between a React frontend and Spring Boot backend.",
    tech: ["JavaScript", "Java (Spring Boot)", "React", "Axios", "JWT", "MongoDB", "nginx"],
    image: "../project_campus_connect.png",
    link: "https://campusconnectrscoe.onrender.com/"
  },
  {
    title: 'The Face Mask And Cough Detector. (ML)',
    description: 'A machine learning model that detects whether a person is wearing a face mask and if they are coughing.',
    tech: ['Teachable Machine', 'HTML', 'CSS', 'JS'],
    image: '../Face-Mask.png',
    link: 'https://thefacemaskdetectorml.netlify.app/',
  },
  {
    title: "stallar-hackthon (StellarScholar)",
    description: "A Web3 Learn2Earn platform built on the Stellar blockchain for sustainable scholarship funding.",
    tech: ["JavaScript", "Node.js", "React", "Stellar Blockchain", "Supabase", "Rust", "PLpgSQL"],
    image: "../project_stellar_scholar.png",
    link: "https://github.com/omanandswami2005/stallar-hackthon"
  },
  {
    title: 'AI-Powered-Todo-Agent-Web-App',
    description: 'AI-powered todo agent web app. Create, manage, and automate tasks with AI assistance.',
    tech: ['Node-JS', 'React', 'vite', 'Gemini-API'],
    image: '../Todo-Agent.png',
    link: 'https://github.com/omanandswami2005/AI-Powered-Todo-Agent-Web-App',
  },
  {
    title: 'Social Media Engagement Analysis Report',
    description: 'A comprehensive report on social media engagement metrics and insights.',
    tech: ['LangFlow AI', 'React', 'vite','DataStax Astra DB'],
    image: 'Social-Media.png',
    link: 'https://teamfullstackforce.onrender.com/',
  },
  {
    title: 'The Student-Teacher Appointment Booking System',
    description: 'A web application for booking appointments between students and teachers.',
    tech: ['Node-js', 'Tailwind CSS', 'React JS', 'JWT'],
    image: '../stab.png',
    link: 'https://stabs.onrender.com/',
  },
  {
    title: 'VPolyServer - The Advance College Attendance Management System!',
    description: 'A comprehensive college attendance management system with advanced features.',
    tech: ['React-js',  'Tailwind CSS', 'Node JS', 'MongoDB', 'JWT'],
    image: '../VPolyServer.png',
    link: 'https://vpolyserver.onrender.com/'
  },
  {
    title: 'Fight Against COVID-19',
    description: 'A web page for knowing about COVID-19.',
    tech: ['HTML','CSS'],
    image: '../covid.png',
    link: 'https://fightagainstcovid19.netlify.app/',
  },
  {
    title: "Basic Calculator",
    description: "A simple calculator web application.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "../Calculator.png",
    link: "https://calculatoruml.onrender.com/",
  }
]; 