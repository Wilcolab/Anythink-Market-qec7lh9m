function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Remove special characters except spaces and alphanumerics
    let cleaned = input.replace(/[^a-zA-Z0-9 ]+/g, ' ');

    // Replace multiple spaces with a single space and trim
    cleaned = cleaned.replace(/\s+/g, ' ').trim();

    // Split by space
    const words = cleaned.split(' ');

    // Filter out empty strings (in case input was only special chars)
    const filteredWords = words.filter(Boolean);

    // Join with dash and convert to lowercase
    return filteredWords.join('-').toLowerCase();
}

// Example usage:
// console.log(toKebabCase('hello.world')); // 'hello-world'
// console.log(toKebabCase(123)); // Throws error