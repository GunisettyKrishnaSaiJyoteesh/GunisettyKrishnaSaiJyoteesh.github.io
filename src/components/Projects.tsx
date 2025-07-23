
import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom"; // at the top

const Projects = () => {
  const projects = [
    {
      title : "Market Segmentation Analysis on Electric Vehicles in India",
      description:
        "Performed business analysis on real-time EV data for a EV production company to enter into the market. The analysis includes market segmentation, customer profiling, and demand forecasting.",
      image:
        "https://plus.unsplash.com/premium_photo-1726812103168-6ad609e53f94?q=80&w=1208&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Python","Rest API", "Data Analysis"],
      repoLink: "https://github.com/GunisettyKrishnaSaiJyoteesh/MarketSegmentationOnElectricVehicle",
    },
    {
      title : "AI Water Tracker",
      description:
        "AI Water Tracker is an intelligent hydration monitoring system built with FastAPI, LangChain (Ollama or OpenAI LLMs), SQLite, and Streamlit. The app allows users to log their daily water intake, analyze hydration levels using AI, and visualize intake history. It features a REST API backend, a smart AI agent for personalized hydration suggestions, and an intuitive frontend dashboard for tracking progress. Designed to promote healthy living through technology.",
      image :"https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags : ["Python", "FastAPI","LangChain (Ollama)", "Streamlit", "SQLite", "Pydantic"],
      repoLink: "https://github.com/GunisettyKrishnaSaiJyoteesh/AI-Water-Tracker.github.io",
      liveLink: "https://ai-water-tracker.streamlit.app/"
    },
    {
      title: "T20 World Cup Cricket Analysis",
      description:
        "Developed an interactive Power BI dashboard for T20 World Cup cricket analysis, involving webscraping, data preprocessing, feature engineering, data modeling, and insightful visualizations.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000",
      tags: ["Power BI", "Data Visualization", "Web Scraping"],
      liveLink: "https://app.powerbi.com/links/WSYfbilfBH?ctid=6e0ab46c-ac12-4727-99f7-3271c72e220f&pbi_source=linkShare",
    },
  ];

  return (
    <section id="projects" className="bg-brand-50 dark:bg-brand-950/80 section-padding transition-colors duration-300">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title text-brand-950 dark:text-white">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card flex flex-col h-full animate-fade-in opacity-0 dark:bg-brand-900/50 dark:border-brand-800/30 hover:dark:border-brand-600/30"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow dark:bg-brand-900/50">
                <h3 className="text-xl font-bold text-brand-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-brand-700/80 dark:text-brand-300/70 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-brand-100 dark:bg-brand-800/50 text-brand-700 dark:text-brand-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.liveLink}
                    className="text-sm flex items-center gap-1 text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.repoLink}
                    className="text-sm flex items-center gap-1 text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link to="/projects/all">
            <Button className="bg-brand-500 hover:bg-brand-600 text-white glow animate-fade-in opacity-0" style={{ animationDelay: "1s" }}>
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
