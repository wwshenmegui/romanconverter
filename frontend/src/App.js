import React, { useState, useEffect } from 'react';
import { Provider, defaultTheme, View, Flex, Heading } from '@adobe/react-spectrum';
import InputField from './components/InputField';
import ConvertButton from './components/ConvertButton';
import DisplayField from './components/DisplayField';

const RomanConverterApp = () => {
    const [inputValue, setInputValue] = useState("");
    const [romanNumeral, setRomanNumeral] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Detect system theme preference
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setIsDarkMode(mediaQuery.matches);

        const handleChange = (e) => setIsDarkMode(e.matches);
        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    const convertToRoman = async () => {
        if (!inputValue || isNaN(inputValue)) {
            setRomanNumeral("Please enter a valid integer.");
            return;
        }

        try {
            const response = await fetch(`http://localhost:8080/romannumeral?query=${inputValue}`);
            const data = await response.json();

            if (response.ok) {
                setRomanNumeral(data["output"]);
            } else {
                setRomanNumeral(data.error || "Error converting number.");
            }
        } catch (error) {
            setRomanNumeral("Failed to fetch Roman numeral.");
        }
    };

    return (
        <Provider theme={defaultTheme} colorScheme={isDarkMode ? "dark" : "light"}>
            <View padding="size-200" height="100vh" backgroundColor={isDarkMode ? "dark" : "light"} data-testid="theme-container">
                <Flex direction="column" alignItems="center" gap="size-200">
                    <Heading level={1}>Roman Numeral Converter</Heading>

                    <InputField value={inputValue} onChange={setInputValue} />

                    <ConvertButton onClick={convertToRoman} />

                    <DisplayField romanNumeral={romanNumeral} />
                </Flex>
            </View>
        </Provider>
    );
};

export default RomanConverterApp;