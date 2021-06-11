import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders the heading of the app', () => {
  render(<App />);
  const headingElement = screen.getByText('CGPA Calculator');
  expect(headingElement).toBeInTheDocument();
});
