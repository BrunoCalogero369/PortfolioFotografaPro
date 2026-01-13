'use client'
import Image from 'next/image';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* BACKGROUND OVERLAY (Cierra al cliquear fuera) */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* CAJA DEL MODAL */}
      <div className="relative bg-white text-black max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 duration-300">
        
        {/* BOTÓN CERRAR */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-black/5 rounded-full transition"
        >
          <span className="text-2xl">✕</span>
        </button>

        {/* COLUMNA FOTO */}
        <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
          <Image
            src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop"
            alt="Fotógrafa"
            fill
            className="object-cover"
          />
        </div>

        {/* COLUMNA TEXTO */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-light mb-6 tracking-tight">Sobre mí</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Hola, soy Florencia! Una apasionada de capturar momentos que cuentan historias. 
            Mi enfoque se basa en la luz natural y la espontaneidad.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Illum beatae sit impedit non tempora, sunt explicabo corporis fuga ipsa, qui rerum quaerat alias iste distinctio saepe aliquam, accusamus porro maxime!
          </p>
          <p className="text-gray-600 leading-relaxed italic">
            La fotografía es el arte de congelar el tiempo.
          </p>
        </div>
      </div>
    </div>
  );
};