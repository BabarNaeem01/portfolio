export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-900">Babar Naeem</div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Hello, I'm <span className="text-blue-600">Babar</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A Computer Science student passionate about AI, web development, and creating meaningful digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a Computer Science student with a passion for technology and innovation. 
                I love exploring the intersection of AI and web development, creating solutions 
                that make a difference.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                When I'm not coding, you can find me learning about new technologies, 
                contributing to open source projects, or working on personal projects 
                that challenge me to grow as a developer.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">JavaScript</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Python</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">React</span>
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">Next.js</span>
                <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">AI/ML</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What I Do</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Full-stack web development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  AI and machine learning projects
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  User experience design
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
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
