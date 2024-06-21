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
        const modalContent = screen.getByTestId('modal-display');
        expect(modalContent).toHaveClass('modal display-block');
    });

    it('closes the modal when button is clicked again', () => {
        render(<ModalButton><ToolListMainPage /></ModalButton>);
        // Check if modal content is visible
        // Simulate button click to open modal
        const button = screen.getByAltText('info button').closest('button');
        expect(button).not.toBeNull(); // Ensure button is found
        fireEvent.click(button!); // Non-null assertion

        // Check if modal content is visible
        const modalContent = screen.getByTestId('modal-display');
        expect(modalContent).toHaveClass('modal display-block');

        // close the modal
        fireEvent.click(button!); // Non-null assertion

        // Check if modal content is not visible
        expect(modalContent).toHaveClass('display-none');
    });

    it('contains tool list', () => {
        render(<ModalButton><ToolListMainPage /></ModalButton>);

        const toollist = screen.getByTestId('tool-list');

        // Check if tool list  
        expect(toollist).toBeInTheDocument();
    });
});
