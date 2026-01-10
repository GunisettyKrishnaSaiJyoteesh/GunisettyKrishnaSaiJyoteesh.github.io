import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom"; // at the top

const Projects = () => {
  const projects = [
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
