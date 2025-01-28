import { render, screen, fireEvent } from '@testing-library/react';
import RomanConverterApp from '../../src/App';

test('integration test for Roman numeral conversion', async () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ roman: 'XV' }),
        })
    );

    render(<RomanConverterApp />);

    // Input a number
    const input = screen.getByLabelText(/enter an integer/i);
    fireEvent.change(input, { target: { value: '15' } });

    // Click the convert button
    const button = screen.getByRole('button', { name: /convert/i });
    fireEvent.click(button);

    // Verify the output
    const result = await screen.findByText("XV");
    expect(result).toBeInTheDocument();

    global.fetch.mockRestore();
});

test('displays error message for invalid input', async () => {
    render(<RomanConverterApp />);

    const button = screen.getByRole('button', { name: /convert/i });
    fireEvent.click(button);

    const error = screen.getByText(/please enter a valid integer/i);
    expect(error).toBeInTheDocument();
});
