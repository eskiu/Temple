import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Features from './components/Features';
import About from './components/About';
import History from './components/History'
import Calidad from './components/Calidad';

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Features />
      <About />
      <History />
      <Calidad />
    </div>
  );
}

export default App;