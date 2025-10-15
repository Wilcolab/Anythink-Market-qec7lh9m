function toSnakeCase(text) {
    return text
        .replace(/([a-z])([A-Z])/g, '$1_$2') // Handle camelCase
        .replace(/[\s\-]+/g, '_')            // Replace spaces and hyphens with underscores
        .replace(/__+/g, '_')                // Replace multiple underscores with single
        .toLowerCase()
        .replace(/^_+|_+$/g, '');            // Trim leading/trailing underscores
}

// Example usage:
// console.log(toSnakeCase('Hello World-ExampleText')); // "hello_world_example_text"