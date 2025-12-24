import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 transform
        dark:bg-gray-800/50 dark:border dark:border-gray-700/50 dark:hover:bg-gray-700/50 dark:hover:shadow-lg dark:hover:shadow-cyan-500/30
        bg-gray-100/50 border border-gray-300/50 hover:bg-gray-200/50 hover:shadow-lg hover:shadow-blue-500/20"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-400 transition-transform duration-500 rotate-0 hover:rotate-180" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700 transition-transform duration-500 rotate-0 hover:rotate-180" />
      )}
    </button>
  );
}

export default ThemeToggle;
