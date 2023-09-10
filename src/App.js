import './App.css';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import StickyNav from './components/StickyNav';



function App() {
  return (
    <div>
      <HeroSection />


      <StickyNav />

      {/* SECTION 1 */}
      <Section1 />

      {/* SECTION 2 */}
      <Section2 />

      {/* FOOTER SECTION */}
      <Footer />

    </div>


  );
}

export default App;
