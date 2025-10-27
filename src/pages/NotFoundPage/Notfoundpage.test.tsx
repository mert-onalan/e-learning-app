import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import NotFoundPage from './NotFoundPage';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('NotFoundPage', () => {
    it('renders the 404 error message and illustration', () => {
        render(
            <MemoryRouter>
                <NotFoundPage />
            </MemoryRouter>
        );

        expect(screen.getByRole('heading', { name: /oops!/i })).toBeInTheDocument();
        expect(screen.getByText(/we couldn.t find the page you were looking for/i)).toBeInTheDocument();
        expect(screen.getByAltText(/illustration showing 404 error/i)).toBeInTheDocument();
    });

    it('displays a button to return to the main page', () => {
        render(
            <MemoryRouter>
                <NotFoundPage />
            </MemoryRouter>
        );

        const mainPageButton = screen.getByRole('button', { name: /go back to main page/i });
        expect(mainPageButton).toBeInTheDocument();
        expect(mainPageButton).toHaveTextContent(/go to main page/i);
    });

    it('navigates to home page when the button is clicked', async () => {
        const user = userEvent.setup();
        
        render(
            <MemoryRouter>
                <NotFoundPage />
            </MemoryRouter>
        );

        const mainPageButton = screen.getByRole('button', { name: /go back to main page/i });
        await user.click(mainPageButton);

        expect(mockNavigate).toHaveBeenCalledWith('/');
    });

    it('loads the illustration image with lazy loading', () => {
        render(
            <MemoryRouter>
                <NotFoundPage />
            </MemoryRouter>
        );

        const image = screen.getByAltText(/illustration showing 404 error/i);
        expect(image).toHaveAttribute('loading', 'lazy');
    });
});