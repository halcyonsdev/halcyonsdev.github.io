import React, { useEffect, useState } from 'react';
import { Github, Mail, ExternalLink, ChevronDown, Code2, Briefcase, Star, User, Globe, Cpu, Phone } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  link: string;
}

interface Technology {
  category: string;
  items: string[];
}

interface ContactLink {
  name: string;
  icon: React.ReactNode;
  href: string;
  className: string;
}

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactLinks: ContactLink[] = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      href: "https://github.com/halcyonsdev",
      className: "bg-gray-800 hover:bg-gray-700"
    },
    {
      name: "Gmail",
      icon: <Mail size={24} />,
      href: "mailto:halcyon.ruslan@gmail.com",
      className: "bg-red-600 hover:bg-red-700"
    },
    {
      name: "Telegram",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.99 6.58c-.07-.32-.29-.6-.58-.76L2.68 0.17c-.33-.17-.71-.17-1.05-.01-.33.16-.57.47-.63.84-.01.04-.01.08-.01.12v22.77c0 .55.45 1 1 1h1.57c.55 0 1-.45 1-1V12.7l8.88 3.55c.13.05.27.08.41.08.32 0 .63-.15.83-.41.28-.36.32-.86.09-1.26l-1.91-3.33 8.68-3.87c.35-.16.58-.51.58-.9 0-.06-.01-.11-.02-.17l-.12-.81z"/>
        </svg>
      ),
      href: "https://t.me/halcyonsdev",
      className: "bg-blue-500 hover:bg-blue-600"
    },
    {
      name: "VK",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2z"/>
          <path d="M18 8.5h-2.5c-.83 0-1.5.67-1.5 1.5v2.5h2.5v2.5h-2.5V20h-2.5v-5h-2.5v-2.5h2.5V10c0-2.21 1.79-4 4-4h2.5v2.5z"/>
        </svg>
      ),
      href: "https://vk.com/halcys",
      className: "bg-[#0077FF] hover:bg-[#0066CC]"
    }
  ];

  const skills: Technology[] = [
    {
      category: "Languages",
      items: ["English (B2 - Upper Intermediate)", "Russian (C2 - Native)"]
    },
    {
      category: "Programming Languages & Frameworks",
      items: ["Java", "Kotlin", "Python", "C++", "Maven", "Gradle", "Spring", "Netty"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Hibernate", "Flyway", "Liquibase"]
    },
    {
      category: "Networking & Communication",
      items: ["HTTP/HTTPS", "WebSocket", "gRPC", "GraphQL"]
    },
    {
      category: "Messaging & Streaming",
      items: ["Apache Kafka", "Redis", "RabbitMQ"]
    },
    {
      category: "Monitoring & Observability",
      items: ["Grafana", "Prometheus", "Zipkin", "Elasticsearch", "Kibana"]
    },
    {
      category: "Containerization & Orchestration",
      items: ["Docker", "Docker Compose", "Kubernetes"]
    },
    {
      category: "Testing & Version Control",
      items: ["JUnit", "Mockito", "Testcontainers", "Git", "GitHub Actions"]
    }
  ];

  const projects: Project[] = [
    {
      name: "Social Network",
      description: "The application is a social network with a lot of features and microservice architecture",
      link: "https://github.com/halcyonsdev/socialnetwork"
    },
    {
      name: "Meeting Ease",
      description: "The application is a service for arranging meetings of legal entities with company agents. It simplifies all the difficulties and solves many problems with making meetings.",
      link: "https://github.com/halcyonsdev/meetingease"
    },
    {
      name: "P2P File Transfer Network",
      description: "It is a decentralized, unstructured peer-to-peer file-sharing network where peers share files directly with one another.",
      link: "https://github.com/halcyonsdev/p2p-file-transfer"
    },
    {
      name: "A Few Adventures",
      description: "\"A Few Adventures\" is a Minecraft Forge mod that introduces new mobs, tools, firearms, items, blocks, and much more to the game.",
      link: "https://github.com/halcyonsdev/gamesaggregator"
    },
    {
      name: "KeepFit",
      description: "Keepfit is an application for diet, food preparation, goal, workout managements, by completing which users can gain experience and improve their rank.",
      link: "https://github.com/halcyonsdev/keepfit"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Code2 className="text-blue-400" />
              <span className="font-bold text-xl">Halcyon Developer</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
              <a href="https://github.com/halcyonsdev" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors">
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Ruslan Sadikov
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl text-center mb-8 px-4">
            Crafting interesting and functional applications with modern technologies 
          </p>
        </div>
        <ChevronDown 
          size={32} 
          className="absolute bottom-8 animate-bounce text-gray-400 cursor-pointer"
          onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
        />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-16">
            <User className="text-blue-400" size={32} />
            <h2 className="text-3xl sm:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              My Skills
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span 
                      key={itemIndex}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-16">
            <Briefcase className="text-blue-400" size={32} />
            <h2 className="text-3xl sm:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Featured Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20 border border-gray-700"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                </div>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">{project.description}</p>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-16">
            <Phone className="text-blue-400" size={32} />
            <h2 className="text-3xl sm:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Get in Touch
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${link.className} shadow-lg`}
              >
                {link.icon}
                <span className="text-lg">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm sm:text-base">© 2025 Ruslan Sadikov. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;