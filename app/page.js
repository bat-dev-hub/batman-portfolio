// app/page.js
export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold mb-4">Hi, I&apos;m Batman 🦇</h1>
      <p className="text-xl text-gray-400 mb-6">
        Full Stack Developer • Defender of Gotham • JS Avenger
      </p>
      <a
        href="/projects"
        className="px-6 py-2 border border-gray-500 hover:bg-gray-800 transition"
      >
        View Projects
      </a>
    </main>
  );
}
