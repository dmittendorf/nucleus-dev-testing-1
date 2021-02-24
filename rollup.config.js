export default [
    {
        input: './packages/@nucleus-oss-testing/kiwi/src/index.js',
        output: {
            file: './build/nucleusTesting/kiwi/index.js',
            format: 'iife',
        }
    },
    {
        input: './packages/@nucleus-oss-testing/lemon/src/index.js',
        output: {
            file: './build/nucleusTesting/lemon/index.js',
            format: 'iife',
        }
    },
    {
        input: './packages/nucleus-oss-testing-banana/src/index.js',
        output: {
            file: './build/nucleusTesting/banana/index.js',
            format: 'iife',
        }
    },
]