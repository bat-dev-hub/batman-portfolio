// app/not-found.js

// app/not-found.js
'use client'; // Required to use <Link /> in this file

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold mb-4">🦇 404 - Gotham Not Found</h1>
      <p className="text-lg text-gray-400 mb-6">
        Even Batman couldn’t find the page you’re looking for.
      </p>
      <Link href="/" className="text-blue-400 underline">
        Return to Batcave
      </Link>
    </div>
  );
}

