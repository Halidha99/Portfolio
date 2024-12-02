import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
  <Header></Header>
     <Home></Home>
     <About></About>
     <Education></Education>
     <Projects></Projects>
    </div>
  );
}

export default App;
