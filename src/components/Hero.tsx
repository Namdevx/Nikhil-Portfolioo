import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Sparkles,
  Code2,
  ChevronDown,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Hero() {
  const { theme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 left-10 w-40 h-40 rounded-full blur-3xl animate-pulse opacity-50 ${
            theme === "dark" ? "bg-cyan-500/20" : "bg-blue-300/30"
          }`}
        ></div>
        <div
          className={`absolute bottom-20 right-10 w-40 h-40 rounded-full blur-3xl animate-pulse opacity-50 ${
            theme === "dark" ? "bg-blue-500/20" : "bg-purple-200/30"
          }`}
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-5xl w-full text-center relative z-10">
        <div className="space-y-8 animate-fade-in-up">
          {/* Welcome Badge */}
          <div
            className="flex items-center justify-center gap-2 mb-6 animate-bounce"
            style={{ animationDelay: "0.2s" }}
          >
            <Sparkles
              className={`w-6 h-6 ${
                theme === "dark" ? "text-cyan-400" : "text-blue-600"
              }`}
            />
            <span
              className={`text-base sm:text-lg font-semibold tracking-widest ${
                theme === "dark" ? "text-cyan-400" : "text-blue-600"
              }`}
            >
              WELCOME TO MY PORTFOLIO
            </span>
            <Sparkles
              className={`w-6 h-6 ${
                theme === "dark" ? "text-cyan-400" : "text-blue-600"
              }`}
            />
          </div>

          <div className="space-y-6">
            {/* Main Name - Two tone style */}
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight`}
            >
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-500 bg-clip-text text-transparent">
                Nikhil{" "}
              </span>
              <span className={theme === "dark" ? "text-white" : "text-black"}>
                Namdev
              </span>
            </h1>

            {/* Subtitle - More descriptive */}
            <h2
              className={`text-xl sm:text-2xl lg:text-3xl animate-fade-in-up ${
                theme === "dark" ? "text-gray-300" : "text-slate-600"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              Self-driven Computer Science undergraduate crafting scalable
              full-stack applications
            </h2>

            {/* Technical Skills - New section */}
            <div
              className={`text-base sm:text-lg lg:text-lg max-w-3xl mx-auto animate-fade-in-up ${
                theme === "dark" ? "text-gray-400" : "text-slate-700"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              <p className="leading-relaxed">
                Proficient in React, TypeScript, Node.js, MongoDB, and REST
                APIs. Skilled at crafting responsive UIs and optimizing backend
                logic.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up flex-wrap"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              onClick={() => scrollToSection("projects")}
              className={`group px-8 py-3 bg-blue-600 rounded-lg font-semibold text-base hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 ${
                theme === "dark"
                  ? "text-white hover:bg-blue-700"
                  : "text-white hover:bg-blue-700"
              }`}
            >
              View Work
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              className={`px-8 py-3 rounded-lg font-semibold text-base transition-all duration-300 hover:scale-105 border-2 flex items-center gap-2 ${
                theme === "dark"
                  ? "border-gray-600 bg-gray-800/30 hover:bg-gray-700/50 text-gray-300"
                  : "border-gray-300 bg-white/30 hover:bg-slate-100/50 text-slate-700"
              }`}
            >
              Download Resume
              <Mail className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-8 py-3 rounded-lg font-semibold text-base transition-all duration-300 hover:scale-105 border-2 flex items-center gap-2 ${
                theme === "dark"
                  ? "border-blue-600 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 hover:text-blue-300"
                  : "border-blue-600 bg-blue-600/10 hover:bg-blue-600/20 text-blue-600 hover:text-blue-700"
              }`}
            >
              Contact
            </button>
          </div>

          {/* Social Icons - Updated */}
          <div
            className="flex gap-6 justify-center pt-6 animate-fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            <a
              href="https://github.com/namdevx"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-110 border ${
                theme === "dark"
                  ? "bg-gray-800/50 border-gray-700/50 hover:bg-gray-700"
                  : "bg-white/50 border-slate-300/30 hover:bg-slate-100/50"
              }`}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/nikhilnamdevx"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-110 border ${
                theme === "dark"
                  ? "bg-gray-800/50 border-gray-700/50 hover:bg-gray-700"
                  : "bg-white/50 border-slate-300/30 hover:bg-slate-100/50"
              }`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:namdevn972@gmail.com"
              className={`p-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-110 border ${
                theme === "dark"
                  ? "bg-gray-800/50 border-gray-700/50 hover:bg-gray-700"
                  : "bg-white/50 border-slate-300/30 hover:bg-slate-100/50"
              }`}
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Available for work badge */}
          <div
            className="pt-4 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <div
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border ${
                theme === "dark"
                  ? "bg-green-500/10 border-green-500/30 text-green-400"
                  : "bg-green-50 border-green-200 text-green-700"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full animate-pulse ${
                  theme === "dark" ? "bg-green-400" : "bg-green-600"
                }`}
              ></div>
              <span className="font-medium text-sm">Available for work</span>
            </div>
          </div>
        </div>
      </div>

      {/* Down arrow scroll indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-300 hover:scale-110 z-20 ${
          theme === "dark"
            ? "text-cyan-400 hover:text-cyan-300"
            : "text-blue-600 hover:text-blue-700"
        }`}
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}

export default Hero;
