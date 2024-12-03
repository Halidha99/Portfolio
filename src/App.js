import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
  <Header></Header>
     <Home></Home>
     <About></About>
     <Education></Education>
     <Projects></Projects>
     <Resume></Resume>
     <Contact></Contact>
     <Footer></Footer>
    </div>
  );
}

export default App;
