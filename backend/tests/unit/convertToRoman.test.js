const { integerToRoman } = require('@services/romanService');

describe('integerToRoman', () => {
    test('converts 1 to "I"', () => {
        expect(integerToRoman(1)).toBe('I');
    });

    test('converts 4 to "IV"', () => {
        expect(integerToRoman(4)).toBe('IV');
    });

    test('converts 9 to "IX"', () => {
        expect(integerToRoman(9)).toBe('IX');
    });

    test('converts 58 to "LVIII"', () => {
        expect(integerToRoman(58)).toBe('LVIII');
    });

    test('converts 1994 to "MCMXCIV"', () => {
        expect(integerToRoman(1994)).toBe('MCMXCIV');
    });

    test('converts 3999 to "MMMCMXCIX"', () => {
        expect(integerToRoman(3999)).toBe('MMMCMXCIX');
    });

    test('returns an empty string for 0', () => {
        expect(integerToRoman(0)).toBe('');
    });

    test('handles invalid inputs gracefully', () => {
        expect(integerToRoman(-1)).toBe('');
        expect(integerToRoman(NaN)).toBe('');
    });
});
