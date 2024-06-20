// __tests__/ModalButton.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import ModalButton from '../ModalButton'; // Adjust the import path as necessary
import ToolListMainPage from 'modal/ToolListMainPage';

describe('<ModalButton />', () => {
    it('renders the button correctly', () => {
        render(<ModalButton><ToolListMainPage /></ModalButton>);
        const button = screen.getByAltText('info button').closest('button');
        expect(button).toBeInTheDocument();
    });

    it('opens the modal when button is clicked', () => {
        render(<ModalButton><ToolListMainPage /></ModalButton>);
        const button = screen.getByAltText('info button').closest('button');
        expect(button).not.toBeNull(); // Ensure button is found
        
        // Simulate button click
        fireEvent.click(button!); // Non-null assertion

        // Check if modal content is visible
        const modalContent = screen.getByText('Main Tools Used To Make This Website');
        expect(modalContent).toBeInTheDocument();
    });

    it('closes the modal when button is clicked again', () => {
        render(<ModalButton><ToolListMainPage /></ModalButton>);
        // Check if modal content is visible
        const modalContent = screen.getByText('Main Tools Used To Make This Website');
        // Simulate button click to close modal
        const closeButton = screen.getByText('Close').closest('button');
        fireEvent.click(closeButton!); // Non-null assertion

        // Check if modal content is not visible
        expect(modalContent).not.toBeVisible();
    });
});
