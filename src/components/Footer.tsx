import { useTheme } from '../context/ThemeContext';
import { ArrowUp } from 'lucide-react';

function Footer() {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-8 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-500 ${
      theme === 'dark'
        ? 'border-gray-800/50 bg-gray-900/50'
        : 'border-slate-200/50 bg-slate-50/50'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={scrollToTop}
            className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
              theme === 'dark'
                ? 'text-gray-400 hover:text-cyan-400'
                : 'text-slate-600 hover:text-blue-600'
            }`}
          >
            Back to top
            <ArrowUp className="w-4 h-4 animate-bounce" />
          </button>
          <p className={`text-center ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
            Built with <span className={theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'}>React</span> and{' '}
            <span className={theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'}>Tailwind CSS</span> by{' '}
            <span className={`font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-slate-800'}`}>
              Nikhil Namdev
            </span>
          </p>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-slate-500'}`}>
            © 2024 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
