import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/tesimonials/Testimonials';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testimonials />
      </main>
    </>
  );
}

export default App;
