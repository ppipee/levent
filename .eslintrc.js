module.exports = {
    extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {},
        },
    },
    rules: {
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/no-extraneous-dependencies': [2, { devDependencies: ['**/test.tsx', '**/test.ts'] }],
        '@typescript-eslint/indent': [2, 4],
        // 'object-property-newline': [2, 'never'],
        // 'function-call-argument-newline': [2, 'never'],
        'arrow-parens': [2, 'as-needed'],
        'function-paren-newline': ["error", "never"] 
        'max-len': [1, 50, 2], // comment len,

    },
}