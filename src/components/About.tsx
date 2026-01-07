import { GraduationCap, MapPin } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function About() {
  const { theme } = useTheme();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r ${
            theme === "dark"
              ? "from-blue-400 to-cyan-400"
              : "from-blue-600 to-cyan-600"
          } bg-clip-text text-transparent`}
        >
          About Me
        </h2>

        <div
          className={`backdrop-blur-md rounded-3xl p-8 sm:p-12 border transition-all duration-300 hover:shadow-2xl group ${
            theme === "dark"
              ? "bg-gray-800/30 border-gray-700/50 hover:border-cyan-500/50 hover:shadow-cyan-500/20"
              : "bg-white/30 border-slate-200/50 hover:border-blue-400/50 hover:shadow-blue-500/20"
          }`}
        >
          <div className="space-y-6">
            <div className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform duration-300">
              <div
                className={`p-3 rounded-xl flex-shrink-0 ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
                    : "bg-gradient-to-br from-blue-300/30 to-cyan-300/30"
                }`}
              >
                <GraduationCap
                  className={`w-6 h-6 ${
                    theme === "dark" ? "text-cyan-400" : "text-blue-600"
                  }`}
                />
              </div>
              <div className="flex-1">
                <h3
                  className={`text-2xl font-semibold mb-4 ${
                    theme === "dark" ? "text-gray-100" : "text-slate-800"
                  }`}
                >
                  Education
                </h3>

                {/* University Education */}
                <div className="mb-6">
                  <p
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-gray-200" : "text-slate-800"
                    }`}
                  >
                    Bachelor of Technology in Computer Science Engineering
                  </p>
                  <p
                    className={
                      theme === "dark" ? "text-gray-400" : "text-slate-600"
                    }
                  >
                    Parul Institute of Technology
                  </p>
                  <p
                    className={
                      theme === "dark" ? "text-gray-500" : "text-slate-500"
                    }
                  >
                    2022 – 2026
                    CGPA: 6.33
                  </p>
                </div>

                {/* High School Education */}
                <div>
                  <p
                    className={`text-lg font-semibold ${
                      theme === "dark" ? "text-gray-200" : "text-slate-800"
                    }`}
                  >
                    Govt. Higher Secondary School, MP
                  </p>
                  <p
                    className={
                      theme === "dark" ? "text-gray-400" : "text-slate-600"
                    }
                  >
                    
                  </p>
                  <p
                    className={
                      theme === "dark" ? "text-gray-400" : "text-slate-600"
                    }
                  >
                    Score: 81%
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform duration-300">
              <div
                className={`p-3 rounded-xl flex-shrink-0 ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
                    : "bg-gradient-to-br from-blue-300/30 to-cyan-300/30"
                }`}
              >
                <MapPin
                  className={`w-6 h-6 ${
                    theme === "dark" ? "text-cyan-400" : "text-blue-600"
                  }`}
                />
              </div>
              <div className="flex-1">
                <h3
                  className={`text-2xl font-semibold mb-2 ${
                    theme === "dark" ? "text-gray-100" : "text-slate-800"
                  }`}
                >
                  Location
                </h3>
                <p
                  className={`text-lg ${
                    theme === "dark" ? "text-gray-300" : "text-slate-700"
                  }`}
                >
                  Vadodara, India
                </p>
              </div>
            </div>

            <div
              className={`pt-4 border-t ${
                theme === "dark" ? "border-gray-700/50" : "border-slate-200/50"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
