import { motion } from 'framer-motion'
import { ExternalLink, Briefcase, MapPin, AlertCircle, Gamepad2 } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'

const projects = [
  {
    title: 'SajiloRojgar',
    subtitle: 'MERN Job Finder Platform',
    icon: <Briefcase className="text-purple-400" size={24} />,
    description:
      'A robust portal tailored for Nepali job seekers and employers. Features job application flows, recruiter dashboards, smart vacancy search filters, and real-time status updates.',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    githubLink: 'https://github.com/NirjalaSubedi/JobPortal',
    liveLink: 'https://example.com',
    accentClass: 'from-purple-500/20',
    tagColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
  },
  {
    title: 'Najikai',
    subtitle: 'Location-Based Multi-Vendor Marketplace',
    icon: <MapPin className="text-emerald-400" size={24} />,
    description:
      'A location-intelligent multi-vendor e-commerce platform mapping local grocery stores and shops. Features seamless buy/sell workflows with real-time geographic filtering for nearby users.',
    tech: ['React.js', 'Leaflet.js', 'Node.js', 'Express', 'MongoDB'],
    githubLink: 'https://github.com/NirjalaSubedi/Najikaii',
    liveLink: 'https://example.com',
    accentClass: 'from-emerald-500/20',
    tagColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  },
  {
    title: 'BrainByte',
    subtitle: 'Interactive Multi-Game Platform',
    icon: <Gamepad2 className="text-amber-400" size={24} />,
    description:
      'A dynamic multi-game web platform developed for a code festival, featuring interactive UI layouts, rich visual elements, and smooth client-side gameplay states.',
    tech: ['React.js','Node.js', 'Tailwind CSS', 'Framer Motion','MYSQL'],
    githubLink: 'https://github.com/NirjalaSubedi/BrainByte',
    liveLink: 'https://example.com',
    accentClass: 'from-amber-500/20',
    tagColor: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
  },
  {
    title: 'Nikaas',
    subtitle: 'Social grievance reporting hub',
    icon: <AlertCircle className="text-rose-400" size={24} />,
    description:
      'A community-driven grievance platform. Allows citizens to report local civic issues (potholes, garbage, sewage), coordinate solutions, and upvote major requests for municipal visibility.',
    tech: ['HTML', 'CSS', 'PHP', 'MYSQL'],
    githubLink: 'https://github.com/NirjalaSubedi/Goverment-complaint-portal',
    liveLink: 'https://example.com',
    accentClass: 'from-rose-500/20',
    tagColor: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-light"
          >
            Here is a curated list of digital projects I have engineered from the ground up, focusing on usability, state architecture, and API integration.
          </motion.p>
        </div>

        {/* Project Grid - Automatic 3 columns layout for large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col justify-between p-6 rounded-2xl border border-slate-800/80 bg-slate-950/20 backdrop-blur-md transition-all duration-300 hover:bg-slate-900/20 hover:border-slate-700/80 shadow-2xl relative overflow-hidden"
            >
              {/* Dynamic Top Accent Light Glow on Hover */}
              <div className={`absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent ${proj.accentClass} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="space-y-4 text-left">
                {/* Header Info */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 group-hover:border-slate-700 transition-colors duration-300">
                    {proj.icon}
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={proj.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub size={18} />
                    </a>
                    <a
                      href={proj.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-1 pt-2">
                  <span className="text-xs font-mono text-purple-400 font-semibold tracking-wide block uppercase">
                    {proj.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {proj.title}
                  </h3>
                </div>

                <p className="text-slate-400 text-sm font-light leading-relaxed">
                  {proj.description}
                </p>
              </div>

              {/* Badges / Tech Stack footer */}
              <div className="pt-6 border-t border-slate-900 mt-6 flex flex-wrap gap-1.5 text-left">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono border ${proj.tagColor}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}