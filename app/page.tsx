export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Morse Code Header */}
      <div className="fixed top-0 w-full bg-white z-50 py-4">
        <div className="text-center">
          <div className="text-xl font-bold text-black" style={{ fontFamily: 'Minecraft, monospace' }}>•−••• •− −••• •− •−• / −• •− • •−−</div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-32 tracking-wide" style={{ fontFamily: 'Daydream, monospace' }}>
            Hi, I'm Babar
        </h1>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-12 text-center" style={{ fontFamily: 'Minecraft, monospace' }}>About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-black mb-8 leading-relaxed" style={{ fontFamily: 'Minecraft, monospace' }}>
                I merge AI with intuition, quietly exploring new ideas at the intersection of technology and art.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium" style={{ fontFamily: 'Minecraft, monospace' }}>JavaScript</span>
                <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium" style={{ fontFamily: 'Minecraft, monospace' }}>Python</span>
                <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium" style={{ fontFamily: 'Minecraft, monospace' }}>React</span>
                <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium" style={{ fontFamily: 'Minecraft, monospace' }}>Next.js</span>
                <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium" style={{ fontFamily: 'Minecraft, monospace' }}>AI/ML</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-black">
              <h3 className="text-xl font-semibold text-black mb-4" style={{ fontFamily: 'Minecraft, monospace' }}>What I Do</h3>
              <ul className="space-y-3 text-black" style={{ fontFamily: 'Minecraft, monospace' }}>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  Full-stack web development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  AI and machine learning projects
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  User experience design
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  Open source contributions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Chat Application</h3>
                <p className="text-gray-600 mb-4">
                  A modern chat interface powered by AI, built with React and Node.js. Features real-time messaging and intelligent responses.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">React</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Node.js</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">OpenAI API</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Live Demo</a>
                  <a href="#" className="text-gray-600 hover:text-gray-700 font-medium">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">E-commerce Platform</h3>
                <p className="text-gray-600 mb-4">
                  A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Next.js</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">MongoDB</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Stripe</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Live Demo</a>
                  <a href="#" className="text-gray-600 hover:text-gray-700 font-medium">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Visualization Tool</h3>
                <p className="text-gray-600 mb-4">
                  Interactive data visualization dashboard with real-time analytics and customizable charts for business insights.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">D3.js</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Python</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Flask</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Live Demo</a>
                  <a href="#" className="text-gray-600 hover:text-gray-700 font-medium">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get In Touch</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:babarnaeem0001@gmail.com"
                  className="flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <span className="mr-3">📧</span>
                  babarnaeem0001@gmail.com
                </a>
                <a 
                  href="https://github.com/BabarNaeem01"
                  target="_blank"
                  className="flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <span className="mr-3">🐙</span>
                  GitHub Profile
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-4">
                <a 
                  href="#projects"
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  View My Projects
                </a>
                <a 
                  href="#about"
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Learn More About Me
                </a>
                <a 
                  href="mailto:babarnaeem0001@gmail.com"
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Send Me an Email
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
          <a
            href="mailto:babarnaeem0001@gmail.com"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/BabarNaeem01"
            target="_blank"
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
              View GitHub
          </a>
        </div>
      </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center text-gray-600">
          <p>&copy; 2024 Babar Naeem. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
