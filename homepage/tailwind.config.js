const defaultConfig = require('tailwindcss/defaultConfig')
const formsPlugin = require('@tailwindcss/forms')

/** @type {import('tailwindcss/types').Config} */
const config = {
	content: ['index.html', 'src/**/*.tsx'],
	theme: {
		fontFamily: {
			sans: ['ui-sans-serif', ...defaultConfig.theme.fontFamily.sans],
			serif: ['Merriweather', ...defaultConfig.theme.fontFamily.serif],
			mono: ['ui-monospace', ...defaultConfig.theme.fontFamily.mono],
		},
		extend: {
			fontFamily: {
				pacifico: ['"Pacifico"', ...defaultConfig.theme.fontFamily.sans],
				luckiest: ['"Luckiest Guy"', ...defaultConfig.theme.fontFamily.serif],
				micro5charted: ['"Micro 5 Charted"', ...defaultConfig.theme.fontFamily.mono],
				bebas: ['"Bebas Neue"', ...defaultConfig.theme.fontFamily.sans],
				braah: ['"Braah One"', ...defaultConfig.theme.fontFamily.mono],
				jerseycharted: ['"Jersey 10 Charted"', ...defaultConfig.theme.fontFamily.mono],
				ubuntu:  ['"Ubuntu"', ...defaultConfig.theme.fontFamily.sans],				
			},
			backgroundImage:{
				'bamboo-pattern': "url('./media/images/bamboo-raft.jpg')"
			}

		  }
	},
	experimental: { optimizeUniversalDefaults: true },
	plugins: [formsPlugin]
}
module.exports = config
