'use client'
import Image from 'next/image';
import { useState } from 'react';
import { Project } from '@/constants';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  // Estado para controlar el overlay en mobile
  const [isFocused, setIsFocused] = useState(false);

// Dentro de ProjectCard.tsx
const handleTouch = (e: React.MouseEvent) => {
  // Si estamos en un dispositivo que detecta hover (PC), que abra de una
  // Si no (Mobile), usamos la lógica del foco
  if (window.matchMedia("(pointer: coarse)").matches) {
    if (!isFocused) {
      e.preventDefault(); // Evita que dispare la acción principal
      setIsFocused(true);
    }
  }
};

  return (
    <div 
      className="group cursor-pointer"
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      onClick={handleTouch}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-4 bg-gray-100">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* OVERLAY: group-hover (PC) O isFocused (Mobile) */}
        <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] ${
          isFocused ? 'opacity-100' : 'opacity-0'
        }`}>
          <span className="text-white border border-white px-6 py-2 text-sm tracking-widest uppercase">
            Ver todas las fotos
          </span>
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="text-lg font-medium tracking-tight text-gray-900 leading-snug">
          {project.title}
        </h3>
        <div className="flex justify-between text-[10px] text-gray-400 uppercase tracking-[0.15em] font-semibold">
          <span>{project.date}</span>
          <span>{project.location}</span>
        </div>
      </div>
    </div>
  );
};