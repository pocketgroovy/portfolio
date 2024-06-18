// App.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import '@testing-library/jest-dom';

jest.mock('pages/Projects', () => () => <div>Projects Page</div>);
jest.mock('pages/ProjectDetails', () => () => <div>Project Details Page</div>);
jest.mock('pages/InfoAboutMe', () => () => <div>Info About Me Page</div>);
jest.mock('pages/Experience', () => () => <div>Experience Page</div>);
jest.mock('pages/Contacts', () => () => <div>Contacts Page</div>);
jest.mock('components/Header', () => () => <div>Header Component</div>);
jest.mock('components/LoadingOrError', () => () => <div>Loading...</div>);

describe('App component', () => {
  test('renders without crashing', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    // Check if Header is rendered
    expect(screen.getByText('Header Component')).toBeInTheDocument();
    // Check if Projects Page is rendered on the default route
    expect(screen.getByText('Projects Page')).toBeInTheDocument();
  });

  test('renders Loading component while loading routes', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
