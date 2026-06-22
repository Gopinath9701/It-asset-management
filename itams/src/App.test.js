import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ITAMS homepage content', () => {
  render(<App />);

  expect(screen.getByText(/ITAMS/i)).toBeInTheDocument();
  expect(
    screen.getByText(/IT Asset Management System/i)
  ).toBeInTheDocument();
  expect(
    screen.getAllByRole('button', { name: /login/i }).length
  ).toBeGreaterThan(0);
});