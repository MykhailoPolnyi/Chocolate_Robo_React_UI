import { render, screen } from '@testing-library/react';
import MainWindow from './MainWindow';

test('renders learn react link', () => {
  render(<MainWindow />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
