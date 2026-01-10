import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allProjects = [
  {
    title: "DeepVision – Real-Time Crowd Monitoring System",
    description:
      "Built a CSRNet-based real-time crowd monitoring system to generate density maps and estimate crowd counts from video streams. Includes OpenCV-based live inference and a Streamlit dashboard with automated overcrowding alerts.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    tags: ["Python", "OpenCV", "CSRNet", "Streamlit", "Computer Vision", "Deep Learning"],
    repoLink: "https://github.com/GKSJ-Deepvision/AI-DeepVision",
    liveLink: "https://ai-powered-crowd-monitoring-with-smtp-alert.streamlit.app/"
  },
  {
    title: "CliniScan – Lung Abnormality Detection on X-Rays",
    description:
      "Developed a PyTorch and YOLOv8–based system to detect and localize lung abnormalities from VinDr-CXR chest X-ray DICOM images with Grad-CAM based explainability for clinical decision support.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTekzf_iAuCyB3OxAVxRFcbDdYGIzLvvvgugA&s",
    tags: ["Python", "YOLOv8", "PyTorch", "DICOM", "Grad-CAM", "Medical AI"],
    repoLink: "https://github.com/GKSJ-AI-CliniScan/AI-CliniScan",
    liveLink: "https://huggingface.co/spaces/mayankbhagat/Cliniscan"
  },
  {
    title: "Market Segmentation Analysis on Electric Vehicles",
    description:
      "Performed market segmentation on real-time EV datasets using Python and REST APIs to identify customer segments and entry strategies for EV manufacturers.",
    image:
      "https://plus.unsplash.com/premium_photo-1726812103168-6ad609e53f94?q=80&w=1208&auto=format&fit=crop",
    tags: ["Python", "REST API", "Data Analysis", "Market Segmentation"],
    repoLink: "https://github.com/GunisettyKrishnaSaiJyoteesh/MarketSegmentationOnElectricVehicle",
  },
  {
    title: "AI Water Tracker",
    description:
      "AI-powered hydration tracking system using FastAPI, LangChain (Ollama), SQLite, and Streamlit to log water intake, analyze hydration patterns, and generate personalized health recommendations.",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1170&auto=format&fit=crop",
    tags: ["Python", "FastAPI", "LangChain", "Streamlit", "SQLite"],
    repoLink: "https://github.com/GunisettyKrishnaSaiJyoteesh/AI-Water-Tracker.github.io",
    liveLink: "https://ai-water-tracker.streamlit.app/",
  },
  {
    title: "T20 World Cup Cricket Analysis",
    description:
      "Built an interactive Power BI dashboard for T20 World Cup cricket analytics using web scraping, data preprocessing, feature engineering, and data modeling.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000",
    tags: ["Power BI", "Data Visualization", "Web Scraping", "Analytics"],
    liveLink:
      "https://app.powerbi.com/links/WSYfbilfBH?ctid=6e0ab46c-ac12-4727-99f7-3271c72e220f&pbi_source=linkShare",
  },
  {
    title: "Unemployment Rate Prediction",
    description:
      "Machine learning model to predict unemployment rates across Indian states using historical datasets and visualization.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000",
    tags: ["Python", "Pandas", "Plotly", "Seaborn", "Machine Learning"],
    repoLink: "https://github.com/GunisettyKrishnaSaiJyoteesh/UnemploymentRate",
  },
  {
    title: "ANITS Food Engine",
    description:
      "Static online food ordering platform designed for ANITS with a client-based model. First academic web project.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://anitsfoodengine.netlify.app/",
    repoLink: "https://github.com/GunisettyKrishnaSaiJyoteesh/AnitsFoodEngine",
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
              className="bg-brand-500 hover:bg-brand-600 text-white glow"
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
