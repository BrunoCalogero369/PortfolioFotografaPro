import { render, screen, fireEvent } from '@testing-library/react';
import { GalleryModal } from './GalleryModal';
import { Project } from '@/constants';
import '@testing-library/jest-dom';
import React from 'react';

// Tipado para los mocks
interface MockProps {
  children: React.ReactNode;
}

// Mock de framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: MockProps) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: MockProps) => <>{children}</>,
}));

// Datos de prueba (Mock Data)
const mockProject: Project = {
  id: 333,
  title: 'Proyecto de Prueba',
  location: 'Alicante',
  date: '2025',
  coverImage: '/test-cover.jpg',
  photos: ['/photo1.jpg', '/photo2.jpg', '/photo3.jpg']
};

describe('Componente GalleryModal', () => {
  const mockOnClose = jest.fn();

  test('no debe renderizar nada si project es null', () => {
    const { container } = render(<GalleryModal project={null} onClose={mockOnClose} />);
    expect(container.firstChild).toBeNull();
  });

  test('debe mostrar el título y la ubicación del proyecto', () => {
    render(<GalleryModal project={mockProject} onClose={mockOnClose} />);
    
    expect(screen.getByText(mockProject.title)).toBeInTheDocument();
    expect(screen.getByText(mockProject.location)).toBeInTheDocument();
  });

  test('debe renderizar la cantidad correcta de imágenes', () => {
    render(<GalleryModal project={mockProject} onClose={mockOnClose} />);
    
    // Buscamos todas las imágenes por su rol
    // Nota: Next/Image renderiza una etiqueta <img>
    const images = screen.getAllByRole('img');
    
    // Debería haber 3 fotos (según nuestro mockProject)
    expect(images).toHaveLength(mockProject.photos.length);
  });

  test('debe llamar a onClose al presionar el botón de cerrar', () => {
    render(<GalleryModal project={mockProject} onClose={mockOnClose} />);
    
    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);
    
    expect(mockOnClose).toHaveBeenCalled();
  });
});