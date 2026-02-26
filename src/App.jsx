import './App.css'
import Hero from "./components/Hero/Hero";
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import About from './components/About/About';
function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <About/>
    <Slider />
    </>
  );
}

export default App;
