import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import MarketingWork from './components/MarketingWork';
import QAProjects from './components/QAProjects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <MarketingWork />
        <QAProjects />
        
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
