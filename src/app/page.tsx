import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Vision from '../components/Vision';
import Team from '../components/Team';
import Research from '../components/Research';
import Partners from '../components/Partners';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Team />
        <Research />
        <Partners />
      </main>
      
      <footer className="py-12 bg-zinc-50 text-center text-zinc-500 text-sm border-t border-zinc-100">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} i³ × CMU Modelverse Dev Initiative. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="https://intelligencecubed.io/" className="hover:text-zinc-900 transition-colors">Intelligence Cubed</a>
            <a href="https://www.cs.cmu.edu/research/" className="hover:text-zinc-900 transition-colors">CMU Research</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
