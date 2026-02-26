import { render, screen, fireEvent } from '@testing-library/react';
import { Portfolio } from './Portfolio';
import '@testing-library/jest-dom';
import React from 'react';

// Tipamos las props de los mocks para evitar el 'any'
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

describe('Componente Portfolio e Integración de Galería', () => {
  test('debe renderizar el título de la sección', () => {
    render(<Portfolio />);
    expect(screen.getByText(/Portfolio/i)).toBeInTheDocument();
  });

  test('debe abrir el modal de galería al hacer clic en el botón de una ProjectCard', () => {
    render(<Portfolio />);
    
    // 1. Buscamos todos los botones de las tarjetas
    const viewButtons = screen.getAllByText(/Ver todas las fotos/i);
    
    // 2. Hacemos clic en el primero para abrir el modal
    fireEvent.click(viewButtons[0]);

    // 3. Verificamos que el modal esté abierto buscando el título del proyecto
    // Usamos una Regex para que matchee con cualquiera de tus proyectos iniciales
    const modalTitle = screen.getByRole('heading', { 
      level: 2, 
      name: /Tagliaferro|NeoDoc|Luz Natural|Retrato Urbano/i 
    });
    expect(modalTitle).toBeInTheDocument();

    // 4. Verificamos que exista el botón de cerrar (el que no tiene el texto de las cards)
    const buttons = screen.getAllByRole('button');
    const closeButton = buttons.find(btn => !btn.textContent?.includes('Ver todas las fotos'));
    expect(closeButton).toBeInTheDocument();
  });
});