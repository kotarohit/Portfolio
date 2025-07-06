"use client";

import { useState, useEffect } from 'react';
import { Moon, Sun, Download, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);

  const skills = ['Spark','Presto', 'Airflow', 'Azure', 'Databricks', 'Kafka', 'LangChain', 'CrewAI',];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [skills.length]);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Apply theme to html element and save preference
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const workExperience = [
    {
      company: "Meta",
      period: "Aug 2024 – Present",
      role: "Data & AI Engineer",
      achievements: [
        "Ads metrics pipeline → $300M unlocked",
        "250B+ records ETL → 5% uplift in conversion",
        "200TB/day pipeline → +$150M ad spend"
      ]
    },
    {
      company: "T-Mobile",
      period: "Jun 2023 – Jul 2024",
      role: "Data Engineer",
      achievements: [
        "LLM analytics assistant (LangChain + OpenAI)",
        "Medallion Lakehouse (ADF + Databricks)",
        "DBT anomaly detection → 16% cost saving"
      ]
    },
    {
      company: "Drexel University",
      period: "2022 – 2023",
      role: "Research Assistant",
      achievements: [
        "Academic LLM assistant development",
        "Research data pipeline optimization"
      ]
    },
    {
      company: "HighRadius",
      period: "2021 – 2022",
      role: "AI Engineer",
      achievements: [
        "AI AR product development",
        "$300K/quarter revenue generation"
      ]
    }
  ];

  const projects = [
    {
      title: "Multi-Agent LLM System",
      description: "Advanced AI system using GPT-4 and BERT for complex task automation",
      tech: ["GPT-4", "BERT", "Python", "LangChain"],
      impact: "40% efficiency improvement"
    },
    {
      title: "RAG with Knowledge Graph",
      description: "Retrieval-Augmented Generation system with graph-based knowledge representation",
      tech: ["LangChain", "Cypher", "Neo4j", "OpenAI"],
      impact: "85% accuracy in Q&A"
    },
    {
      title: "LLM-Powered SQL Assistant",
      description: "Natural language to SQL converter for business analysts at T-Mobile",
      tech: ["OpenAI", "SQL", "Python", "Streamlit"],
      impact: "60% faster query generation"
    },
    {
      title: "Vendor Audit Engine",
      description: "Automated vendor performance analysis and anomaly detection system",
      tech: ["Snowflake", "DBT", "Python", "Airflow"],
      impact: "$2M cost optimization"
    }
  ];

  const skillCategories = {
    "Languages": ["Python", "SQL", "Scala"],
    "Big Data": ["Spark", "Kafka", "Hive", "Presto"],
    "ETL": ["Airflow", "ADF", "DBT", "Dagster"],
    "Databases": ["Snowflake", "Redshift", "MySQL"],
    "Gen AI": ["LangChain", "HuggingFace", "RAG", "CrewAI"],
    "DevOps": ["Docker", "Kubernetes", "Git", "CI/CD"],
    "Visualization": ["Power BI", "Tableau", "Looker"]
  };

  const blogPosts = [
    {
      title: "Scaling ETL at Meta",
      description: "How we process 200TB of data daily with 99.9% reliability",
      readTime: "8 min read"
    },
    {
      title: "Multi-Agent LLMs in Production",
      description: "Building robust AI systems that can handle complex workflows",
      readTime: "12 min read"
    },
    {
      title: "LangChain in Marketing Analytics",
      description: "Leveraging LLMs for advanced marketing data insights",
      readTime: "6 min read"
    }
  ];

  const metrics = [
    { value: "5+", label: "Years Experience" },
    { value: "3+", label: "LLM Applications" },
    { value: "200+", label: "Pipelines Deployed" },
    { value: "$300M", label: "Revenue Unlocked" }
    
  ];

  return (
    <div className="min-h-screen transition-colors">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4 sm:px-6 lg:px-8">
          <div className="flex w-full justify-between items-center">
            {/* Left side - Name and title */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Rohith Kota
              </h1>
          
              <div className="hidden sm:flex items-center text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                <span>Data & AI Engineer</span>
                <span className="mx-1">•</span>
                <span className="font-mono text-blue-600 dark:text-blue-400 truncate">
                  {skills[currentSkill]}
                </span>
              </div>
              
              {/* Mobile title */}
                                        <div className="sm:hidden flex items-center text-xs text-muted-foreground whitespace-nowrap">
              <span>Data & AI Engineer</span>
              <span className="mx-1">•</span>
              <span className="font-mono text-blue-600 dark:text-blue-400 truncate">
                {skills[currentSkill]}
              </span>
            </div>
            </div>
          
            {/* Right side - Buttons */}
            <div className="flex items-center space-x-2">
              {/* Resume Button */}
              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-2"
                onClick={() => window.open('/Rohith_Kota_Lm.pdf', '_blank')}
              >
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline text-xs sm:text-sm">Resume</span>
              </Button>
          
              {/* Dark mode toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="w-7 h-7 p-0"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* 👇 Image first on mobile */}
              <div className="order-1 lg:order-2 relative">
                <div className="relative w-36 sm:w-64 md:w-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
                  <img
                    src="/WhatsApp Image 2025-07-03 at 02.09.59.jpeg"
                    alt="Rohith Kota"
                    className="relative w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>

              {/* 👇 Text and content */}
              <div className="order-2 lg:order-1 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>San Francisco, CA</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Building the future with{' '}
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                      Data & AI
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Data & AI Engineer at Meta, specializing in large-scale ETL pipelines, 
                    LLM applications, and turning complex data into business value.
                  </p>
                </div>

                {/* ✅ Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {metric.value}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* ✅ CTA Buttons with links */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-md px-5 py-3 text-sm font-medium transition"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Get in Touch
                  </a>

                  <a
                    href="https://github.com/kotarohit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border border-input text-muted-foreground hover:text-white hover:bg-muted rounded-md px-5 py-3 text-sm font-medium transition"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/rohith-kota-2b1161366"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border border-input text-muted-foreground hover:text-white hover:bg-muted rounded-md px-5 py-3 text-sm font-medium transition"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
              <p className="text-xl text-muted-foreground">
                Building scalable data solutions at leading tech companies
              </p>
            </div>

            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                          {job.role}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-foreground">
                          {job.company}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="w-fit">
                        {job.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm sm:text-base leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
         <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
              <p className="text-xl text-muted-foreground">
                Technologies I use to build scalable data solutions
              </p>
            </div>
        
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skillCategories).map(([category, skills]) => (
                <Card key={category} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge 
                          key={skill}
                          variant="default"
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 border-0 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-xl text-muted-foreground">
                Innovative solutions that drive business impact
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {project.description}
                        </CardDescription>
                      </div>
                      
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-600 dark:text-green-400 font-medium">
                          {project.impact}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Latest Insights</h2>
              <p className="text-xl text-muted-foreground">
                Sharing knowledge about data engineering and AI
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription>
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-blue-600 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Build Something Amazing</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Always interested in discussing data engineering challenges and AI innovations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Mail className="h-4 w-4 mr-2" />
                kotarohit14@gmail.com
              </Button>
              
              <Button variant="outline" size="lg">
                <Phone className="h-4 w-4 mr-2" />
                +1 (857)-335-3738
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-sm text-muted-foreground">
                © 2024 Rohith Kota. Building the future with data.
              </div>

              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/kotarohit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                </a>

                <a
                  href="https://www.linkedin.com/in/rohith-kota-2b1161366"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </a>

                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kotarohit14@gmail.com" target="_blank">
                  <Button variant="ghost" size="sm">
                    <Mail className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </footer>
        </div>
  );
}