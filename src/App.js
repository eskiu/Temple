import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Features from './components/Features';
import About from './components/About';
import History from './components/History'
import Calidad from './components/Calidad';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Features />
      <About />
      <History />
      <Calidad />
      <Contact />
    </div>
  );
}

export default App;