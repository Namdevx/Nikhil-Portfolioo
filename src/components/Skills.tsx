import { Palette, Server } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiMaterialdesign,
  SiReactrouter,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiGraphql,
  SiMongodb,
  SiFirebase,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiGithub,
  SiPostman,
  SiNpm,
  SiDocker,
  SiVercel,
  SiNetlify,
  SiAmazon,
  SiGithubactions,
  SiWebpack,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// Tech Logo Component
const TechLogo = ({
  Icon,
  name,
  theme,
}: {
  Icon: any;
  name: string;
  theme: string;
}) => (
  <div
    className={`flex flex-col items-center gap-2 group/item transition-all duration-300 hover:scale-110 cursor-default`}
  >
    <div className={`transition-all duration-300`}>
      <Icon
        size={40}
        className={`${
          theme === "dark"
            ? "text-gray-300 group-hover/item:text-cyan-400"
            : "text-slate-700 group-hover/item:text-blue-600"
        }`}
      />
    </div>
    <span
      className={`text-xs font-semibold text-center line-clamp-2 ${
        theme === "dark" ? "text-gray-300" : "text-slate-700"
      }`}
    >
      {name}
    </span>
  </div>
);

function Skills() {
  const { theme } = useTheme();

  const technicalExpertise = [
    {
      title: "Frontend Development",
      skills: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "JavaScript ES6+",
      ],
      description: "Building responsive and interactive user interfaces",
      icon: Palette,
      proficiency: 90,
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Authentication",
        "Database Design",
        "Server Architecture",
      ],
      description: "Creating scalable server-side applications",
      icon: Server,
      proficiency: 85,
    },
  ];

  const toolsAndTechnologies = [
    {
      category: "Languages",
      items: [
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "C++", icon: SiCplusplus },
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: SiCss3 },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Frontend",
      items: [
        { name: "React", icon: SiReact },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Redux", icon: SiRedux },
        { name: "Material UI", icon: SiMaterialdesign },
        { name: "React Router", icon: SiReactrouter },
        { name: "Vite", icon: SiVite },
      ],
      color: "from-cyan-500 to-teal-500",
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "GraphQL", icon: SiGraphql },
        { name: "Webpack", icon: SiWebpack },
      ],
      color: "from-teal-500 to-emerald-500",
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "Firebase", icon: SiFirebase },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Supabase", icon: SiSupabase },
      ],
      color: "from-emerald-500 to-green-500",
    },
    {
      category: "Tools & DevOps",
      items: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "VS Code", icon: VscVscode },
        { name: "Postman", icon: SiPostman },
        { name: "npm", icon: SiNpm },
        { name: "Docker", icon: SiDocker },
      ],
      color: "from-green-500 to-lime-500",
    },
    {
      category: "Deployment",
      items: [
        { name: "Vercel", icon: SiVercel },
        { name: "Netlify", icon: SiNetlify },
        { name: "AWS", icon: SiAmazon },
        { name: "GitHub Actions", icon: SiGithubactions },
      ],
      color: "from-lime-500 to-yellow-500",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Technical Expertise Section */}
        <div className="mb-20">
          <h2
            className={`text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r ${
              theme === "dark"
                ? "from-blue-400 to-cyan-400"
                : "from-blue-600 to-cyan-600"
            } bg-clip-text text-transparent`}
          >
            Technical Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalExpertise.map((expertise, idx) => {
              const Icon = expertise.icon;
              return (
                <div
                  key={expertise.title}
                  className={`group backdrop-blur-md rounded-2xl p-8 border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                    theme === "dark"
                      ? "bg-gray-800/30 border-gray-700/50 hover:border-cyan-500/50 hover:shadow-cyan-500/20"
                      : "bg-white/30 border-slate-200/50 hover:border-blue-400/50 hover:shadow-blue-500/20"
                  }`}
                  style={{
                    animation: `fadeInUp 0.6s ease-out`,
                    animationDelay: `${idx * 0.1}s`,
                    animationFillMode: "both",
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${
                        theme === "dark"
                          ? "bg-gradient-to-br from-cyan-500/30 to-blue-500/20"
                          : "bg-gradient-to-br from-blue-400/30 to-cyan-300/20"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          theme === "dark" ? "text-cyan-400" : "text-blue-600"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-2xl font-bold mb-2 ${
                          theme === "dark" ? "text-gray-100" : "text-slate-800"
                        }`}
                      >
                        {expertise.title}
                      </h3>
                      <p
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-400" : "text-slate-600"
                        }`}
                      >
                        {expertise.description}
                      </p>
                    </div>
                  </div>

                  {/* Proficiency Progress Bar */}
                  <div className="mb-6 mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className={`text-sm font-semibold ${
                          theme === "dark" ? "text-gray-300" : "text-slate-700"
                        }`}
                      >
                        Proficiency
                      </span>
                      <span
                        className={`text-sm font-bold ${
                          theme === "dark" ? "text-cyan-400" : "text-blue-600"
                        }`}
                      >
                        {expertise.proficiency}%
                      </span>
                    </div>
                    <div
                      className={`w-full h-2 rounded-full overflow-hidden ${
                        theme === "dark" ? "bg-gray-700/50" : "bg-slate-300/50"
                      }`}
                    >
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${expertise.proficiency}%`,
                          animation: `progress-fill 1s ease-out`,
                          animationDelay: `${idx * 0.1}s`,
                          animationFillMode: "both",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {expertise.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-2 rounded-lg text-sm font-medium border transition-all duration-300 hover:scale-110 ${
                          theme === "dark"
                            ? "bg-gray-700/50 text-gray-300 border-gray-600/50 group-hover:border-cyan-500/50"
                            : "bg-slate-200/50 text-slate-700 border-slate-300/50 group-hover:border-blue-400/50"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tools & Technologies Section */}
        <div>
          <h2
            className={`text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r ${
              theme === "dark"
                ? "from-blue-400 to-cyan-400"
                : "from-blue-600 to-cyan-600"
            } bg-clip-text text-transparent`}
          >
            Tools & Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolsAndTechnologies.map((tech, idx) => (
              <div
                key={tech.category}
                className={`group backdrop-blur-md rounded-2xl p-8 border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  theme === "dark"
                    ? "bg-gray-800/30 border-gray-700/50 hover:border-cyan-500/50 hover:shadow-cyan-500/20"
                    : "bg-white/30 border-slate-200/50 hover:border-blue-400/50 hover:shadow-blue-500/20"
                }`}
                style={{
                  animation: `fadeInUp 0.5s ease-out`,
                  animationDelay: `${idx * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                <h3
                  className={`text-lg font-bold mb-6 bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}
                >
                  {tech.category}
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {tech.items.map((item) => (
                    <div key={item.name}>
                      <TechLogo
                        Icon={item.icon}
                        name={item.name}
                        theme={theme}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progress-fill {
          from {
            width: 0%;
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}

export default Skills;
