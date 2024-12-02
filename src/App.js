import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
  <Header></Header>
     <Home></Home>
     <About></About>
    </div>
  );
}

export default App;
