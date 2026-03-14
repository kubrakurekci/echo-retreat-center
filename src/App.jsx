import './App.css'
import Hero from "./components/Hero/Hero";
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import About from './components/About/About';
import Stay from './components/Stay/Stay';
import Footer from './components/Footer/Footer';
import Comments from './components/Comments/Comments';
import Contact from './components/Contact/Contact';
function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <About/>
    <Slider />
    <Stay />
    <Comments />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
