'use client'
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6">
          {/* BACKGROUND OVERLAY con Fade */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* CAJA DEL MODAL con efecto iPhone (Spring) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 300 
            }}
            className="relative bg-white text-black max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-[2rem] shadow-2xl flex flex-col md:flex-row"
          >
            
            {/* BOTÓN CERRAR TIPO iOS */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-20 bg-black/10 hover:bg-black/20 backdrop-blur-md rounded-full p-2 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* COLUMNA FOTO */}
            <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
              <Image
                src="/fotobio1.jpg"
                alt="Florencia Salvatierra"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* COLUMNA TEXTO */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
              <h2 className="text-3xl font-light mb-6 tracking-tight italic">Sobre mí</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Florencia Salvatierra es fotógrafa con base en Alicante. 
                  Se gradúa este año en Fotografía por la EASDA de Alicante, 
                  ha complementado su formación con cursos de fotografía y
                  filmmaking en Ciudad de la Luz y en Madrid.
                </p>
                <p className="italic border-l-2 border-gray-200 pl-4">
                  Su trabajo nace de una profunda pasión por la fotografía documental,
                  explorando la realidad desde una mirada sensible y honesta. 
                  Desarrolla proyectos de paisaje, editorial, y trabajos por encargo con especial atención a la narrativa visual.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};