import React from "react";
import { Progress } from "@/components/ui/progress";
import { Layers, Code, Server, Database, Brain, LineChart } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Science & Analytics",
      icon: <LineChart className="h-6 w-6 text-brand-500" />,
      skills: [
        { name: "Pandas & NumPy", proficiency: 95 },
        { name: "Power BI & Dashboarding", proficiency: 90 },
        { name: "Feature Engineering", proficiency: 90 },
        { name: "Statistical Analysis", proficiency: 85 },
        { name: "Snowflake", proficiency: 80 },
      ],
    },
    {
      title: "Machine Learning & Deep Learning",
      icon: <Brain className="h-6 w-6 text-brand-500" />,
      skills: [
        { name: "Supervised & Unsupervised Learning", proficiency: 90 },
        { name: "CNNs & Deep Neural Networks", proficiency: 90 },
        { name: "YOLOv8 & Object Detection", proficiency: 85 },
        { name: "Model Training & Evaluation", proficiency: 90 },
        { name: "Grad-CAM & Explainable AI", proficiency: 85 },
      ],
    },
        {
      title: "Programming Languages",
      icon: <Server className="h-6 w-6 text-brand-500" />,
      skills: [
        { name: "Python", proficiency: 90 },
        { name: "Java", proficiency: 85 },
        { name: "R", proficiency: 80 },
        { name: "C", proficiency: 75 },
      ],
    },
    {
      title: "Computer Vision & Medical Imaging",
      icon: <Layers className="h-6 w-6 text-brand-500" />,
      skills: [
        { name: "OpenCV", proficiency: 90 },
        { name: "Image Preprocessing & Augmentation", proficiency: 90 },
        { name: "DICOM Handling", proficiency: 85 },
        { name: "CSRNet & Crowd Density Estimation", proficiency: 85 },
      ],
    },
    
    {
      title: "Databases & APIs",
      icon: <Database className="h-6 w-6 text-brand-500" />,
      skills: [
        { name: "MySQL & PostgreSQL", proficiency: 90 },
        { name: "SQLite", proficiency: 85 },
        { name: "REST APIs", proficiency: 85 },
        { name: "FastAPI", proficiency: 85 },
      ],
    },
    {
      title: "Robotic Process Automation",
      icon: <Code className="h-6 w-6 text-brand-500" />,
      skills: [
        { name: "Automation Anywhere", proficiency: 95 },
        { name: "Process Automation & Bots", proficiency: 90 },
      ],
    },
    {
      title: "Development Tools",
      icon: <Layers className="h-6 w-6 text-brand-500" />,
      skills: [
        { name: "Git & GitHub", proficiency: 90 },
        { name: "VS Code & IntelliJ", proficiency: 85 },
        { name: "Streamlit", proficiency: 85 },
        { name: "Linux & Windows", proficiency: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-white dark:bg-brand-950 section-padding transition-colors duration-300">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title text-brand-950 dark:text-white">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-panel p-6 animate-fade-in opacity-0"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-center gap-2 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-brand-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-brand-800 dark:text-brand-300">
                        {skill.name}
                      </span>
                      <span className="text-xs font-medium text-brand-600 dark:text-brand-400">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <Progress
                      value={skill.proficiency}
                      className="h-2 bg-brand-100 dark:bg-brand-800/40"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
