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
				grenze: ["Grenze", "'Grenze'", ...defaultTheme.fontFamily.serif],
				gotisch: ["Grenze Gotisch", "'Grenze Gotisch'", "Grenze", "'Grenze'", ...defaultTheme.fontFamily.serif]
			},
			typography: {
				DEFAULT: {
					css: {
						fontFamily: ["Grenze", "'Grenze'", ...defaultTheme.fontFamily.serif],
						fontWeight: 400
					}
				}
			}
		}
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
