'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('An error occurred.');
    }
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition"
        >
          Send
        </button>
      </form>

      {status && (
        <p className="mt-4 text-center text-green-400 font-medium">{status}</p>
      )}
    </main>
  );
}
