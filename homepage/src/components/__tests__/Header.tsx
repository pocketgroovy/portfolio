// __tests__/ModalButton.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';
import { MemoryRouter } from 'react-router-dom';


describe('<Header />', () => {
    it('renders the header correctly', () => {
        render(
            <MemoryRouter>
            <Header />
            </MemoryRouter>
        );
		expect(screen.getByText('welcome!!')).toBeInTheDocument()
		expect(screen.getByText('I am Yoshi Miyamoto')).toBeInTheDocument()
		expect(screen.getByText('Application Developer / Backend / Infra Engineer')).toBeInTheDocument()
    });
});
