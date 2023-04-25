const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'map': "url('/map/map.jpeg')"
			},
			blur: {
				xs: '2px',
			},
			colors: {
				primary: colors.stone
			},
			fontFamily: {
				grenze: ["Grenze", "'Grenze'", ...defaultTheme.fontFamily.serif]
			},
		}
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
