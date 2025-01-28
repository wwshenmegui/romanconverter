import React from 'react';
import { TextField } from '@adobe/react-spectrum';

const InputField = ({ value, onChange }) => {
    return (
        <TextField
            label="Enter an integer"
            value={value}
            onChange={onChange}
            width="size-3600"
        />
    );
};

export default InputField;