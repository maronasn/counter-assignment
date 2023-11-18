// import necessary react testing library helpers here
// import the Counter component here
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
    render(<Counter />)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
    const counterMessage = screen.getByText(/Counter/i);
    expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
    const initVal = screen.getByText(/0/i);
    expect(initVal).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
    userEvent.click(screen.getByText('+', {exact: false}));
    expect(screen.getByText(/1/i)).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
    userEvent.click(screen.getByText('-', { exact: false }));
    expect(screen.getByText(/-1/i)).toBeInTheDocument();
});