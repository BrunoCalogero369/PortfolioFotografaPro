import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from './Navbar';
import { ReactNode, ComponentPropsWithoutRef } from 'react';


// Tipamos los mocks de Framer Motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: ComponentPropsWithoutRef<'div'>) => (
      <div {...props}>{children}</div>
    ),
  },
  AnimatePresence: ({ children }: { children: ReactNode }) => <>{children}</>,
}));

describe('Navbar e Integración con AboutModal', () => {
  
  it('debe mostrar el logo del sitio "Mi Espacio"', () => {
    render(<Navbar />);
    const brandName = screen.getByText(/Mi Espacio/i);
    expect(brandName).toBeInTheDocument();
  });

  it('debe mostrar el botón "Sobre mí" en la navegación', () => {
    render(<Navbar />);
    const aboutButton = screen.getByText(/Sobre mí/i);
    expect(aboutButton).toBeInTheDocument();
  });

  it('debe abrir el modal y mostrar la biografía al hacer clic en "Sobre mí"', () => {
    render(<Navbar />);
    
    // 1. Buscamos el botón del Navbar y clickeamos
    const aboutButton = screen.getByText(/Sobre mí/i);
    fireEvent.click(aboutButton);
    
    // 2. Verificamos que el título "Sobre mí" del Modal (el h2) aparezca
    const modalTitle = screen.getByRole('heading', { name: /Sobre mí/i, level: 2 });
    expect(modalTitle).toBeInTheDocument();

    // 3. Verificamos que el texto biográfico específico de Florencia esté presente
    const bioText = screen.getByText(/Florencia Salvatierra es fotógrafa/i);
    expect(bioText).toBeInTheDocument();
  });
});