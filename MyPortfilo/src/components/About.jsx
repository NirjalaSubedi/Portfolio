import { motion } from 'framer-motion'
import { GraduationCap, Code, Calendar, Award } from 'lucide-react'

const education = [
  {
    degree: 'Bachelor in Computer Application',
    institution: 'Tribhuvan University, Itahari Namuna College',
    duration: '2023 - Present',
    description: 'Specializing in software development, algorithms, and full-stack system architecture.',
  },
  {
    degree: 'High School (+2 Computer Science)',
    institution: 'Itahari Namuna College, Sunsari',
    duration: '2021 - 2022',
    description: 'Completed high school with a focus on Mathematics, and Computer Science.',
  },
]

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['React.js', 'Tailwind CSS', 'Redux Toolkit', 'HTML5/CSS3', 'JavaScript'],
  },
  {
    title: 'Backend & Database',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'MYSQL'],
  },
  {
    title: 'Tools & Workflows',
    skills: ['Git & GitHub', 'Postman', 'Vite', 'Figma'],
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
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
            About Me
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-light"
          >
            I design and build dynamic digital solutions with modern technology stacks, combining clean engineering practices with elegant aesthetics.
          </motion.p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Education & Story (7 Cols) */}
          <div className="lg:col-span-7 space-y-10 flex flex-col justify-between">
            
            {/* Story Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-8 rounded-2xl border border-slate-800/80 bg-slate-950/20 backdrop-blur-md space-y-4 text-left"
            >
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Code className="text-purple-400" size={20} />
                My Journey
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Hello! I'm Nirjala, a web developer based in Itahari, Nepal. I am highly motivated by the process of taking complex problems and building robust, elegant full-stack solutions.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                My coding journey started in college, where I fell in love with turning logical challenges into visual, functional products. Since then, I've committed to mastering modern web tech frameworks like React, Node.js, and MongoDB.
              </p>
            </motion.div>

            {/* Education Timeline */}
            <div className="space-y-6 text-left">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2 px-2">
                <GraduationCap className="text-indigo-400" size={22} />
                Education
              </h3>

              <div className="relative border-l-2 border-slate-800/80 pl-6 ml-4 space-y-8">
                {education.map((edu, idx) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative group"
                  >
                    {/* Circle Node Icon */}
                    <div className="absolute -left-[35px] top-1.5 p-1 rounded-full bg-slate-900 border border-slate-800 text-purple-400 group-hover:text-white group-hover:bg-purple-600 transition-all duration-300">
                      <Calendar size={12} />
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider">
                        {edu.duration}
                      </span>
                      <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-medium text-slate-400">{edu.institution}</p>
                      <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed mt-1">
                        {edu.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Skills (5 Cols) */}
          <div className="lg:col-span-5 space-y-10 flex flex-col justify-between">
            
            {/* Skills Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-2xl border border-slate-800/80 bg-slate-950/20 backdrop-blur-md space-y-6 text-left flex-1"
            >
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Award className="text-indigo-400" size={20} />
                Technical Skills
              </h3>

              <div className="space-y-6">
                {skillCategories.map((cat) => (
                  <div key={cat.title} className="space-y-2">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      {cat.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300 hover:border-purple-500/50 hover:bg-purple-950/20 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
          </div>

        </div>

      </div>
    </section>
  )
}