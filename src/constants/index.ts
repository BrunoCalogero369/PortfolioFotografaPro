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
    coverImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000",
    photos: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000",
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000",
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000",
    ]
  },
  {
    id: 2,
    title: "Boda en el Bosque",
    date: "10 de Enero, 2026",
    location: "Estancia La Paz",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000",
    photos: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000",
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000",
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000",
    ]
  },
  {
    id: 3,
    title: "Boda en el Bosque",
    date: "10 de Enero, 2026",
    location: "Estancia La Paz",
    coverImage: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000",
    photos: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000",
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000",
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000",
    ]
  },
  
];