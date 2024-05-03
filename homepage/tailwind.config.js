import { theme as _theme } from 'tailwindcss/defaultConfig'
import formsPlugin from '@tailwindcss/forms'

/** @type {import('tailwindcss/types').Config} */
const config = {
	content: ['index.html', 'src/**/*.tsx'],
	theme: {
		fontFamily: {
			sans: ['ui-sans-serif', ..._theme.fontFamily.sans],
			serif: ['Merriweather', ..._theme.fontFamily.serif],
			mono: ['ui-monospace', ..._theme.fontFamily.mono],
		},
		extend: {
			fontFamily: {
				pacifico: ['"Pacifico"', ..._theme.fontFamily.sans],
				luckiest: ['"Luckiest Guy"', ..._theme.fontFamily.serif],
				micro5charted: ['"Micro 5 Charted"', ..._theme.fontFamily.mono],
				bebas: ['"Bebas Neue"', ..._theme.fontFamily.sans],
				braah: ['"Braah One"', ..._theme.fontFamily.mono],
				jerseycharted: ['"Jersey 10 Charted"', ..._theme.fontFamily.mono],
				ubuntu: ['"Ubuntu"', ..._theme.fontFamily.sans],
				comfortaa: ['"Comfortaa"', ..._theme.fontFamily.serif],
				jersey25: ['"Jersey 25"', ..._theme.fontFamily.serif],
			},
			backgroundImage: {
				'bamboo-pattern': "url('./media/images/bamboo-raft.jpg')"
			},
			textShadow: {
				sm: '0 1px 2px var(--tw-shadow-color)',
				DEFAULT: '0 2px 4px var(--tw-shadow-color)',
				lg: '0 8px 16px var(--tw-shadow-color)',
			}
		}
	},
	experimental: { optimizeUniversalDefaults: true },
	plugins: [formsPlugin]
}
export default config
