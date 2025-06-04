
import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-brand-900 section-padding transition-colors duration-300">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title text-brand-950 dark:text-white">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="glass-panel p-6 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            <p className="text-brand-800/70 dark:text-brand-300/70 mb-4">
              Hello! I'm Jyoteesh, a passionate data analyst with a strong foundation in mathematics and programming, leveraging statistical modeling and computational techniques to extract actionable insights from complex datasets.
            </p>
            
            <p className="text-brand-800/70 dark:text-brand-300/70 mb-4">
             I write clean, efficient code to tackle problems and harness technology’s potential to address real-world challenges, improving lives through intentional design and development.
            </p>
            
            <p className="text-brand-800/70 dark:text-brand-300/70 mb-4">
              Currently deepening my grasp of DSA concepts and have solved over 150 problems on LeetCode to strengthen problem-solving skills. I believe in continuous learning and am always exploring new
              technologies and approaches.
            </p>
            
            <h3 className="text-xl font-semibold mb-2 mt-6 text-brand-950 dark:text-white">Education</h3>
            <p className="text-brand-800/70 dark:text-brand-300/70 mb-1">
              <span className="font-medium">B.Tech in CSE (Data Science)</span> - Anil Neerukonda Institute of Technology and Sciences
            </p>
            <p className="text-brand-800/70 dark:text-brand-300/70 mb-4">2022 - 2026</p>
          </div>
          
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            <div className="aspect-square rounded-lg bg-gradient-to-tr from-brand-200 to-brand-500 dark:from-brand-600 dark:to-brand-800 flex items-center justify-center shadow-lg animate-float glow">
              <img
                src="/maleicon.jpeg"
                alt="Profile"
                className="w-3/4 h-3/4 object-contain opacity-7 0"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
