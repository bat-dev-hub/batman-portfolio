'use client';
import Image from 'next/image';

export default function TechStack() {
  const techs = [
    { name: 'Java', icon: '/images/java-icon.svg' },
    { name: 'Spring Boot', icon: '/images/springboot-icon.svg' },
    { name: 'MySQL', icon: '/images/mysql-icon.svg' },
    { name: 'MSSQL', icon: '/images/mssql-icon.svg' },
    { name: 'Azure', icon: '/images/azure-icon.svg' },
    { name: 'ReactJS', icon: '/images/react-icon.svg' },
    { name: 'HTML', icon: '/images/html-icon.svg' },
    { name: 'CSS', icon: '/images/css-icon.svg' },
    { name: 'JavaScript', icon: '/images/js-icon.svg' },
    { name: 'Node.js', icon: '/images/nodejs-icon.svg' },
  ];

  return (
    <section className="py-12 bg-gray-100 text-black">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-yellow-500 mb-8">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {techs.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center">
              <Image
                src={tech.icon}
                alt={tech.name}
                width={64}
                height={64}
                className="mx-auto"
              />
              <p className="mt-2">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
