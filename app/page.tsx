'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [currentTime, setCurrentTime] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCursorCircle, setShowCursorCircle] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const islamabadTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Karachi"}));
      const timeString = islamabadTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
      // Animate first line immediately
      setTimeout(() => {
        const line1 = document.getElementById('line1');
        if (line1) line1.classList.add('animate');
      }, 100);
      
      // Animate second line before first line finishes
      setTimeout(() => {
        const line2 = document.getElementById('line2');
        if (line2) line2.classList.add('animate');
      }, 400);
    } else {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = 'auto';
      // Reset lines when menu closes
      const line1 = document.getElementById('line1');
      const line2 = document.getElementById('line2');
      if (line1) line1.classList.remove('animate');
      if (line2) line2.classList.remove('animate');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    setShowCursorCircle(true);
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setShowCursorCircle(false);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Menu Bar */}
      <div className="w-full bg-black py-4 px-6">
        <div className="flex items-center gap-96">
          <div className="text-left">
            <a href="/" className="text-sm text-white leading-none tracking-wider hover:text-gray-300 transition-colors" style={{ fontFamily: 'Philosopher-Regular, sans-serif' }}>
              <div>BABAR</div>
              <div>NAEEM</div>
            </a>
          </div>
          <div className="text-xs text-gray-300 font-normal whitespace-nowrap">
            33.5645°N, 73.3535°E
          </div>
          <div className="text-xs text-gray-300 font-normal whitespace-nowrap">
            {currentTime}
          </div>
          <div className="relative z-50">
            <div 
              className="flex flex-col gap-1 cursor-pointer transition-all duration-300 hover:gap-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ alignItems: 'flex-start' }}
            >
              {!isMenuOpen ? (
                <>
                  <div style={{width: '16px', height: '1.5px', backgroundColor: '#ffffff', flexShrink: 0}}></div>
                  <div style={{width: '16px', height: '1.5px', backgroundColor: '#ffffff', flexShrink: 0}}></div>
                </>
              ) : (
                <div className="w-4 h-4 flex items-center justify-center">
                  <div 
                    className="text-white transition-all duration-300" 
                    style={{
                      fontSize: '28px', 
                      lineHeight: '1',
                      fontWeight: '100',
                      transition: 'font-size 0.3s ease'
                    }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.fontSize = '32px'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.fontSize = '28px'}
                  >×</div>
                </div>
              )}
            </div>
          </div>
          
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black z-40 animate-fadeIn">
              <div className="absolute top-16 left-16 animate-fadeIn">
                <div className="space-y-4">
                  <a 
                    href="#hero" 
                    className="block hover:text-gray-300 transition-colors"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setSelectedOption('01 Home');
                    }}
                  >
                    <div className="text-3xl text-gray-300 font-bold mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>01</div>
                    <div 
                      className="text-9xl font-medium text-white mb-8 ml-12 -mt-12 hover:text-gray-300 transition-colors duration-300 inline-block"
                      onMouseMove={handleMouseMove}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      style={{ width: 'fit-content' }}
                    >Home</div>
                    <div className="h-1 bg-gray-300 mt-4 line-stretch" id="line1"></div>
                  </a>
                  <a 
                    href="#about" 
                    className="block hover:text-gray-300 transition-colors"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setSelectedOption('02 About Me');
                    }}
                  >
                    <div className="text-3xl text-gray-300 font-bold mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>02</div>
                    <div 
                      className="text-9xl font-medium text-white mb-8 ml-12 -mt-12 hover:text-gray-300 transition-colors duration-300 inline-block"
                      onMouseMove={handleMouseMove}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      style={{ width: 'fit-content' }}
                    >About Me</div>
                    <div className="h-1 bg-gray-300 mt-4 line-stretch" id="line2"></div>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Cursor Circle */}
          {showCursorCircle && (
            <div 
              className="fixed pointer-events-none z-50"
              style={{
                left: cursorPosition.x,
                top: cursorPosition.y,
                width: '80px',
                height: '80px',
                transform: 'translate(0, 0)',
                transition: 'none',
                background: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '50%',
                mixBlendMode: 'difference'
              }}
            />
          )}
        </div>
      </div>

      {/* Scrolling Text */}
      <div className="w-screen -mx-6 overflow-hidden h-48" style={{ paddingTop: '200px' }}>
        <h1 className="text-9xl md:text-[12rem] font-semibold text-white tracking-wide whitespace-nowrap scroll-text" style={{ fontFamily: 'Arial, sans-serif', textTransform: 'lowercase' }}>
          hi i'm babar • hi i'm babar • hi i'm babar • hi i'm babar • hi i'm babar • hi i'm babar • hi i'm babar • hi i'm babar • hi i'm babar • hi i'm babar • hi i'm babar • hi i'm babar • hi i'm babar • hi i'm babar • hi i'm babar • hi i'm babar • hi i'm babar • hi i'm babar • hi i'm babar • hi i'm babar
        </h1>
      </div>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex-1"></div>
          <div className="flex-1 flex justify-end">
            <a 
              href="https://www.youtube.com/watch?v=zTOccll2XGM" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ position: 'absolute', top: '300px', left: '3.5%', width: '42%', textDecoration: 'none', color: 'inherit' }}
            >
              <img 
                src="/images/Cherubs_Cupids-56a0004f3df78cafda9f8cae.jpg" 
                alt="Cherubs_Cupids-56a0004f3df78cafda9f8cae" 
                className="w-full h-auto object-cover"
                style={{ marginTop: '100px' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div style={{ marginTop: '20px', textAlign: 'left', fontSize: '14px', lineHeight: '1.4', color: '#cccccc' }}>
                <div>
                  <strong>The Savers Paradox</strong>: <em>A Common Mindset That Can Ruin Your Life</em>
                </div>
              </div>
            </a>
            <a 
              href="https://www.thelivingphilosophy.com/p/soren-kierkegaard" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ position: 'absolute', top: '300px', left: '46.5%', width: '50%', textDecoration: 'none', color: 'inherit' }}
            >
              <img 
                src="/images/2015.033.0001.jpg" 
                alt="2015.033.0001" 
                className="w-full h-auto object-cover"
                style={{ marginTop: '100px' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div style={{ marginTop: '20px', textAlign: 'left', fontSize: '14px', lineHeight: '1.4', color: '#cccccc' }}>
                <div style={{ marginBottom: '8px' }}>
                  <strong>Soren Kierkegaard</strong> — <em>The Father of Existentialism</em>:
                </div>
                <div>
                  <em>A deep dive into the philosophy of the Christian father of Existentialism</em>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-black" style={{ paddingTop: '600px' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center" style={{ fontFamily: 'Minecraft, monospace' }}>About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-white mb-8 leading-relaxed" style={{ fontFamily: 'Minecraft, monospace' }}>
                I merge AI with intuition, quietly exploring new ideas at the intersection of technology and art.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium" style={{ fontFamily: 'Minecraft, monospace' }}>JavaScript</span>
                <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium" style={{ fontFamily: 'Minecraft, monospace' }}>Python</span>
                <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium" style={{ fontFamily: 'Minecraft, monospace' }}>React</span>
                <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium" style={{ fontFamily: 'Minecraft, monospace' }}>Next.js</span>
                <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium" style={{ fontFamily: 'Minecraft, monospace' }}>AI/ML</span>
              </div>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'Minecraft, monospace' }}>What I Do</h3>
              <ul className="space-y-3 text-white" style={{ fontFamily: 'Minecraft, monospace' }}>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Full-stack web development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  AI and machine learning projects
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  User experience design
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Open source contributions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-900 rounded-2xl shadow-sm border border-gray-800 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">AI Chat Application</h3>
                <p className="text-gray-400 mb-4">
                  A modern chat interface powered by AI, built with React and Node.js. Features real-time messaging and intelligent responses.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded text-sm">React</span>
                  <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded text-sm">Node.js</span>
                  <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded text-sm">OpenAI API</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">Live Demo</a>
                  <a href="#" className="text-gray-400 hover:text-gray-300 font-medium">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-900 rounded-2xl shadow-sm border border-gray-800 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-600 to-teal-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">E-commerce Platform</h3>
                <p className="text-gray-400 mb-4">
                  A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded text-sm">Next.js</span>
                  <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded text-sm">MongoDB</span>
                  <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded text-sm">Stripe</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">Live Demo</a>
                  <a href="#" className="text-gray-400 hover:text-gray-300 font-medium">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-900 rounded-2xl shadow-sm border border-gray-800 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-600 to-red-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Data Visualization Tool</h3>
                <p className="text-gray-400 mb-4">
                  Interactive data visualization dashboard with real-time analytics and customizable charts for business insights.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded text-sm">D3.js</span>
                  <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded text-sm">Python</span>
                  <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded text-sm">Flask</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">Live Demo</a>
                  <a href="#" className="text-gray-400 hover:text-gray-300 font-medium">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">Get In Touch</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:babarnaeem0001@gmail.com"
                  className="flex items-center justify-center text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <span className="mr-3">📧</span>
                  babarnaeem0001@gmail.com
                </a>
                <a 
                  href="https://github.com/BabarNaeem01"
                  target="_blank"
                  className="flex items-center justify-center text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <span className="mr-3">🐙</span>
                  GitHub Profile
                </a>
              </div>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-4">
                <a 
                  href="#projects"
                  className="block text-gray-400 hover:text-blue-400 transition-colors"
                >
                  View My Projects
                </a>
                <a 
                  href="#about"
                  className="block text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Learn More About Me
                </a>
                <a 
                  href="mailto:babarnaeem0001@gmail.com"
                  className="block text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Send Me an Email
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
          <a
            href="mailto:babarnaeem0001@gmail.com"
              className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/BabarNaeem01"
            target="_blank"
              className="border border-gray-700 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-900 transition-colors"
          >
              View GitHub
          </a>
        </div>
      </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800 bg-black">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Babar Naeem. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
