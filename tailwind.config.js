const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './resources/ts/**/*.tsx',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
