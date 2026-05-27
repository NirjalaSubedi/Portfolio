import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowRight, Mail, Cpu, Code2, Sparkles } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

const roles = [
  'Full Stack Developer',
  'MERN Stack',
  'Problem Solver',
  'UI/UX Designer',
  'Prompt Engineer'
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleScrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const position = element.offsetTop - offset
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 px-6 overflow-hidden"
    >
      {/* Background Dots Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* Left Content Column */}
        <div className="md:col-span-7 flex flex-col items-center text-center md:items-start md:text-left space-y-6">
          
          {/* Profile Image Avatar - Size increased, alignment kept left (md:self-start) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full border-2 border-purple-500/30 p-1 mb-2 group shadow-xl shadow-purple-950/20 self-center md:self-start"
          >
            <div className="w-full h-full rounded-full overflow-hidden border border-slate-800/80">
              <img
                src="/profile/profileImage.jpeg"
                alt="Nirjala Profile"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {/* Ambient Purple Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-purple-500/10 blur-[10px] -z-10 group-hover:bg-purple-500/20 transition-all duration-300" />
          </motion.div>

          {/* Heading */}
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
            >
              Namaste, I am <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
                Nirjala
              </span>
            </motion.h1>

            {/* Dynamic Role Switcher */}
            <div className="h-8 sm:h-10 flex items-center">
              <span className="text-lg sm:text-2xl text-slate-400 font-medium mr-2">I am a</span>
              <div className="relative h-full overflow-hidden flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-350 max-w-xl leading-relaxed font-light"
          >
            A passionate developer focused on building fast, scalable, and responsive web applications.
            Solving real-world problems with modern technologies and clean codebases.
          </motion.p>

          {/* CTA Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl hover:from-purple-500 hover:to-indigo-500 hover:shadow-lg hover:shadow-purple-500/25 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer group"
            >
              Explore Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="px-6 py-3 text-sm font-semibold text-slate-200 border border-slate-700/80 rounded-xl hover:border-purple-500/50 hover:bg-purple-950/10 hover:text-white transition-all duration-300 active:scale-95 cursor-pointer"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Quick Social Contacts */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 pt-4 w-full md:w-auto"
          >
            <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Connect:</span>
            <div className="flex gap-4">
              <a
                href="https://github.com/NirjalaSubedi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-purple-400 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/nirjala-subedi-a53260305/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all duration-300"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="mailto:nirjalasubedi944@example.com"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-pink-500/40 hover:bg-pink-500/5 transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Right Visual/Illustration Column */}
        <div className="md:col-span-5 relative flex justify-center items-start py-6 w-full md:pt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[400px] aspect-square rounded-3xl border border-slate-800/80 bg-slate-950/40 backdrop-blur-md p-6 flex flex-col justify-between shadow-2xl shadow-purple-950/10 overflow-hidden"
          >
            {/* Animated Light Blobs in the Card */}
            <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] rounded-full bg-purple-500/10 blur-[60px]" />
            <div className="absolute bottom-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full bg-indigo-500/10 blur-[60px]" />

            {/* Top Bar of the Mock IDE */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 relative z-10">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              </div>
              <span className="text-xs font-mono text-slate-500 tracking-wider flex items-center gap-1">
                <Code2 size={12} className="text-purple-400" />
                developer.js
              </span>
            </div>

            {/* Simulated Code Panel */}
            <div className="flex-1 font-mono text-left py-6 text-xs sm:text-sm space-y-3 select-none relative z-10">
              <p className="text-purple-400">
                const <span className="text-indigo-300">developer</span> = &#123;
              </p>
              <p className="pl-4 text-slate-400">
                name: <span className="text-emerald-400">"Nirjala"</span>,
              </p>
              <p className="pl-4 text-slate-400">
                role: <span className="text-emerald-400">"Full Stack Developer"</span>,
              </p>
              <p className="pl-4 text-slate-400">
                skills: [
              </p>
              <p className="pl-8 text-indigo-300">
                <span className="text-amber-400">"React"</span>,{' '}
                <span className="text-cyan-400">"Tailwind"</span>,{' '}
                <span className="text-emerald-400">"Node.js"</span>,{''}
                <span className="text-orange-400">"PHP"</span>
              </p>
              <p className="pl-4 text-slate-400">],</p>
              <p className="pl-4 text-slate-400">
                location: <span className="text-emerald-400">"Sunsari, Nepal"</span>,
              </p>
              <p className="pl-4 text-slate-400">
                lovesSolvingProblems: <span className="text-orange-400">true</span>
              </p>
              <p className="text-purple-400">&#125;</p>
            </div>

            {/* Bottom Panel */}
            <div className="border-t border-slate-800/85 pt-4 flex items-center justify-between relative z-10 text-slate-450 font-mono text-xs">
              <span className="flex items-center gap-1">
                <Cpu size={14} className="text-indigo-400" />
                System Active
              </span>
              <span className="text-purple-400/90 font-semibold animate-pulse">Online</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}