import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ project }) {
  const isExternal = project.link.startsWith('http');  // Check if the link is external

  const linkContent = (
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition">
      <Image
        src="/images/OIP_1.png"  // Correct path to image
        alt="Project Image"
        width={400}
        height={300}
        className="rounded-lg mb-4"
      />
      <h3 className="text-2xl font-semibold text-yellow-500">{project.title}</h3>
      <p className="text-gray-300 my-2">{project.description}</p>
      <p className="text-blue-400 hover:text-blue-600 mt-2">View Project</p>
    </div>
  );

  return isExternal ? (
    // If the project link is external, use <a> tag
    <a  
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      {linkContent}
    </a>
  ) : (
    // If the project link is internal, use Next.js <Link> component
    <Link href={project.link} className="block">
      {linkContent}
    </Link>
  );
}
