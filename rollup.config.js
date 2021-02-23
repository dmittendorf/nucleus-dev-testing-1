export default [
    {
        input: './packages/@nucleus-oss-testing/kiwi/src/index.js',
        output: {
            file: './build/@nucleus-oss-testing/kiwi/index.js',
            format: 'iife',
        }
    },
    {
        input: './packages/@nucleus-oss-testing/lemon/src/index.js',
        output: {
            file: './build/@nucleus-oss-testing/lemon/index.js',
            format: 'iife',
        }
    },
    {
        input: './packages/nucleus-oss-testing-banana/src/index.js',
        output: {
            file: './build/@nucleus-oss-testing-banana/index.js',
            format: 'iife',
        }
    },
]