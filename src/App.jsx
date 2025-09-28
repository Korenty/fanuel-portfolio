import React, { useState } from 'react';

// --- Component 1: Navigation Bar ---
const NavBar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Leadership', id: 'about' },
    { name: 'Tech Stack', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-gray-900 via-blue-900 to-gray-800 backdrop-blur-md shadow-lg border-b border-blue-300/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
          Fanuel D.
        </div>
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-blue-600/80 text-white shadow-lg hover:shadow-xl'
                  : 'text-gray-300 hover:text-white hover:bg-blue-600/20'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

// --- Component 2: Hero Section ---
const HeroSection = ({ setActiveSection }) => (
  <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800 p-6 relative overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
      <div className="lg:w-1/2 text-center lg:text-left text-white">
        <p className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent mb-2">Ascending to Cloud Innovation</p>
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-400 bg-clip-text text-transparent leading-tight mb-4">
          Fanuel <span className="text-cyan-300">Debebe</span>
        </h1>
        <p className="text-xl text-gray-300 font-light mb-6">Strategic Leader | Cloud Engineering Visionary | CEO, Bold Endeavor</p>
        <p className="text-gray-400 max-w-lg mb-8">Architecting scalable cloud solutions with executive insight and technical mastery.</p>
        <div className="flex justify-center lg:justify-start space-x-4">
          <button 
            onClick={() => setActiveSection('contact')}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Connect Now
          </button>
          <button 
            onClick={() => setActiveSection('projects')}
            className="px-6 py-3 bg-white/10 text-gray-200 font-semibold border border-gray-700 rounded-xl shadow-md hover:bg-gray-800/20 transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 relative flex justify-center items-center">
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden bg-white/5 backdrop-blur-md border-4 border-cyan-500/30 shadow-xl transform hover:scale-105 transition-all duration-500">
          <img 
            src="/profile.jpg" 
            alt="Fanuel Debebe Profile" 
            className="object-cover w-full h-full"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/0077B6/FFFFFF?text=F+D" }}
          />
        </div>
        <div className="absolute bottom-4 right-4 p-3 bg-cyan-500/20 rounded-full shadow-lg">
          <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
        </div>
      </div>
    </div>
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-pattern.png')] opacity-10 z-0"></div>
  </section>
);

// --- Component 3: About/Leadership Section ---
const AboutSection = () => (
  <section id="about" className="py-20 bg-gray-900/50 backdrop-blur-md p-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-center mb-12">Leadership & Innovation</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="p-6 bg-gray-800/50 rounded-xl shadow-xl border-t-4 border-cyan-500/50">
          <h3 className="text-2xl font-semibold text-cyan-300 mb-4">Executive Foundation</h3>
          <p className="text-gray-400 mb-4">
            Leading Bold Endeavor Trading Plc and Fleet Addis Transport Network Plc, I’ve mastered strategic planning and large-scale operations.
          </p>
          <div className="space-y-2">
            <a href="https://gurshahub.com" target="_blank" rel="noreferrer" className="block text-cyan-400 hover:text-cyan-300 transition-colors">→ Gursha Hub</a>
            <a href="https://gurshamenu.com" target="_blank" rel="noreferrer" className="block text-cyan-400 hover:text-cyan-300 transition-colors">→ Gursha Menu</a>
          </div>
        </div>
        <div className="lg:col-span-2 p-6 bg-gray-800/70 rounded-xl shadow-2xl border-l-4 border-blue-500/50">
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">Pivot to Cloud Engineering</h3>
          <p className="text-gray-400 mb-4">
            Through AltSchool Africa, I’m transitioning to cloud infrastructure, blending business acumen with technical expertise.
          </p>
          <p className="text-gray-500">
            Mastering IaC and cloud platforms to drive innovation across Africa.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// --- Component 4: Skills Section ---
const SkillPill = ({ icon, title, level }) => (
  <div className="flex items-center space-x-3 p-3 bg-gray-800/60 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="text-cyan-400 w-6 h-6">{icon}</div>
    <div>
      <h4 className="font-semibold text-gray-200">{title}</h4>
      <p className="text-sm text-gray-500">{level}</p>
    </div>
  </div>
);

const SkillsSection = () => (
  <section id="skills" className="py-20 bg-gray-900 p-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-center mb-12">Tech Arsenal</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-gray-800/50 rounded-xl shadow-xl border-t-4 border-cyan-500/50">
          <h3 className="text-2xl font-semibold text-cyan-300 mb-5">Cloud Engineering</h3>
          <div className="space-y-4">
            <SkillPill title="AWS/Azure Fundamentals" level="In-Depth Study" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9h-9"></path></svg>} />
            <SkillPill title="Infrastructure-as-Code (IaC)" level="Terraform Concepts" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 012-2h10a2 2 0 012 2m-4 4h-4m-4 0v-4"></path></svg>} />
            <SkillPill title="Networking & Security" level="VPC, IAM Principles" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6-6v6m-6-6h6m-6 0h6m0 0h6m-6 0v6m-6-6h6m-6 0h6m0 0h6"></path></svg>} />
          </div>
        </div>
        <div className="p-6 bg-gray-800/50 rounded-xl shadow-xl border-t-4 border-purple-500/50">
          <h3 className="text-2xl font-semibold text-purple-300 mb-5">Automation & DevOps</h3>
          <div className="space-y-4">
            <SkillPill title="Linux/Bash Scripting" level="System Automation" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 12H3m18 0h-2M9 5h6a2 2 0 012 2v10a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2z"></path></svg>} />
            <SkillPill title="Git & GitHub" level="Version Control Mastery" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>} />
            <SkillPill title="Python Fundamentals" level="Scripting and Logic" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>} />
          </div>
        </div>
        <div className="p-6 bg-gray-800/50 rounded-xl shadow-xl border-t-4 border-yellow-500/50">
          <h3 className="text-2xl font-semibold text-yellow-300 mb-5">Foundational Web</h3>
          <div className="space-y-4">
            <SkillPill title="HTML5 & Semantic Markup" level="Strong" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4m-12-4l-4 4 4 4"></path></svg>} />
            <SkillPill title="CSS Grid & Flexbox" level="Layout Mastery" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>} />
            <SkillPill title="React Fundamentals" level="Component Structure" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Component 5: Projects Section ---
const ProjectCard = ({ title, description, link, stack }) => (
  <div className="bg-gray-800/60 rounded-xl shadow-xl p-6 flex flex-col h-full hover:shadow-2xl transition-all duration-300">
    <h3 className="text-xl font-bold text-cyan-300 mb-2">{title}</h3>
    <p className="text-gray-400 mb-4 flex-grow">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {stack.map((tech) => (
        <span key={tech} className="text-xs font-medium px-3 py-1 bg-gray-700/50 text-cyan-200 rounded-full">
          {tech}
        </span>
      ))}
    </div>
    <a 
      href={link} 
      target="_blank" 
      rel="noreferrer"
      className="text-cyan-400 hover:text-cyan-300 font-semibold mt-auto flex items-center transition-colors"
    >
      View Deployment
      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </a>
  </div>
);

const ProjectsSection = () => {
  const projects = [
    {
      title: "Personal Profile Grid",
      description: "A responsive profile card showcasing CSS Grid and mobile-first design.",
      link: "https://korenty.github.io/personal-profile-grid/",
      stack: ["HTML5", "CSS Grid", "Tailwind"],
    },
    {
      title: "Classic Chocolate Chip Recipe Page",
      description: "Semantic HTML structure with headings, lists, and image linking.",
      link: "https://korenty.github.io/html-recipe-page-v2/recipe.html",
      stack: ["HTML5", "CSS", "Semantic Markup"],
    },
    {
      title: "Cloud Infrastructure Blueprint",
      description: "Future project deploying a scalable web app with Terraform on AWS/Azure.",
      link: "https://github.com/Korenty",
      stack: ["Terraform", "AWS/Azure", "IaC"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/50 backdrop-blur-md p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-center mb-12">Showcase Projects</h2>
        <p className="text-center text-gray-500 mb-8">
          Current work and future innovations in cloud engineering.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, index) => (
            <ProjectCard key={index} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Component 6: Contact Section ---
const ContactSection = () => (
  <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-950 text-white p-6">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent mb-4">Let's Build the Future</h2>
      <p className="text-gray-400 mb-10">
        Open to opportunities, strategies, and cloud architecture discussions.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <a 
          href="https://www.linkedin.com/in/fanuel-seyoum-867382138" 
          target="_blank" 
          rel="noreferrer"
          className="px-6 py-3 bg-cyan-500/80 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-all"
        >
          LinkedIn
        </a>
        <a 
          href="https://x.com/fanuel_debebe?s=09" 
          target="_blank" 
          rel="noreferrer"
          className="px-6 py-3 bg-gray-700/80 text-white font-semibold rounded-xl hover:bg-gray-600 transition-all"
        >
          X (Twitter)
        </a>
        <a 
          href="mailto:fanuel@example.com" 
          target="_blank" 
          rel="noreferrer"
          className="px-6 py-3 bg-green-600/80 text-white font-semibold rounded-xl hover:bg-green-700 transition-all"
        >
          Email Me
        </a>
      </div>
    </div>
  </section>
);

// --- Main App Component ---
const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="pt-20">
        <HeroSection setActiveSection={setActiveSection} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="bg-gray-900/80 text-gray-400 text-center p-4 text-sm">
        &copy; {new Date().getFullYear()} Fanuel Debebe. Powered by React & Vision.
      </footer>
    </div>
  );
};

export default App;
