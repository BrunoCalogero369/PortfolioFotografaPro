import { Instagram, MessageCircle, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* LOGO O NOMBRE */}
        <div className="text-2xl font-bold tracking-tighter mb-8 uppercase">
          Encuentrame aquí ↓
        </div> 

        {/* LINKS RÁPIDOS */}
        <div className="flex gap-8 mb-12">
          <a 
            href="https://www.instagram.com/floorsalvatierraa/" 
            target="_blank" 
            className="hover:text-pink-500 transition-colors flex items-center gap-2 text-sm tracking-widest uppercase opacity-70 hover:opacity-100"
          >
            <Instagram size={18} />
            <span>Instagram</span>
          </a>
          <a 
            href="https://wa.me/+34660253884" 
            target="_blank" 
            className="hover:text-green-500 transition-colors flex items-center gap-2 text-sm tracking-widest uppercase opacity-70 hover:opacity-100"
          >
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* SEPARADOR PEQUEÑO */}
        <div className="h-[1px] w-12 bg-white/20 mb-8"></div>

        {/* COPYRIGHT */}
        <div className="flex flex-col items-center gap-2 text-[10px] tracking-[0.2em] uppercase opacity-40 text-center">
          <p>© {currentYear} Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Hecho con <Heart size={10} className="fill-current" /> por Florencia
          </p>
        </div>
      </div>
    </footer>
  );
};