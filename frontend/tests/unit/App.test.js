import { render, screen, fireEvent } from '@testing-library/react';
import RomanConverterApp from '../../src/App';

test('renders RomanConverterApp and handles conversion', async () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ "output": 'X' }),
        })
    );

    render(<RomanConverterApp />);

    const input = screen.getByLabelText(/enter an integer/i);
    const button = screen.getByRole('button', { name: /convert/i });

    fireEvent.change(input, { target: { value: '10' } });
    fireEvent.click(button);

    const result = await screen.findByText("Roman numeral: X");
    expect(result).toBeInTheDocument();

    global.fetch.mockRestore();
});
