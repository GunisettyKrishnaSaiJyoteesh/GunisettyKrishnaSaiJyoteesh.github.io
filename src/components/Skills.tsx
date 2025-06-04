
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Layers, Code, Server, Database, PaintBucket, LineChart } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Server className="h-6 w-6 text-brand-500" />,
      skills: [
        { name: "Java", proficiency: 85 },
        { name: "C", proficiency: 85 },
        { name: "Python", proficiency: 80 },
        
        { name: "R", proficiency: 75 },
      ],
    },
    {
      title: "Data Analysis",
      icon: <Code className="h-6 w-6 text-brand-500" />,
      skills: [
        { name: "Data Wrangling and Preprocessing", proficiency: 90 },
        { name: "Data Modelling", proficiency: 85 },
        { name: "Descriptive & Inferential Statistics", proficiency: 85 },
      ],
    },
    {
      title: "Robotic Process Automation",
      icon: <Code className="h-6 w-6 text-brand-500" />,
      skills: [
        { name: "Automation Anywhere", proficiency: 95 },
      ],
    },
    {
      title: "Data Visualization",
      icon: <LineChart className="h-6 w-6 text-brand-500" />,
      skills: [
        { name: "Python (matplotlib,seaborn)", proficiency: 90 },
        { name: "Power BI", proficiency: 90 },
        { name: "R (ggplot2,)", proficiency: 85 },
        
      ],
    },
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6 text-brand-500" />,
      skills: [
        { name: "HTML/CSS", proficiency: 90 },
        { name: "JavaScript", proficiency: 85 },
      ],
    },
    {
      title: "Database Management",
      icon: <Database className="h-6 w-6 text-brand-500" />,
      skills: [
        { name: "SQL", proficiency: 80 },
        { name: "MongoDB", proficiency: 75 },
        
      ],
    },
    {
      title: "Other Skills",
      icon: <Layers className="h-6 w-6 text-brand-500" />,
      skills: [
        { name: "Canva", proficiency: 90 },
        { name: "Git & GitHub", proficiency: 85 },
        
      ],
    },
  ];

  return (
    <section id="skills" className="bg-white dark:bg-brand-950 section-padding transition-colors duration-300">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title text-brand-950 dark:text-white">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-panel p-6 animate-fade-in opacity-0" style={{ animationDelay: `${0.1 * index}s` }}>
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
