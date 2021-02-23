export default [
    {
        input: './packages/@nucleus-integration/kiwi/src/index.js',
        output: {
            file: './build/@nucleus-integration/kiwi/index.js',
            format: 'iife',
        }
    },
    {
        input: './packages/@nucleus-integration/lemon/src/index.js',
        output: {
            file: './build/@nucleus-integration/lemon/index.js',
            format: 'iife',
        }
    },
    {
        input: './packages/nucleus-integration-banana/src/index.js',
        output: {
            file: './build/@nucleus-integration-banana/index.js',
            format: 'iife',
        }
    },
]