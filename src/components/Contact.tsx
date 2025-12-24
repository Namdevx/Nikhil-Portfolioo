import { Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r ${
          theme === 'dark'
            ? 'from-blue-400 to-cyan-400'
            : 'from-blue-600 to-cyan-600'
        } bg-clip-text text-transparent`}>
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className={`backdrop-blur-md rounded-2xl p-6 border transition-all duration-300 hover:shadow-xl group hover:-translate-y-1 ${
              theme === 'dark'
                ? 'bg-gray-800/30 border-gray-700/50 hover:border-cyan-500/50 hover:shadow-cyan-500/20'
                : 'bg-white/30 border-slate-200/50 hover:border-blue-400/50 hover:shadow-blue-500/20'
            }`}>
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl flex-shrink-0 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20'
                    : 'bg-gradient-to-br from-blue-300/30 to-cyan-300/30'
                }`}>
                  <Mail className={`w-6 h-6 ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'}`} />
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${
                    theme === 'dark' ? 'text-gray-200' : 'text-slate-800'
                  }`}>Email</h3>
                  <a
                    href="mailto:namdevn972@gmail.com"
                    className={`transition-colors hover:scale-105 inline-block ${
                      theme === 'dark'
                        ? 'text-cyan-400 hover:text-cyan-300'
                        : 'text-blue-600 hover:text-blue-700'
                    }`}
                  >
                    namdevn972@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className={`backdrop-blur-md rounded-2xl p-6 border transition-all duration-300 hover:shadow-xl group hover:-translate-y-1 ${
              theme === 'dark'
                ? 'bg-gray-800/30 border-gray-700/50 hover:border-cyan-500/50 hover:shadow-cyan-500/20'
                : 'bg-white/30 border-slate-200/50 hover:border-blue-400/50 hover:shadow-blue-500/20'
            }`}>
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl flex-shrink-0 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20'
                    : 'bg-gradient-to-br from-blue-300/30 to-cyan-300/30'
                }`}>
                  <Phone className={`w-6 h-6 ${theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'}`} />
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${
                    theme === 'dark' ? 'text-gray-200' : 'text-slate-800'
                  }`}>Phone</h3>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}>Available on request</p>
                </div>
              </div>
            </div>

            <div className={`backdrop-blur-md rounded-2xl p-6 border ${
              theme === 'dark'
                ? 'bg-gray-800/30 border-gray-700/50'
                : 'bg-white/30 border-slate-200/50'
            }`}>
              <p className={`leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
              }`}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                vision. Feel free to reach out through the contact form or directly via email.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className={`backdrop-blur-md rounded-2xl p-6 border space-y-4 ${
              theme === 'dark'
                ? 'bg-gray-800/30 border-gray-700/50'
                : 'bg-white/30 border-slate-200/50'
            }`}>
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                }`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 ${
                    theme === 'dark'
                      ? 'bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500'
                      : 'bg-white/50 border border-slate-300 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500'
                  }`}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 ${
                    theme === 'dark'
                      ? 'bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500'
                      : 'bg-white/50 border border-slate-300 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                }`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${
                    theme === 'dark'
                      ? 'bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500'
                      : 'bg-white/50 border border-slate-300 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500'
                  }`}
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-white"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>

              {status === 'success' && (
                <p className="text-center text-green-400 animate-fade-in">Message sent successfully!</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
