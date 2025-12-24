import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function Projects() {
  const { theme } = useTheme();

  const projects = [
    {
      title: 'SmartLoad 3D – Smart Container Optimizer',
      description:
        'Advanced 3D container loading optimizer achieving 92% space utilization accuracy. Built with React and WebGL for real-time 3D visualization of optimal container packing solutions.',
      tech: ['React', 'WebGL', 'Node.js', 'Three.js'],
      github: 'https://github.com/namdevx',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Coursed – Course Selling Platform',
      description:
        'Full-stack MERN application for course selling with secure authentication, instructor dashboard, and comprehensive course management system. Features include user authentication, payment integration, and admin panel.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      github: 'https://github.com/namdevx',
      gradient: 'from-cyan-500 to-teal-500',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r ${
          theme === 'dark'
            ? 'from-blue-400 to-cyan-400'
            : 'from-blue-600 to-cyan-600'
        } bg-clip-text text-transparent`}>
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group backdrop-blur-md rounded-2xl p-8 border transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.05] ${
                theme === 'dark'
                  ? 'bg-gray-800/30 border-gray-700/50 hover:border-cyan-500/50 hover:shadow-cyan-500/20'
                  : 'bg-white/30 border-slate-200/50 hover:border-blue-400/50 hover:shadow-blue-500/20'
              }`}
              style={{
                animation: `slideUp 0.6s ease-out`,
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'both'
              }}
            >
              <div className="space-y-4">
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                  {project.title}
                </h3>

                <p className={`leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
                }`}>{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm border transition-all duration-300 hover:scale-110 ${
                        theme === 'dark'
                          ? 'bg-gradient-to-r from-gray-700/50 to-gray-600/50 text-gray-300 border-gray-600/50'
                          : 'bg-gradient-to-r from-slate-200/50 to-slate-100/50 text-slate-700 border-slate-300/50'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm font-medium ${
                      theme === 'dark'
                        ? 'bg-gray-700/50 hover:bg-gray-600/50 hover:shadow-blue-500/20'
                        : 'bg-slate-200/50 hover:bg-slate-300/50 hover:shadow-blue-400/20'
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm font-medium ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-cyan-500/50 hover:border-cyan-400 hover:shadow-cyan-500/20'
                        : 'bg-gradient-to-r from-blue-300/20 to-cyan-300/20 border-blue-400/50 hover:border-blue-500 hover:shadow-blue-400/20'
                    }`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;
