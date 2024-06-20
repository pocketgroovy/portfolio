import { screen } from '@testing-library/react'
import Projects from 'pages/Projects'
import renderWithProviders, {
	MOBILE_RESOLUTION_HEIGHT,
	MOBILE_RESOLUTION_WIDTH
} from 'testUtils'

describe('<Projects />', () => {
	it('renders', async () => {
		renderWithProviders(<Projects />)

		await expect(
			screen.findByRole('img', { name: 'My Portfolio' })
		).resolves.toHaveAttribute('loading', 'eager')
		expect(screen.getByText('Banana')).toBeInTheDocument()
	})
	it('renders with mobile resolution', async () => {
		window.resizeTo(MOBILE_RESOLUTION_WIDTH, MOBILE_RESOLUTION_HEIGHT)
		renderWithProviders(<Projects />)

		await expect(
			screen.findByRole('img', { name: 'Grape' })
		).resolves.toHaveAttribute('loading', 'lazy')
	})
})
