import './App.css';
import React, { useRef } from 'react';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import StickyNav from './components/StickyNav';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { animateScroll as scroll } from 'react-scroll'



function App() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'section1') {
      section1Ref.current.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'section2') {
      section2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    // Add more conditions for other sections
  };


  return (
    <div>
      <HeroSection scrollToSection={scrollToSection} />

      <StickyNav scrollToSection={scrollToSection} />

      {/* SECTION 1 */}
      <section ref={section1Ref}>
        <Section1 />
      </section>


      {/* SECTION 2 */}
      <section ref={section2Ref}>
        <Section2 />
      </section>


      {/* FOOTER SECTION */}
      <Footer />
    </div>

  );
}

export default App;
