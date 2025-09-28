import React, { useState } from 'react';
// Tailwind CSS is assumed to be available in this environment
// Lucide icons are assumed to be available

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
    // Simple conditional rendering (no actual scrolling needed in a single-file component simulation)
    // but we use this to highlight the active section.
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex-shrink-0 text-xl font-bold text-gray-900">
          <span className="text-blue-600">Fanuel D.</span>
        </div>
        <div className="flex space-x-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                activeSection === item.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
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
  <section id="home" className="min-h-screen pt-20 flex items-center justify-center bg-gray-50 p-4 md:p-8">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
      
      {/* Text Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <p className="text-lg font-semibold text-blue-600 mb-2">Ascending to Cloud Engineering</p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-4">
          Fanuel <span className="text-blue-600">Debebe</span>
        </h1>
        <p className="text-2xl text-gray-600 font-light mb-6">
          Strategic Leader | Aspiring **Cloud Engineer** | CEO at Bold Endeavor
        </p>
        <p className="text-gray-700 max-w-lg mb-8">
          Bridging executive leadership experience with hands-on technical skills to architect scalable, resilient, and impactful cloud solutions.
        </p>
        
        <div className="flex justify-center lg:justify-start space-x-4">
          <button 
            onClick={() => setActiveSection('contact')}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
          <button 
            onClick={() => setActiveSection('projects')}
            className="px-6 py-3 bg-white text-gray-800 font-semibold border border-gray-300 rounded-xl shadow-md hover:bg-gray-100 transition-transform duration-300 transform hover:scale-105"
          >
            View Projects
          </button>
        </div>
      </div>

      {/* Image/Visual - Using a simple background image placeholder */}
      <div className="lg:w-1/2 relative flex justify-center items-center">
        <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-500">
          <img 
            src="profile.jpg" 
            alt="Fanuel Debebe Profile" 
            className="object-cover w-full h-full"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/0077B6/FFFFFF?text=F+D" }}
          />
        </div>
        {/* Simple Cloud/Infra SVG element for flair */}
        <div className="absolute bottom-0 right-0 p-3 bg-white rounded-full shadow-xl">
          <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
        </div>
      </div>
    </div>
  </section>
);

// --- Component 3: About/Leadership Section ---
const AboutSection = () => (
  <section id="about" className="py-20 bg-white p-4 md:p-8">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Leadership & Transition</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Column 1: Executive Summary */}
        <div className="lg:col-span-1 p-6 bg-gray-50 rounded-xl shadow-md border-t-4 border-blue-600">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Executive Foundation</h3>
          <p className="text-gray-600 mb-4">
            My career has been built on strategic planning, resource management, and delivering results as the **CEO at Bold Endeavor Trading Plc** and **Deputy General Manager at Fleet Addis Transport Network Plc**. These roles instilled in me a crucial understanding of organizational infrastructure and large-scale operations.
          </p>
          <div className="space-y-2">
             <a href="https://gurshahub.com" target="_blank" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">→ Gursha Hub</a>
             <a href="https://gurshamenu.com" target="_blank" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200">→ Gursha Menu</a>
          </div>
        </div>

        {/* Column 2: AltSchool Journey */}
        <div className="lg:col-span-2 p-6 bg-white rounded-xl shadow-xl border-l-4 border-blue-600">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Pivot to Cloud Engineering</h3>
          <p className="text-gray-700 mb-4">
            I joined the **AltSchool Africa, School of Engineering program** to formally pivot my career toward infrastructure technology. My business acumen in managing complex logistics and resources translates directly into designing efficient, cost-optimized, and resilient cloud architectures.
          </p>
          <p className="text-gray-700">
            **Core Learning Motivation:** To master Infrastructure-as-Code (IaC) principles and leverage platforms like AWS and Azure, ensuring that technology serves as a scalable backbone for global and African business innovation.
          </p>
        </div>
        
      </div>
    </div>
  </section>
);

// --- Component 4: Skills Section ---
const SkillPill = ({ icon, title, level }) => (
  <div className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
    <div className="text-blue-600 w-6 h-6">{icon}</div>
    <div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-500">{level}</p>
    </div>
  </div>
);

const SkillsSection = () => (
  <section id="skills" className="py-20 bg-gray-50 p-4 md:p-8">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">My Technical Arsenal</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Cloud Stack */}
        <div className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-blue-500">
          <h3 className="text-2xl font-semibold text-gray-800 mb-5">Cloud Engineering</h3>
          <div className="space-y-4">
            <SkillPill title="AWS/Azure Fundamentals" level="In-Depth Study" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9h-9"></path></svg>} />
            <SkillPill title="Infrastructure-as-Code (IaC)" level="Terraform Concepts" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 012-2h10a2 2 0 012 2m-4 4h-4m-4 0v-4"></path></svg>} />
            <SkillPill title="Networking & Security" level="VPC, IAM Principles" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6-6v6m-6-6h6m-6 0h6m0 0h6m-6 0v6m-6-6h6m-6 0h6m0 0h6"></path></svg>} />
          </div>
        </div>
        
        {/* Column 2: Automation & DevOps */}
        <div className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-purple-500">
          <h3 className="text-2xl font-semibold text-gray-800 mb-5">Automation & DevOps</h3>
          <div className="space-y-4">
            <SkillPill title="Linux/Bash Scripting" level="System Automation" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 12H3m18 0h-2M9 5h6a2 2 0 012 2v10a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2z"></path></svg>} />
            <SkillPill title="Git & GitHub" level="Version Control Mastery" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>} />
            <SkillPill title="Python Fundamentals" level="Scripting and Logic" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>} />
          </div>
        </div>

        {/* Column 3: Foundational Web */}
        <div className="p-6 bg-white rounded-xl shadow-lg border-t-4 border-yellow-500">
          <h3 className="text-2xl font-semibold text-gray-800 mb-5">Foundational Web</h3>
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
  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4 flex-grow">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {stack.map((tech) => (
        <span key={tech} className="text-xs font-medium px-3 py-1 bg-gray-200 text-gray-700 rounded-full">
          {tech}
        </span>
      ))}
    </div>
    <a 
      href={link} 
      target="_blank" 
      className="text-blue-600 hover:text-blue-800 font-semibold mt-auto flex items-center"
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
      description: "A fully responsive personal profile card demonstrating mastery of CSS Grid layout and mobile-first design principles.",
      link: "https://korenty.github.io/personal-profile-grid/",
      stack: ["HTML5", "CSS Grid", "Tailwind (Concept)"],
    },
    {
      title: "Classic Chocolate Chip Recipe Page",
      description: "A clean, semantic HTML structure project showcasing proper use of headings, lists, tables, and image linking.",
      link: "#", // Assuming the old recipe link is unavailable or needs updating
      stack: ["HTML5", "CSS", "Semantic Markup"],
    },
    {
      title: "Cloud Infrastructure Blueprint (Future)",
      description: "A planned project focused on deploying a simple, highly-available web application using Terraform on AWS/Azure.",
      link: "https://github.com/Korenty",
      stack: ["Terraform", "AWS/Azure", "IaC"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Showcase Projects</h2>
        <p className="text-center text-gray-600 mb-8">
          A view of current foundational work and future projects that will demonstrate Cloud Engineering capabilities.
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
  <section id="contact" className="py-20 bg-gray-800 text-white p-4 md:p-8">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">Let's Connect and Build</h2>
      <p className="text-gray-400 mb-10">
        I am always open to discussing new opportunities, learning strategies, or infrastructure architecture.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <a 
          href="https://www.linkedin.com/in/fanuel-seyoum-867382138" 
          target="_blank" 
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
        >
          LinkedIn
        </a>
        <a 
          href="https://x.com/fanuel_debebe?s=09" 
          target="_blank" 
          className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-xl hover:bg-gray-600 transition-colors"
        >
          X (Twitter)
        </a>
        <a 
          href="mailto:fanueld3@gmail.com" // Placeholder email, replace with your real email
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors"
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
      
      <main className="pt-16">
        <HeroSection setActiveSection={setActiveSection} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="bg-gray-900 text-white text-center p-6 text-sm">
        &copy; {new Date().getFullYear()} Fanuel Debebe. Built with React & Tailwind.
      </footer>
    </div>
  );
};

export default App;
