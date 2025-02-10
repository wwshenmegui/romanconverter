import { render, screen } from '@testing-library/react';
import DisplayField from '../../src/components/DisplayField';

test('renders DisplayField with a Roman numeral', () => {
    render(<DisplayField romanNumeral="X" />);
    expect(screen.getByText("Roman numeral: X")).toBeInTheDocument();
});

test('renders DisplayField with default message when no numeral is provided', () => {
    render(<DisplayField romanNumeral="" />);
    expect(screen.getByText(/no result yet/i)).toBeInTheDocument();
});
