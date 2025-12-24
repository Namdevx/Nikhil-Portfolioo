import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";

interface Blob {
  id: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  x: number;
  y: number;
}

function AnimatedBackground() {
  const { theme } = useTheme();
  const [blobs, setBlobs] = useState<Blob[]>([]);

  useEffect(() => {
    // Generate random blobs on mount
    const generateBlobs = () => {
      const darkColors = [
        "bg-blue-500",
        "bg-cyan-500",
        "bg-purple-500",
        "bg-teal-500",
        "bg-indigo-500",
        "bg-pink-500",
      ];
      const lightColors = [
        "bg-blue-400",
        "bg-cyan-400",
        "bg-purple-300",
        "bg-pink-300",
        "bg-indigo-400",
        "bg-rose-300",
      ];
      const colors = theme === "dark" ? darkColors : lightColors;

      const newBlobs: Blob[] = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        size: Math.random() * 400 + 200,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 10,
        x: Math.random() * 100,
        y: Math.random() * 100,
      }));

      setBlobs(newBlobs);
    };

    generateBlobs();

    // Regenerate blobs every 25 seconds for continuous randomness
    const interval = setInterval(generateBlobs, 25000);
    return () => clearInterval(interval);
  }, [theme]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient background */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900"
            : "bg-gradient-to-br from-white via-blue-50 to-cyan-50"
        }`}
      ></div>

      {/* Dynamic animated blobs - More visible */}
      <div
        className={`absolute inset-0 ${
          theme === "dark" ? "opacity-50" : "opacity-60"
        }`}
      >
        {blobs.map((blob) => (
          <div
            key={blob.id}
            className={`absolute rounded-full mix-blend-multiply filter blur-3xl ${blob.color}`}
            style={{
              width: `${blob.size}px`,
              height: `${blob.size}px`,
              left: `${blob.x}%`,
              top: `${blob.y}%`,
              opacity: theme === "dark" ? 0.35 : 0.4,
              animation: `blob ${blob.duration}s infinite`,
              animationDelay: `${blob.delay}s`,
              transform: `translate(-50%, -50%)`,
            }}
          ></div>
        ))}
      </div>

      {/* Large floating particles - More visible and bigger */}
      <div
        className={`absolute inset-0 ${
          theme === "dark" ? "opacity-40" : "opacity-30"
        }`}
      >
        {Array.from({ length: 20 }).map((_, i) => {
          const size = Math.random() * 8 + 3;
          return (
            <div
              key={`particle-${i}`}
              className={`absolute rounded-full ${
                theme === "dark" ? "bg-cyan-400" : "bg-blue-500"
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${
                  Math.random() * 12 + 8
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 8}s`,
                boxShadow:
                  theme === "dark"
                    ? `0 0 ${size * 2}px rgba(34, 211, 238, 0.6)`
                    : `0 0 ${size * 1.5}px rgba(59, 130, 246, 0.5)`,
              }}
            ></div>
          );
        })}
      </div>

      {/* Pulsing glow dots - Large and prominent */}
      <div
        className={`absolute inset-0 ${
          theme === "dark" ? "opacity-50" : "opacity-35"
        }`}
      >
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`glow-${i}`}
            className={`absolute rounded-full animate-pulse ${
              theme === "dark"
                ? i % 3 === 0
                  ? "bg-cyan-500"
                  : i % 3 === 1
                  ? "bg-blue-500"
                  : "bg-purple-500"
                : i % 3 === 0
                ? "bg-blue-400"
                : i % 3 === 1
                ? "bg-cyan-400"
                : "bg-purple-400"
            }`}
            style={{
              width: `${Math.random() * 12 + 6}px`,
              height: `${Math.random() * 12 + 6}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${Math.random() * 4 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              boxShadow:
                theme === "dark"
                  ? `0 0 ${Math.random() * 20 + 15}px rgba(34, 211, 238, 0.8)`
                  : `0 0 ${Math.random() * 15 + 10}px rgba(59, 130, 246, 0.6)`,
            }}
          ></div>
        ))}
      </div>

      {/* Radial glow from top - More prominent */}
      <div
        className="absolute inset-0"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(ellipse at 50% 0%, rgba(34, 211, 238, 0.15) 0%, transparent 60%)"
              : "radial-gradient(ellipse at 50% 0%, rgba(59, 130, 246, 0.12) 0%, transparent 60%)",
        }}
      ></div>

      {/* Bottom gradient fade */}
      <div
        className={`absolute inset-0 bg-gradient-to-t ${
          theme === "dark"
            ? "from-gray-900 via-transparent to-transparent"
            : "from-white via-transparent to-transparent"
        } opacity-50`}
      ></div>

      <style>{`
        @keyframes blob {
          0% {
            transform: translate(-50%, -50%) scale(1) translate(0px, 0px) rotate(0deg);
          }
          25% {
            transform: translate(-50%, -50%) scale(1.15) translate(40px, -60px) rotate(90deg);
          }
          50% {
            transform: translate(-50%, -50%) scale(0.85) translate(-30px, 70px) rotate(180deg);
          }
          75% {
            transform: translate(-50%, -50%) scale(1.1) translate(60px, 30px) rotate(270deg);
          }
          100% {
            transform: translate(-50%, -50%) scale(1) translate(0px, 0px) rotate(360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-50px) translateX(30px) rotate(120deg);
          }
          66% {
            transform: translateY(-100px) translateX(-25px) rotate(240deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}

export default AnimatedBackground;
