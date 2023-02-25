/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			boxShadow: {
				c1: '0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2)',
				c2: '0 1px 6px rgba(0, 0, 0, 0.2)',
				c3: '0 2px 6px rgba(0, 0, 0, 0.2)',
			},
			backgroundImage: {
				c1: 'linear-gradient(to bottom left,  #008b79, #1180a1)',
			},
		},
	},
	plugins: [],
};
