'use client'
import Image from 'next/image';
import { Project } from '@/constants';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryModalProps {
  project: Project | null;
  onClose: () => void;
}

// Configuración de la animación
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1 // 0.1 segundos entre cada foto
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const GalleryModal = ({ project, onClose }: GalleryModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl">
        
        <button 
          onClick={onClose}
          className="fixed top-6 right-6 z-[110] text-white/70 hover:text-white p-2 bg-white/10 rounded-full transition-all"
        >
          <X size={32} />
        </button>

        <div className="w-full h-full overflow-y-auto px-4 py-20">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto mb-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-5xl font-light italic mb-2">{project.title}</h2>
            <p className="text-xs tracking-[0.3em] uppercase opacity-50">{project.location}</p>
          </motion.div>

          {/* EL GRID ANIMADO */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 max-w-7xl mx-auto"
          >
            {project.photos.map((photo, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="break-inside-avoid overflow-hidden rounded-lg bg-white/5"
              >
                <Image
                  src={photo}
                  alt="Gallery"
                  width={800}
                  height={1200}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};