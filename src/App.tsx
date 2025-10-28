import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, GraduationCap, User, Home as HomeIcon, Award } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-[#00AEEF]/20 neon-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold relative group">
              <span className="text-white">NM</span>
              <span className="text-[#00AEEF] pulse-glow inline-block">.</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00AEEF] group-hover:w-full transition-all duration-300"></div>
            </div>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative transition-colors duration-300 ${
                    activeSection === item.id ? 'text-[#00AEEF]' : 'text-gray-300 hover:text-[#00AEEF]'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#00AEEF] glow-effect"></div>
                  )}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-gray-300 hover:text-[#00AEEF] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/90 border-t border-[#00AEEF]/20">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-3 w-full py-2 px-4 rounded-lg transition-all ${
                      activeSection === item.id
                        ? 'bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/30'
                        : 'text-gray-300 hover:bg-gray-800/50'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 animate-fade-in">
            <div className="mb-8 flex justify-center floating-animation">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#00AEEF]/20 blur-2xl animate-pulse"></div>
                <img
                  src="/WhatsApp Image 2025-10-27 at 17.49.52_1adaec95.jpg"
                  alt="Naman Mahnot"
                  className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-[#00AEEF] shadow-[0_0_40px_rgba(0,174,239,0.6)] hover:shadow-[0_0_80px_rgba(0,174,239,0.8)] transition-all duration-300 pulse-glow"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#00AEEF] to-white">
              Naman <span className="text-[#00AEEF]">Mahnot</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#00AEEF] to-transparent mx-auto mb-6 rounded-full glow-effect"></div>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              <span className="text-[#00AEEF]">Computer Science Student</span> | Web Developer | DSA | Tech Enthusiast
            </p>
            <p className="text-lg text-gray-400 italic mb-8 font-light">
              "Welcome to my digital space — where creativity meets code."
            </p>
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-[#00AEEF] to-[#0096d1] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,174,239,0.6)] hover:-translate-y-1 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative">View My Work</span>
              <ExternalLink size={20} className="relative group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 relative">
        <div className="absolute inset-0 grid-background opacity-20"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About <span className="text-[#00AEEF]">Me</span>
          </h2>
          <div className="tech-card p-8 rounded-2xl hologram-effect relative z-10">
            <p className="text-lg text-gray-300 leading-relaxed relative z-10">
              I'm <span className="text-[#00AEEF] font-semibold">Naman Mahnot</span>, a passionate and curious Computer Science and Business Systems student at JSPM College (2nd Year). I enjoy building functional, elegant digital solutions and have hands-on experience with C, C++, Python, DSA, and OOPs. My projects — including a Keyboard Typing Speed Test and Alarm Clock — reflect my problem-solving mindset and creativity. I'm deeply interested in machine learning and web development, aspiring to become a Full-Stack AI Developer who builds intelligent, user-centric applications.
            </p>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-[#00AEEF]">Education</span>
          </h2>
          <div className="space-y-6">
            <div className="tech-card p-8 rounded-2xl group">
              <div className="flex items-start space-x-4">
                <div className="bg-[#00AEEF]/10 p-4 rounded-lg border border-[#00AEEF]/30 group-hover:bg-[#00AEEF]/20 transition-all">
                  <GraduationCap size={32} className="text-[#00AEEF]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-[#00AEEF]">B.Tech in Computer Science and Business Systems</h3>
                  <p className="text-gray-400 mb-2">JSPM Rajarshi Shahu College of Engineering, Pune</p>
                  <p className="text-gray-500 mb-3 text-sm">Roll Number: RBT24CB029</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="bg-gray-800/50 px-4 py-2 rounded-full border border-[#00AEEF]/20">2024 – 2028</span>
                    <span className="bg-[#00AEEF]/20 text-[#00AEEF] px-4 py-2 rounded-full font-semibold border border-[#00AEEF]/40">CGPA: 9.08</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="tech-card p-8 rounded-2xl group">
              <div className="flex items-start space-x-4">
                <div className="bg-[#00AEEF]/10 p-4 rounded-lg border border-[#00AEEF]/30 group-hover:bg-[#00AEEF]/20 transition-all">
                  <Award size={32} className="text-[#00AEEF]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-[#00AEEF]">12th Standard</h3>
                  <p className="text-gray-400 mb-3">St. Joseph International School</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="bg-gray-800/50 px-4 py-2 rounded-full border border-[#00AEEF]/20">Year: 2023</span>
                    <span className="bg-[#00AEEF]/20 text-[#00AEEF] px-4 py-2 rounded-full font-semibold border border-[#00AEEF]/40">Percentage: 78.50%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="tech-card p-8 rounded-2xl group">
              <div className="flex items-start space-x-4">
                <div className="bg-[#00AEEF]/10 p-4 rounded-lg border border-[#00AEEF]/30 group-hover:bg-[#00AEEF]/20 transition-all">
                  <Award size={32} className="text-[#00AEEF]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-[#00AEEF]">10th Standard</h3>
                  <p className="text-gray-400 mb-3">K.D JAIN PUBLIC SCHOOL</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="bg-gray-800/50 px-4 py-2 rounded-full border border-[#00AEEF]/20">Year: 2021</span>
                    <span className="bg-[#00AEEF]/20 text-[#00AEEF] px-4 py-2 rounded-full font-semibold border border-[#00AEEF]/40">Percentage: 85.80%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4 relative">
        <div className="absolute inset-0 grid-background opacity-20"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-[#00AEEF]">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="tech-card p-8 rounded-2xl hologram-effect relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-[#00AEEF] relative z-10">Technical Skills</h3>
              <div className="flex flex-wrap gap-3 relative z-10">
                {['C', 'C++', 'Python', 'HTML', 'CSS'].map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-800/50 px-4 py-2 rounded-lg border border-[#00AEEF]/20 hover:bg-[#00AEEF]/20 hover:text-[#00AEEF] hover:border-[#00AEEF]/50 hover:shadow-[0_0_15px_rgba(0,174,239,0.3)] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="tech-card p-8 rounded-2xl hologram-effect relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-[#00AEEF] relative z-10">Soft Skills</h3>
              <div className="flex flex-wrap gap-3 relative z-10">
                {['Problem-Solving', 'Communication', 'Teamwork', 'Adaptability'].map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-800/50 px-4 py-2 rounded-lg border border-[#00AEEF]/20 hover:bg-[#00AEEF]/20 hover:text-[#00AEEF] hover:border-[#00AEEF]/50 hover:shadow-[0_0_15px_rgba(0,174,239,0.3)] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-[#00AEEF]">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="tech-card p-8 rounded-2xl hologram-effect relative z-10 group">
              <div className="flex items-start justify-between mb-4 relative z-10">
                <div className="bg-[#00AEEF]/10 p-3 rounded-lg border border-[#00AEEF]/30 group-hover:bg-[#00AEEF]/20 transition-all">
                  <Code2 size={28} className="text-[#00AEEF]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 relative z-10">Keyboard Typing Speed Test</h3>
              <p className="text-gray-400 mb-4 leading-relaxed relative z-10">
                A desktop-based app that measures and displays typing speed in real time with visual feedback.
              </p>
              <div className="flex items-center justify-between relative z-10">
                <span className="text-sm bg-[#00AEEF]/20 px-4 py-2 rounded-full text-[#00AEEF] border border-[#00AEEF]/30">Python</span>
              </div>
            </div>

            <div className="tech-card p-8 rounded-2xl hologram-effect relative z-10 group">
              <div className="flex items-start justify-between mb-4 relative z-10">
                <div className="bg-[#00AEEF]/10 p-3 rounded-lg border border-[#00AEEF]/30 group-hover:bg-[#00AEEF]/20 transition-all">
                  <Code2 size={28} className="text-[#00AEEF]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 relative z-10">Alarm Clock</h3>
              <p className="text-gray-400 mb-4 leading-relaxed relative z-10">
                A Python-based alarm application that allows users to set, manage, and trigger alarms with a simple GUI.
              </p>
              <div className="flex items-center justify-between relative z-10">
                <span className="text-sm bg-[#00AEEF]/20 px-4 py-2 rounded-full text-[#00AEEF] border border-[#00AEEF]/30">Python</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 relative">
        <div className="absolute inset-0 grid-background opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Get In <span className="text-[#00AEEF]">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Feel free to reach out for collaborations or just a friendly chat!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:namanmahnot1@gmail.com"
              className="group tech-card px-6 py-4 rounded-lg flex items-center space-x-3 hover:-translate-y-2 transition-all duration-300"
            >
              <Mail size={24} className="text-[#00AEEF]" />
              <span className="group-hover:text-[#00AEEF] transition-colors">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/naman-mahnot-032224279/"
              target="_blank"
              rel="noopener noreferrer"
              className="group tech-card px-6 py-4 rounded-lg flex items-center space-x-3 hover:-translate-y-2 transition-all duration-300"
            >
              <Linkedin size={24} className="text-[#00AEEF]" />
              <span className="group-hover:text-[#00AEEF] transition-colors">LinkedIn</span>
            </a>
            <a
              href="https://github.com/namanmahnot"
              target="_blank"
              rel="noopener noreferrer"
              className="group tech-card px-6 py-4 rounded-lg flex items-center space-x-3 hover:-translate-y-2 transition-all duration-300"
            >
              <Github size={24} className="text-[#00AEEF]" />
              <span className="group-hover:text-[#00AEEF] transition-colors">GitHub</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-black/80 border-t border-[#00AEEF]/20 py-8 px-4 backdrop-blur-md">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2025 Naman Mahnot | Designed with passion and precision.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
