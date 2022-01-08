import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/header/Header';
import Home from './pages/Home';

test('renders learn react link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/lbem vindo/i);
  expect(linkElement).toBeInTheDocument();
});
