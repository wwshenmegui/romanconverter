import { render, screen, fireEvent } from '@testing-library/react';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import ConvertButton from '../../src/components/ConvertButton';

test('renders ConvertButton and triggers onClick when pressed', () => {
    const mockOnClick = jest.fn();
    render(
            <Provider theme={defaultTheme}>
                <ConvertButton onClick={mockOnClick} />
            </Provider>
        );

    const button = screen.getByRole('button', { name: /convert/i });
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
});
