export interface Project {
  id: number;
  title: string;
  date: string;
  location: string;
  coverImage: string;
  photos: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Tagliaferro",
    date: "26 de Octubre, 2025",
    location: "En Casa",
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
    title: "NeoDoc",
    date: "02 de Julio, 2025",
    location: "Estudio Profesional",
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
    title: "Retrato Comercial",
    date: "10 de Febrero, 2025",
    location: "Estudio Profesional",
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
];