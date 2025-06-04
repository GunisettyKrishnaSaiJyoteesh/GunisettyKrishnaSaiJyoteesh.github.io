import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Navbar from "@/components/Navbar";  // Adjust the path as per your project
import Footer from "@/components/Footer";  // Adjust the path as per your project

const allProjects = [
  {
    title: "ANITS FOOD ENGINE",
    description:
      "This is a static online food ordering platform specially designed for our institute. This is a client based model. It was my first project in our academics",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://anitsfoodengine.netlify.app/",
    repoLink: "https://github.com/GunisettyKrishnaSaiJyoteesh/AnitsFoodEngine",
  },
  {
    title: "Unemployment Rate Prediction",
    description:
      "This machine learning model predicts the unemployment rate in the states of India.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000",
    tags: ["Python- Pandas, Plotly, Seaborn"],
    repoLink: "https://github.com/GunisettyKrishnaSaiJyoteesh/UnemploymentRate",
  },
  {
    title: "T20 World Cup Cricket Analysis",
    description:
      "Developed an interactive Power BI dashboard for T20 World Cup cricket analysis, involving webscraping, data preprocessing, feature engineering, data modeling, and insightful visualizations.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000",
    tags: ["Power BI", "Data Visualization", "Web Scraping"],
    liveLink:
      "https://app.powerbi.com/links/WSYfbilfBH?ctid=6e0ab46c-ac12-4727-99f7-3271c72e220f&pbi_source=linkShare",
  },
];

const ViewAllProjects = () => {
  return (
    <>
      <Navbar />

      <section className="bg-brand-50 dark:bg-brand-950/80 min-h-screen py-10 transition-colors duration-300">
        <div className="container mx-auto max-w-5xl px-6">
          <h1 className="text-4xl font-bold mb-10 text-brand-950 dark:text-white text-center">
            All Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <div
                key={index}
                className="project-card flex flex-col h-full animate-fade-in opacity-0 dark:bg-brand-900/50 dark:border-brand-800/30 hover:dark:border-brand-600/30"
                style={{ animationDelay: `${0.15 * (index + 1)}s` }}
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 rounded-t-lg"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 rounded-t-lg"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow dark:bg-brand-900/50 rounded-b-lg">
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
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm flex items-center gap-1 text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.repoLink && (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm flex items-center gap-1 text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
                      >
                        <Github size={16} />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-brand-500 hover:bg-brand-600 text-white glow animate-fade-in opacity-0"
              style={{ animationDelay: "1s" }}
            >
              Back to Top
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ViewAllProjects;
