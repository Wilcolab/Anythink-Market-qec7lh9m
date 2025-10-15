/**
 * Converts a given string to camelCase format.
 *
 * - Non-alphanumeric characters are replaced with spaces.
 * - Words are split by spaces.
 * - The first word is lowercased, subsequent words are capitalized.
 * - Empty strings or strings with only non-alphanumeric characters return an empty string.
 *
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} The camelCase formatted string.
 * @throws {Error} Throws if the input is not a string.
 *
 * @example
 * camelCase('hello-world'); // returns 'helloWorld'
 * camelCase('  multiple   spaces__and--symbols!!'); // returns 'multipleSpacesAndSymbols'
 * camelCase(123); // throws Error
 */

/**
 * Converts a given string to dot.case format.
 *
 * - Non-alphanumeric characters are replaced with spaces.
 * - Words are split by spaces.
 * - All words are lowercased and joined by dots.
 * - Empty strings or strings with only non-alphanumeric characters return an empty string.
 *
 * @param {string} input - The string to convert to dot.case.
 * @returns {string} The dot.case formatted string.
 * @throws {Error} Throws if the input is not a string.
 *
 * @example
 * dotCase('hello-world'); // returns 'hello.world'
 * dotCase('  multiple   spaces__and--symbols!!'); // returns 'multiple.spaces.and.symbols'
 * dotCase(123); // throws Error
 */
function camelCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Replace all non-alphanumeric characters with spaces
    const cleaned = input.replace(/[^a-zA-Z0-9]+/g, ' ');

    // Split by spaces, filter out empty strings
    const words = cleaned.trim().split(/\s+/).filter(Boolean);

    if (words.length === 0) return '';

    // Lowercase the first word, capitalize the rest
    return words[0].toLowerCase() +
        words.slice(1).map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join('');
}

// Example usage:
// console.log(camelCase('hello-world')); // 'helloWorld'
// console.log(camelCase('  multiple   spaces__and--symbols!!')); // 'multipleSpacesAndSymbols'
// camelCase(123); // throws Error
function dotCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Replace all non-alphanumeric characters with spaces
    const cleaned = input.replace(/[^a-zA-Z0-9]+/g, ' ');

    // Split by spaces, filter out empty strings, lowercase all words
    const words = cleaned.trim().split(/\s+/).filter(Boolean).map(word => word.toLowerCase());

    return words.join('.');
}

// Example usage:
// console.log(dotCase('hello-world')); // 'hello.world'
// console.log(dotCase('  multiple   spaces__and--symbols!!')); // 'multiple.spaces.and.symbols'
// dotCase(123); // throws Error

