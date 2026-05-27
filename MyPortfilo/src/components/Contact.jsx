import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate standard form submit
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles size={12} className="text-pink-400" />
            <span>Connection</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-light"
          >
            Have a project in mind, a job opportunity, or just want to say hello? Drop a message below and let's create something together!
          </motion.p>
        </div>

        {/* Layout Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct info & social details (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-10"
          >
            {/* Context Card */}
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-800/80 bg-slate-950/20 backdrop-blur-md space-y-6 text-left">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <MessageSquare className="text-purple-400" size={20} />
                Let's Talk
              </h3>
              <p className="text-slate-350 text-sm sm:text-base leading-relaxed font-light">
                I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-purple-400 group-hover:text-white group-hover:bg-purple-600 transition-all duration-300">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono block">Email Me</span>
                    <a href="mailto:contact@example.com" className="text-sm font-semibold text-slate-200 hover:text-purple-450 transition-colors">
                      contact@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-indigo-400 group-hover:text-white group-hover:bg-indigo-600 transition-all duration-300">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono block">Call Me</span>
                    <a href="tel:+9779800000000" className="text-sm font-semibold text-slate-200 hover:text-indigo-450 transition-colors">
                      +977 9800000000
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-pink-400 group-hover:text-white group-hover:bg-pink-600 transition-all duration-300">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono block">Location</span>
                    <span className="text-sm font-semibold text-slate-200">
                      Kathmandu, Nepal
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Panel */}
            <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-950/20 backdrop-blur-md space-y-4 text-left">
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                Social Profiles
              </h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-purple-950/25 hover:border-purple-500/40 text-slate-300 hover:text-white transition-all duration-300"
                >
                  <FaGithub size={16} />
                  <span className="text-xs font-semibold">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-indigo-950/25 hover:border-indigo-500/40 text-slate-300 hover:text-white transition-all duration-300"
                >
                  <FaLinkedin size={16} />
                  <span className="text-xs font-semibold">LinkedIn</span>
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-slate-800/80 bg-slate-950/20 backdrop-blur-md text-left shadow-2xl flex flex-col justify-center"
          >
            {submitStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-4"
              >
                <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-slate-400 text-sm font-light max-w-sm mx-auto">
                  Thank you for reaching out, Nirjala will review your request and get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitStatus(null)}
                  className="mt-6 px-5 py-2 text-xs font-semibold text-white tracking-wide uppercase border border-purple-500/30 rounded-lg hover:bg-purple-500/10 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/80 focus:ring-2 focus:ring-purple-500/10 transition-all duration-300 text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                      Your Email
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/80 focus:ring-2 focus:ring-purple-500/10 transition-all duration-300 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                    Subject
                  </label>
                  <input
                    required
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Let's collaborate!"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/80 focus:ring-2 focus:ring-purple-500/10 transition-all duration-300 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                    Message
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello! I would like to build..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/80 focus:ring-2 focus:ring-purple-500/10 transition-all duration-300 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-md shadow-purple-950/20 flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  )
}
