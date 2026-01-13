'use client'
import { useState } from 'react';
import { AboutModal } from '@/components/Aboutmodal';
import { Instagram, MessageCircle } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [isAboutOpen, setIsAboutOpen] = useState(false); 

  return (
    <>
      {/* CAPA INVISIBLE (Cierra el dropdown de contacto si clicas fuera) */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-transparent" 
          onClick={() => setIsOpen(false)} 
        />
      )}

      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 text-white bg-gradient-to-b from-black/70 to-transparent">
        <div className="text-xl font-bold tracking-tighter">
          Mi Espacio Personal
        </div>
        
        <div className="flex gap-8 items-center text-sm tracking-widest font-light">
          
          {/* BOTÓN SOBRE MÍ */}
          <button 
            onClick={() => setIsAboutOpen(true)}
            className="hover:opacity-50 transition cursor-pointer"
          >
            Sobre mí
          </button>         

          {/* SECCIÓN CONTACTO */}
          <div className="relative z-50"> 
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`transition hover:opacity-50 ${isOpen ? 'opacity-50' : ''}`}
            >
              Contacto
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-4 w-48 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
                <ul className="flex flex-col text-xs">
  <li>
    <a 
      href="https://www.instagram.com/floorsalvatierraa/" 
      target="_blank" 
      className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition group"
    >
      {/* Icono de Instagram */}
      <Instagram size={16} className="text-pink-500 group-hover:scale-110 transition" />
      <span>Instagram →</span>
    </a>
  </li>
  <li>
    <a 
      href="https://wa.me/+34660253884" 
      target="_blank" 
      className="flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition border-t border-white/5 group"
    >
      {/* Icono de WhatsApp*/}
      <MessageCircle size={16} className="text-green-500 group-hover:scale-110 transition" />
      <span>WhatsApp →</span>
    </a>
  </li>
</ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* COMPONENTE DEL MODAL - renderizado aquí afuera */}
      <AboutModal 
        isOpen={isAboutOpen} 
        onClose={() => setIsAboutOpen(false)} 
      />
    </>
  );
};