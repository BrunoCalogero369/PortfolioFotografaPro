'use client'
import Image from 'next/image';
import { useState } from 'react';
import { Project } from '@/constants';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div 
      className="group cursor-pointer"
      // Quitamos el onClick de acá para evitar disparos accidentales
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      // En mobile, un toque en el div activará el focus (por hover simulado)
      onClick={() => setIsFocused(!isFocused)} 
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-4 bg-gray-100">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* OVERLAY */}
        <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] ${
          isFocused ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* EL BOTÓN ES EL ÚNICO QUE DISPARA EL MODAL */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Importante para que no interfiera con otros clics
              onClick();
            }}
            className="text-white border border-white px-6 py-2 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
          >
            Ver todas las fotos
          </button>
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="text-lg font-medium tracking-tight text-gray-900">{project.title}</h3>
        <div className="flex justify-between text-[10px] text-gray-400 uppercase tracking-widest">
          <span>{project.date}</span>
          <span>{project.location}</span>
        </div>
      </div>
    </div>
  );
};