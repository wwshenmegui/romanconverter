import React from 'react';
import { Button, useProvider } from '@adobe/react-spectrum';

const ConvertButton = ({ onClick }) => {
    const { colorScheme } = useProvider();

    return (
        <Button
            onPress={onClick}
            width="size-2400"
            UNSAFE_className={`convert-button-${colorScheme}`} // Adds custom class for theming
        >
            Convert
        </Button>
    );
};

export default ConvertButton;
