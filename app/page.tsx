export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
          Hey, I’m <span className="text-gray-800">Babar Naeem</span> 👋
        </h1>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          A Computer Science student and aspiring developer passionate about{" "}
          <span className="font-medium text-gray-800">AI, web development</span>,
          and <span className="font-medium text-gray-800">design</span>.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="mailto:babarnaeem0001@gmail.com"
            className="border border-black px-6 py-3 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all duration-300"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/BabarNaeem01"
            target="_blank"
            className="border border-gray-400 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
