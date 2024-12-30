import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const circles = document.querySelectorAll(".hover-circle");
      circles.forEach((circle) => {
        const rect = circle.getBoundingClientRect();
        const distance = Math.sqrt(
          Math.pow(e.clientX - (rect.left + rect.width / 2), 2) +
            Math.pow(e.clientY - (rect.top + rect.height / 2), 2)
        );
        if (distance < 200) {
          circle.style.opacity = "1";
          circle.style.transform = "scale(1.5)";
        } else {
          circle.style.opacity = "0";
          circle.style.transform = "scale(1)";
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-full min-h-screen min-w-screen bg-black overflow-hidden">
      {/* Extra Black Background Layer */}
      <div className="absolute inset-0 bg-black min-w-screen z-0"></div>

      {/* Glowing Circles */}
      <div className="absolute inset-0 z-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute hover-circle w-32 h-32 rounded-full blur-3xl transition-all duration-300"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: i % 2 === 0 ? "#b600ff" : "#ff0004", // Violet and Red
              opacity: 0,
              transform: "scale(1)",
            }}
          ></div>
        ))}
      </div>

      {/* Wavy Lines */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-black/10"
            style={{
              width: "120px",
              height: "1200px",
              left: `${(i % 10) * 15}%`,
              top: `${Math.floor(i / 10) * 20}%`,
              transform: "rotate(45deg)",
              background: "linear-gradient(transparent, #00000020, transparent)",
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-30 flex items-center justify-center min-h-screen">
        <h1 className="text-center text-white text-6xl md:text-8xl font-bold tracking-wide leading-tight">
          WE ARE <br />
          ANAQA TECH
        </h1>
      </div>
    </div>
  );
};

export default App;
