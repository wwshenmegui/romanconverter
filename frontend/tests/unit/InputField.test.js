import { render, screen, fireEvent } from '@testing-library/react';
import InputField from '../../src/components/InputField';

test('renders InputField with initial value and calls onChange', () => {
    const mockOnChange = jest.fn();
    render(<InputField value="123" onChange={mockOnChange} />);

    const input = screen.getByLabelText(/enter an integer/i);
    expect(input.value).toBe("123");

    fireEvent.change(input, { target: { value: '456' } });
    expect(mockOnChange).toHaveBeenCalledWith('456');
});
