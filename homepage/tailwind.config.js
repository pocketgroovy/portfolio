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
				name: ['"Pacifico"', ...defaultConfig.theme.fontFamily.sans],
				other: ['"Reem Kufi Fun"', ...defaultConfig.theme.fontFamily.serif],
				aboutme: ['"Luckiest Guy"', ...defaultConfig.theme.fontFamily.serif],
			}

			
		  }
	},
	experimental: { optimizeUniversalDefaults: true },
	plugins: [formsPlugin]
}
module.exports = config
