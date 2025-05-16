import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { PlayerDnaProfile } from './components/PlayerDnaProfile';

function App() {
  return (
    <div className="min-h-screen gradient-bg font-oxanium">
      <Navbar />
      <HeroSection />
      <PlayerDnaProfile />
      <Footer />
    </div>
  );
}

export default App;