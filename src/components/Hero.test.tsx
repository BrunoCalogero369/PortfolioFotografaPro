import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';
import '@testing-library/jest-dom';

describe('Componente Hero', () => {
  test('debe renderizar el nombre de la fotógrafa correctamente', () => {
    render(<Hero />);
    
    // Buscamos el H1. Uso Regex para que sea flexible con las mayúsculas.
    const nameElement = screen.getByRole('heading', { level: 1, name: /FLORENCIA SALVATIERRA/i });
    expect(nameElement).toBeInTheDocument();
  });

  test('debe mostrar la descripción del servicio', () => {
    render(<Hero />);
    expect(screen.getByText(/Fotografía Profesional/i)).toBeInTheDocument();
  });

  test('el botón "Ver Trabajos" debe tener el enlace correcto a la sección de portfolio', () => {
    render(<Hero />);
    
    // Buscamos el enlace por su texto
    const ctaButton = screen.getByRole('link', { name: /Ver Trabajos/i });
    
    // Verificamos que el href sea exactamente #portfolio
    expect(ctaButton).toHaveAttribute('href', '#portfolio');
  });

  test('debe renderizar la imagen de fondo con el alt correcto', () => {
    render(<Hero />);
    
    // Verificamos que la imagen de fondo esté presente
    const bgImage = screen.getByAltText(/Fotografía Portfolio/i);
    expect(bgImage).toBeInTheDocument();
  });
});