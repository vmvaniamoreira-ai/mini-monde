import { Contact } from './components/Contact';
import { Portfolio } from './components/Portfolio';
import { TerrariumHighlight } from './components/TerrariumHighlight';
import { About } from './components/About';
import { Services } from './components/Services';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <TerrariumHighlight />
        <Portfolio />
        <Contact />
      </main>
    </div>
  )
}

export default App

