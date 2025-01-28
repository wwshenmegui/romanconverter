import React from 'react';
import { View, Text } from '@adobe/react-spectrum';

const DisplayField = ({ romanNumeral }) => {
    return (
        <View marginTop="size-200" padding="size-200" borderWidth="thin" borderColor="dark">
            {romanNumeral ? (
                <Text>{romanNumeral}</Text>
            ) : (
                <Text>No result yet. Enter a number and click convert.</Text>
            )}
        </View>
    );
};

export default DisplayField;