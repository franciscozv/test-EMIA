import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('debe renderizar el título', () => {
    render(<App />);
    expect(screen.getByText(/Mis Tareas/i)).toBeDefined();
  });

  it('debe tener un input para agregar tareas', () => {
    render(<App />);
    expect(screen.getByPlaceholderText(/Nueva tarea/i)).toBeDefined();
  });

  it('debe tener un botón agregar', () => {
    render(<App />);
    expect(screen.getByText('Agregar')).toBeDefined();
  });
});