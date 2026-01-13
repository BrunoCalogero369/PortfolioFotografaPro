'use client'
import { useState } from 'react';
import { PROJECTS, Project } from '@/constants';
import { ProjectCard } from './ProjectCard';
import { GalleryModal } from './GalleryModal';

export const Portfolio = () => {
  // Estado para saber qué proyecto abrir
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-24 px-8 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-light tracking-tighter mb-2">Portfolio</h2>
          <div className="h-[1px] w-20 bg-black mx-auto"></div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
         {PROJECTS.map((project) => (
         <ProjectCard 
         key={project.id} 
         project={project} 
         onClick={() => setSelectedProject(project)} 
         />
         ))}
         </div>
         </div>

      {/* MODAL DE GALERÍA */}
      <GalleryModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};