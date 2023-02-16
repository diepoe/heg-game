const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			blur: {
				xs: '2px',
			},
			colors: {
				primary: colors.blue
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
