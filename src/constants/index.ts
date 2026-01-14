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
    title: "Tagliagerro",
    date: "26 de Octubre, 2025",
    location: "En Casa",
    coverImage: "/trabajo1/pic5.jpg",
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
    title: "Boda en el Bosque",
    date: "10 de Enero, 2026",
    location: "Estancia La Paz",
    coverImage: "/foto2.jpg",
    photos: [
      "/foto1.jpg",
      "/foto2.jpg",
      "/foto3.jpg",
      "/foto1.jpg",
      "/foto2.jpg",
      "/foto3.jpg",
    ]
  },
  {
    id: 3,
    title: "Boda en el Bosque",
    date: "10 de Enero, 2026",
    location: "Estancia La Paz",
    coverImage: "/foto3.jpg",
    photos: [
      "/foto1.jpg",
      "/foto2.jpg",
      "/foto3.jpg",
      "/foto1.jpg",
      "/foto2.jpg",
      "/foto3.jpg",
    ]
  },
  
];