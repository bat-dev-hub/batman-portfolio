// components/Footer.js

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-10">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <div className="mt-2 space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          {/* <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-white transition"
          >
            Email
          </a> */}
        </div>
      </div>
    </footer>
  );
}
