import { render, screen } from '@testing-library/react';
import App from './App';
import reactDom from 'react-dom';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});
