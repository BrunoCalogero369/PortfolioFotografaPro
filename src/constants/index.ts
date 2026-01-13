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
    title: "Boda en el Bosque",
    date: "10 de Enero, 2026",
    location: "Estancia La Paz",
    coverImage: "/foto1.jpg",
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