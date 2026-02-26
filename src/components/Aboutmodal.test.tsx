import { render, screen, fireEvent } from '@testing-library/react';
import { AboutModal } from './Aboutmodal';
import '@testing-library/jest-dom';
import React from 'react';

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

describe('Componente AboutModal', () => {
  const mockOnClose = jest.fn();

  test('no debe renderizar nada si isOpen es false', () => {
    const { container } = render(<AboutModal isOpen={false} onClose={mockOnClose} />);
    expect(container.firstChild).toBeNull();
  });

  test('debe mostrar la biografía cuando isOpen es true', () => {
    render(<AboutModal isOpen={true} onClose={mockOnClose} />);
    
    // Verificamos el título y parte del texto biográfico
    expect(screen.getByText(/Sobre mí/i)).toBeInTheDocument();
    expect(screen.getByText(/Florencia Salvatierra es fotógrafa/i)).toBeInTheDocument();
  });

  test('debe llamar a onClose al hacer clic en el botón de cerrar', () => {
    render(<AboutModal isOpen={true} onClose={mockOnClose} />);
    
    // Buscamos el botón (es el único en este modal que tiene el ícono X de Lucide)
    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);
    
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});