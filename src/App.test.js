import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app top bar', () => {
  render(<App />);
  const titleElement = screen.getByText(/Photo Sharing App/i);
  expect(titleElement).toBeInTheDocument();
});
