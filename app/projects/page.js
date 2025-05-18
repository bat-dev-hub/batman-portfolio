// app/projects/page.js
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects'; // Data file to hold project info

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
