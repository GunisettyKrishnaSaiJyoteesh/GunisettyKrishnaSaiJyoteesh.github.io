
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, BookOpen, Briefcase, Blocks, Award } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-brand-100 dark:from-brand-950 dark:to-brand-900/50 transition-colors duration-300">
      <Navbar />
      
      <main className="container max-w-4xl mx-auto py-20 px-4 md:px-6">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-950 dark:text-white">Resume</h1>
          <p className="text-lg text-brand-800/70 dark:text-brand-300/70 mb-6">
            A summary of my education, work experience, skills, and achievements.
          </p>
        </div>

        {/* Education Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-brand-500" />
            <h2 className="text-2xl font-bold text-brand-950 dark:text-white">Education</h2>
          </div>
          
          <Card className="mb-6 border-l-4 border-l-brand-500">
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">Bachelors in Computer Science</h3>
                  <p className="text-brand-600 dark:text-brand-400 text-sm mt-1">Anil Neerukonda Institute of Technology and Sciences</p>
                </div>
                <span className="text-sm text-brand-500">2022 - 2026</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                CGPA : 9.44
              </p>
            </CardContent>
          </Card>
          
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-brand-500" />
            <h2 className="text-2xl font-bold text-brand-950 dark:text-white">Experience</h2>
          </div>
          
          <Card className="mb-6 border-l-4 border-l-brand-500">
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">Machine Leaarning Intern</h3>
                  <p className="text-brand-600 dark:text-brand-400 text-sm mt-1">Feynn Labs</p>
                </div>
                <span className="text-sm text-brand-500">April 2025 - Present</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Analyzed large datasets to identify trends and patterns</li>
                <li>Performed Market Segmentation Analysis</li>
                <li>Collaborated with cross-functional teams to develop data-driven solutions</li>
                <li>Implemented machine learning models for predictive analytics</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-brand-500">
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">Robotic Process Automation Intern</h3>
                  <p className="text-brand-600 dark:text-brand-400 text-sm mt-1">Edumoon</p>
                </div>
                <span className="text-sm text-brand-500">May 2024 - July 2024</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Developed and deployed RPA workflows(Automation Anywhere) to automate business processes</li>
                <li>Identified automation opportunities and optimized workflows</li>
                <li>Collaborated with teams to implement and maintain RPA bots.</li>
                <li>Conducted testing and debugging of RPA solutions</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Blocks className="text-brand-500" />
            <h2 className="text-2xl font-bold text-brand-950 dark:text-white">Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Python (Pandas, NumPy, Scikit-learn)</li>
                  <li>Java</li>
                  <li>C</li>
                  <li>R (dplyr, ggplot2)</li>
                  <li>SQL & Database Management</li>
                  <li>Data Visualization (Tableau, Power BI)</li>
                  <li>Version Control (Git)</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Problem Solving</li>
                  <li>Critical Thinking</li>
                  <li>Team Collaboration</li>
                  <li>Communication</li>
                  <li>Project Management</li>
                  <li>Leadership</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-brand-500" />
            <h2 className="text-2xl font-bold text-brand-950 dark:text-white">Certifications</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Programming in JAVA</span>
                  <span className="text-sm text-brand-500">2023</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">NPTEL</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Advanced R programming for Business Analytics</span>
                  <span className="text-sm text-brand-500">2024</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">NPTEL</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Git/GitHub</span>
                  <span className="text-sm text-brand-500">2024</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Udemy</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Computer Vision and Image Processing</span>
                  <span className="text-sm text-brand-500">2024</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">NPTEL</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resume;
