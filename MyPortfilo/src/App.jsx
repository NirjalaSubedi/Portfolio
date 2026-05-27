import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#070a13] text-[#e2e8f0] antialiased selection:bg-purple-500/30 selection:text-purple-200 relative overflow-x-hidden">
      
      {/* Background Radial Glow Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px] animate-glow"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-900/10 blur-[140px] animate-glow" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full bg-emerald-950/5 blur-[100px] animate-glow" style={{ animationDelay: '-6s' }}></div>
      </div>

      {/* Main Page Layout Container */}
      <div className="relative z-10">
        <Navbar />
        
        <main className="space-y-4">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        
        {/* Footer */}
        <footer className="py-8 text-center text-xs sm:text-sm text-slate-500 border-t border-slate-900 mt-20 relative z-10 bg-slate-950/20 backdrop-blur-sm">
          <p>© {new Date().getFullYear()} Nirjala. Built with React, Tailwind v4, & Framer Motion.</p>
        </footer>
      </div>
    </div>
  )
}

export default App
