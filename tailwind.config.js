module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				body: ['Poppins', 'Raleway', 'Sacramento', 'Work Sans'],
			},
			keyframes: {
				'fade-in-down': {
					'0%': {
						opacity: '0',
						transform:
							'translateX(300px) translateY(300px) rotateY(75deg) rotateX(90deg)',
					},
					'100%': {
						transform: 'transform:rotateY(0deg) rotateX(0deg) translateX(0px)',
					},
				},
			},
			animation: {
				'fade-in-down': 'fade-in-down 1.5s ease-out',
			},
		},
		variants: {
			extend: {},
		},
		plugins: [],
	},
};
