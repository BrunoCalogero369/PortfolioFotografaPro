import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* IMAGEN DE FONDO */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/trabajo1/pic14.jpg"
          alt="Fotografía Portfolio"
          fill
          priority
          className="object-cover brightness-[0.6]" // Oscurecemos un poco la foto para que el texto resalte
        />
      </div>

      {/* CONTENIDO TEXTO */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-light tracking-widest uppercase mb-4 drop-shadow-lg">
          FLORENCIA SALVATIERRA
        </h1>
        <p className="text-lg md:text-xl font-medium tracking-[0.2em] uppercase opacity-90 mb-8">
          Fotografía Profesional
        </p>
        
        {/* BOTÓN DE ACCIÓN (Lleva al portfolio o contacto) */}
        <a 
          href="#portfolio"
          className="border border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 uppercase text-sm tracking-widest"
        >
          Ver Trabajos
        </a>
      </div>
    </section>
  );
};
