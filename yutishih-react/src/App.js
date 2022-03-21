// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Home';
import Projects from "./Projects"
import About from "./About"
import Blog from "./Blog"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="projects" element={ <Projects /> } />
        <Route path="about" element={ <About /> } />
        <Route path="blog" element={ <Blog /> } />
      </Routes>
    </div>
  );
}

export default App;
