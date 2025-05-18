// app/about/page.js
import TechStack from '../../components/TechStack';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
      
      <section className="max-w-4xl mx-auto">
        <p className="text-xl mb-4">
          Hi, I&apos;m Batman 🦇, a full stack developer and a passionate coder.
          I specialize in building dynamic web applications with modern technologies like React, Next.js, and Node.js.
        </p>

        <p className="text-xl mb-4">
          I have experience working with a variety of frameworks and tools, including:
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>MongoDB</li>
          <li>Git / GitHub</li>
        </ul>

        <p className="text-xl mb-8">
          I believe in creating clean, efficient, and scalable code that drives the user experience forward.
        </p>
      </section>

      {/* Tech Stack Visual Section */}
      <TechStack />
    </main>
  );
}
