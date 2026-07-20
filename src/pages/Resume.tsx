import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, BookOpen, Briefcase, Blocks, Award, Download, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-brand-100 dark:from-brand-950 dark:to-brand-900/50 transition-colors duration-300">
      <Navbar />

      <main className="container max-w-4xl mx-auto py-20 px-4 md:px-6">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-950 dark:text-white">
            Resume
          </h1>
          <p className="text-lg text-brand-800/70 dark:text-brand-300/70 mb-6">
            Data Science & AI focused profile with enterprise project experience and real-world ML systems.
          </p>
          <a
            href="https://drive.google.com/file/d/1XwuJoOnRgauvo3JV7Rcn5dszzd3oQEpX/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white">
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </a>
        </div>

        {/* Education */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-brand-500" />
            <h2 className="text-2xl font-bold text-brand-950 dark:text-white">
              Education
            </h2>
          </div>

          <Card className="border-l-4 border-l-brand-500">
            <CardHeader>
              <CardTitle className="flex justify-between">
                <div>
                  <h3 className="text-xl font-bold">B.Tech in Computer Science (Data Science)</h3>
                  <p className="text-brand-600 dark:text-brand-400 text-sm">
                    Anil Neerukonda Institute of Technology & Sciences
                  </p>
                </div>
                <span className="text-sm text-brand-500">2022 – 2026</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">CGPA: 9.26</p>
            </CardContent>
          </Card>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-brand-500" />
            <h2 className="text-2xl font-bold text-brand-950 dark:text-white">
              Experience
            </h2>
          </div>

          <Card className="mb-6 border-l-4 border-l-brand-500">
            <CardHeader>
              <CardTitle className="flex justify-between">
                <div>
                  <h3 className="text-xl font-bold">AI/ML Engineer Intern</h3>
                  <p className="text-brand-600 dark:text-brand-400 text-sm">AnayaMED HealthTech Pvt Ltd.</p>
                </div>
                <span className="text-sm text-brand-500">July 2026 – Present</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Working on building ASR and TTS engines for the platform.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-brand-500">
            <CardHeader>
              <CardTitle className="flex justify-between">
                <div>
                  <h3 className="text-xl font-bold">SDE Intern & Mentor</h3>
                  <p className="text-brand-600 dark:text-brand-400 text-sm">Aspire Infolabs</p>
                </div>
                <span className="text-sm text-brand-500">Sep 2025 – June 2026</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Completed two Infosys-affiliated enterprise projects and currently contributing to a third.</li>
                <li>Worked on real-world data, production-level workflows, and enterprise software pipelines.</li>
                <li>Mentored interns in machine learning, computer vision, and backend APIs.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6 border-l-4 border-l-brand-500">
            <CardHeader>
              <CardTitle className="flex justify-between">
                <div>
                  <h3 className="text-xl font-bold">Machine Learning Intern</h3>
                  <p className="text-brand-600 dark:text-brand-400 text-sm">Feynn Labs</p>
                </div>
                <span className="text-sm text-brand-500">Apr 2025 – Jun 2025</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Analyzed 50,000+ records using Python for market segmentation and customer profiling.</li>
                <li>Built clustering models and statistical reports to support business expansion strategies.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-brand-500">
            <CardHeader>
              <CardTitle className="flex justify-between">
                <div>
                  <h3 className="text-xl font-bold">RPA Intern</h3>
                  <p className="text-brand-600 dark:text-brand-400 text-sm">Edumoon</p>
                </div>
                <span className="text-sm text-brand-500">May 2024 – Jul 2024</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Developed and deployed Automation Anywhere bots to automate business workflows.</li>
                <li>Optimized and tested RPA pipelines for production use.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Skills */}
        {/* Skills */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="text-brand-500" />
            <h2 className="text-2xl font-bold text-brand-950 dark:text-white">
              Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>AI, ML & Data Science</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Machine Learning, Deep Learning, CNNs</li>
                  <li>YOLOv8, CSRNet, Grad-CAM, Computer Vision</li>
                  <li>Market Segmentation, Clustering, Feature Engineering</li>
                  <li>Pandas, NumPy, Power BI, Data Visualization</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Software Engineering & Core CS</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Software Engineering & SDLC</li>
                  <li>Data Structures & Algorithms (DSA)</li>
                  <li>Operating Systems</li>
                  <li>Object-Oriented Programming</li>
                  <li>Version Control (Git, GitHub)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>NLP & Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>ASR and TTS</li>
                  <li>REST APIs</li>
                  <li>LangChain & LLM-based systems</li>
                  <li>Robotic Process Automation (Automation Anywhere)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Databases & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>MySQL, PostgreSQL, SQLite</li>
                  <li>Snowflake</li>
                  <li>Streamlit</li>
                  <li>VS Code, IntelliJ</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>


        {/* Certifications */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-brand-500" />
            <h2 className="text-2xl font-bold text-brand-950 dark:text-white">
              Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ["Programming in Java", "NPTEL"],
              ["Advanced R Programming", "NPTEL"],
              ["Computer Vision & Image Processing", "NPTEL"],
              ["Git & GitHub", "Udemy"],
            ].map((c, i) => (
              <Card key={i}>
                <CardHeader><CardTitle>{c[0]}</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground">{c[1]}</p></CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;
