export interface Project {
  id: number;
  title: string;
  date: string;
  location: string;
  coverImage: string;
  photos: string[];
  description?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Tagliaferro",
    date: "26 de Octubre, 2025",
    description: "El presente proyecto fotográfico aborda la transición entre la infancia y la adolescencia de Victoria Tagliaferro como un proceso simultáneamente íntimo, emocional y espacial. A través de una serie de imágenes en blanco y negro, se observa a una niña moviéndose entre escenarios cotidianos como el dormitorio, la calle, el supermercado, que funcionan como metáforas de un tránsito vital más amplio: el paso progresivo hacia una etapa de descubrimiento, autonomía y construcción identitaria. Las fotografías capturan momentos aparentemente simples que, al seraislados y reunidos en una narrativa visual, revelan la sutileza de un periodo marcado por transformaciones internas profundas.",
    location: "Alicante",
    coverImage: "/trabajo1/pic6.jpg",
    photos: [
      "/trabajo1/pic1.jpg",
      "/trabajo1/pic2.jpg",
      "/trabajo1/pic3.jpg",
      "/trabajo1/pic4.jpg",
      "/trabajo1/pic5.jpg",
      "/trabajo1/pic6.jpg",
      "/trabajo1/pic7.jpg",
      "/trabajo1/pic8.jpg",
      "/trabajo1/pic9.jpg",
      "/trabajo1/pic10.jpg",
      "/trabajo1/pic11.jpg",
      "/trabajo1/pic12.jpg",  
      "/trabajo1/pic13.jpg",
      "/trabajo1/pic14.jpg",
      "/trabajo1/pic15.jpg",           
    ]
  },
  {
    id: 2,
    title: "MADO. Pregón LGTB",
    date: "02 de Julio, 2025",
    description: "Esta serie fotográfica centrada en los retratos y fragmentos del cuerpo durante el MADO 2025 en Madrid. Las imágenes muestran un espacio íntimo sobre la experiencia del orgullo, donde identidad, presencia y fuerza se manifiestan a través de la piel, las miradas y la indumentaria. Desplazando el foco del acontecimiento hacia cada persona.",
    location: "Madrid",
    coverImage: "/trabajo4/neodoc_03.jpg",
    photos: [
      "/trabajo4/neodoc_01.jpg",
      "/trabajo4/neodoc_02.jpg",
      "/trabajo4/neodoc_03.jpg",
      "/trabajo4/neodoc_04.jpg",
      "/trabajo4/neodoc_05.jpg",
      "/trabajo4/neodoc_06.jpg",
      "/trabajo4/neodoc_07.jpg",
      "/trabajo4/neodoc_08.jpg",
    ]
  },
  {
    id: 3,
    title: "Eleveda",
    date: "10 de Febrero, 2025",
    description: "Este proyecto editorial se centra en los tacones, un accesorio banal de primeras puede ser una forma de resaltar el estilo de la persona e incluso aumentar su propia confianza. Elevada refleja la esencia del significado de los tacones, no solo alza la altura de la persona sino que empodera, genera confianza, permite a la persona a sentirse poderosa y elegante. El enfoque está pensado para transimitir sofistificación, elegancia y fuerza. Por ello se usa una paletade colores como el azul, rojo, blancoy negro. Colores que aportan pasión, serenidad, profundidad y frescura.",
    location: "Alicante",
    coverImage: "/trabajo3/rc3.jpg",
    photos: [
      "/trabajo3/rc1.jpg",
      "/trabajo3/rc2.jpg",
      "/trabajo3/rc3.jpg",
      "/trabajo3/rc4.jpg",
      "/trabajo3/rc5.jpg",
      "/trabajo3/rc6.jpg",
      "/trabajo3/rc7.jpg",
      "/trabajo3/rc8.jpg",
      "/trabajo3/rc9.jpg",
      "/trabajo3/rc10.jpg",
      "/trabajo3/rc11.jpg",
    ]
  },
  {
    id: 4,
    title: "Naturaleza",
    date: "25 de Febrero, 2025",
    description: "DESCRIPCIÓN EN CAMINO...",
    location: "Catanzaro, Italia",
    coverImage: "/trabajo2/ct5.jpg",
    photos: [
      "/trabajo2/ct1.jpg",
      "/trabajo2/ct2.jpg",
      "/trabajo2/ct3.jpg",
      "/trabajo2/ct4.jpg",
      "/trabajo2/ct5.jpg",
      "/trabajo2/ct6.jpg",
      "/trabajo2/ct7.jpg",
    ]
  },
  {
    id: 5,
    title: "El Guggenheim",
    date: "22 de Enero, 2026",
    description: "Esta serie fotográfica se aproxima al Guggenheim Bilbao desde una mirada contemporánea con tendencia a la arquitectura, explorando la relación entre forma, escala y materia. A través de encuadres precisos, fragmentación de espacios y relación con el individuo, las imagenes se alejan de la vista icónica para mostrar la estructura, luz y experiencia. Proponiendo una lectura más íntima y reflexiva del edificio. ",
    location: "Bilbao",
    coverImage: "/trabajo5/G4.jpg",
    photos: [
      "/trabajo5/G1.jpg",
      "/trabajo5/G2.jpg",
      "/trabajo5/G3.jpg",
      "/trabajo5/G4.jpg",
      "/trabajo5/G5.jpg",
      "/trabajo5/G6.jpg",
      "/trabajo5/G7.jpg",
    ]
  },  
  {
    id: 6,
    title: "Brisa de Encanto",
    date: "06 de Febrero, 2026",
    description: "Esta serie fotográfica se aproxima al Guggenheim Bilbao desde una mirada contemporánea con tendencia a la arquitectura, explorando la relación entre forma, escala y materia. A través de encuadres precisos, fragmentación de espacios y relación con el individuo, las imagenes se alejan de la vista icónica para mostrar la estructura, luz y experiencia. Proponiendo una lectura más íntima y reflexiva del edificio. ",
    location: "Alicante, Busot",
    coverImage: "/trabajo6/f4.jpg",
    photos: [
      "/trabajo6/f1.jpg",
      "/trabajo6/f2.jpg",
      "/trabajo6/f3.jpg",
      "/trabajo6/f4.jpg",
      "/trabajo6/f5.jpg",
      "/trabajo6/f6.jpg",
      "/trabajo6/f7.jpg",
      "/trabajo6/f8.jpg",
      "/trabajo6/f9.jpg",
      "/trabajo6/f10.jpg",
      "/trabajo6/f11.jpg",
      "/trabajo6/f12.jpg",
      "/trabajo6/f13.jpg",
      "/trabajo6/f14.jpg",
      "/trabajo6/f15.jpg",
      "/trabajo6/f16.jpg",
      "/trabajo6/f17.jpg",
      "/trabajo6/f18.jpg",
    ]
  },
];