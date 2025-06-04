
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, FileText } from "lucide-react";
import ThreeBackground from "./ThreeBackground";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-start bg-gradient-to-br from-white to-brand-100 dark:from-brand-950 dark:to-brand-900/50 section-padding overflow-hidden"
    >
      <ThreeBackground />
      
      <div className="container max-w-5xl mx-auto z-10">
        <div className="glass-panel p-8 md:p-12 max-w-2xl animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-brand-500 font-medium mb-2 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>Hello, my name is</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-950 dark:text-white mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            G.K.S Jyoteesh
          </h1>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-800/70 dark:text-brand-300/70 mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
            I am an aspiring Data Scientist.
          </h3>
          <p className="text-lg md:text-xl text-brand-800/60 dark:text-brand-300/60 max-w-xl mb-8 animate-fade-in opacity-0" style={{ animationDelay: "1s" }}>
            I'm a data analyst expertising on real-time data.
            Currently focused on big data.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in opacity-0" style={{ animationDelay: "1.2s" }}>
            <Link to="/resume">
              <Button className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-6 glow">
                <FileText className="mr-2 h-4 w-4" />
                View My Work
              </Button>
            </Link>
            <a href="#contact">
              <Button variant="outline" className="border-brand-500 text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/30 px-6 py-6">
                Contact Me
              </Button>
            </a>

          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6 text-brand-500 animate-glow" />
      </a>
    </section>
  );
};

export default Hero;
