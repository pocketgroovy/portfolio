// __tests__/ModalButton.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Typewriter from '../Typewriter';
import { MemoryRouter } from 'react-router-dom';

describe('<Typewriter />', () => {
    it('renders the Typewriter correctly', () => {
        render(
            <Typewriter typingText={'test'} typingSpeed={100} textStyle={'font-jerseycharted text-3xl text-indigo-900 leading-normal text-center break-normal col-span-2'}  />
        );
		expect(screen.getByTestId('typing')).toBeInTheDocument()
    });
});