// components/Navbar.js
// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-gray-900">
      <h1 className="text-2xl font-bold text-yellow-500">BatMan</h1>
      <ul className="flex space-x-6 text-white">
        <li>
          <Link href="/" className="hover:text-yellow-400">Home</Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-yellow-400">Projects</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-yellow-400">About</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}


