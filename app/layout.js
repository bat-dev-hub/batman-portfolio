// app/layout.js
import BackToTop from '../components/BackToTop';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Batman | Full Stack Developer',
  description: 'Dark knight by night, full stack dev by day.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />

         <main className="flex-grow"></main>
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
