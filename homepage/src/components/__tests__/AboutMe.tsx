// __tests__/ModalButton.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import AboutMe from '../AboutMe';
import { MemoryRouter } from 'react-router-dom';

describe('<AboutMe />', () => {
    it('renders the button correctly', () => {
        render(
            <MemoryRouter>
                <AboutMe />
            </MemoryRouter>
        );
        const button = screen.getByAltText('about me').closest('button');
        expect(button).toBeInTheDocument();
    });
});
