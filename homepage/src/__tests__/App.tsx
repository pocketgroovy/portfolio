import { screen } from '@testing-library/react'
import App from '../App'
import renderWithProviders from 'testUtils'

describe('<App />', () => {
	it('renders', async () => {
		window.history.pushState({}, 'Home', '/')
		renderWithProviders(<App />, false)

		await expect(screen.findByText('About Me')).resolves.toBeInTheDocument()
		await expect(screen.findByText('welcome!!')).resolves.toBeInTheDocument()
		await expect(screen.findByText('I am Yoshi Miyamoto')).resolves.toBeInTheDocument()
		await expect(screen.findByText('Application Developer / Backend / Infra Engineer')).resolves.toBeInTheDocument()

	})
})