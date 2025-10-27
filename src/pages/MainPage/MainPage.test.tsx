import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import MainPage from "./MainPage";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

vi.mock("../../data/mockData", () => ({
    mainPageMockData: {
        count: 3,
        contents: [
            {
                id: 1,
                name: "React Fundamentals",
                title: "React Fundamentals",
                description: "Learn the basics of React",
                progress: 45,
            },
            {
                id: 2,
                name: "TypeScript Essentials",
                title: "TypeScript Essentials",
                description: "Master TypeScript features",
                progress: 70,
            },
            {
                id: 3,
                name: "Testing with Vitest",
                title: "Testing with Vitest",
                description: "Write effective tests",
                progress: 30,
            },
        ],
    },
}));

describe("MainPage", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("renders page header with correct title and status", () => {
        render(
            <MemoryRouter>
                <MainPage />
            </MemoryRouter>
        );

        expect(screen.getByText("Learning status")).toBeInTheDocument();
        expect(screen.getByText("Current")).toBeInTheDocument();
    });

    it("displays total result count on initial load", () => {
        render(
            <MemoryRouter>
                <MainPage />
            </MemoryRouter>
        );

        expect(screen.getByText("3 results")).toBeInTheDocument();
    });

    it("renders search bar with correct placeholder", () => {
        render(
            <MemoryRouter>
                <MainPage />
            </MemoryRouter>
        );

        const searchInput = screen.getByPlaceholderText("Search term");
        expect(searchInput).toBeInTheDocument();
        expect(searchInput).toHaveValue("");
    });

    it("filters courses when searching", async () => {
        const user = userEvent.setup();

        render(
            <MemoryRouter>
                <MainPage />
            </MemoryRouter>
        );

        const searchInput = screen.getByPlaceholderText("Search term");
        await user.type(searchInput, "TypeScript");

        const searchButton = screen.getByRole("button", { name: /^search$/i });
        await user.click(searchButton);

        expect(screen.getByText(/showing 1 of 3 results/i)).toBeInTheDocument();
    });

    it("shows no results message when search yields no matches", async () => {
        const user = userEvent.setup();

        render(
            <MemoryRouter>
                <MainPage />
            </MemoryRouter>
        );

        const searchInput = screen.getByPlaceholderText("Search term");
        await user.type(searchInput, "Angular Framework");

        const searchButton = screen.getByRole("button", { name: /^search$/i });
        await user.click(searchButton);

        expect(screen.getByText("No results found.")).toBeInTheDocument();
        expect(screen.getByText(/showing 0 of 3 results/i)).toBeInTheDocument();
    });

    it("clears search and shows all results", async () => {
        const user = userEvent.setup();

        render(
            <MemoryRouter>
                <MainPage />
            </MemoryRouter>
        );

        const searchInput = screen.getByPlaceholderText("Search term");
        await user.type(searchInput, "React");

        const searchButton = screen.getByRole("button", { name: /^search$/i });
        await user.click(searchButton);

        expect(screen.getByText(/showing 1 of 3 results/i)).toBeInTheDocument();

        const clearButton = screen.getByRole("button", {
            name: /clear search/i,
        });
        await user.click(clearButton);

        expect(screen.getByText("3 results")).toBeInTheDocument();
    });

    it("navigates to course details when tile is clicked", async () => {
        const user = userEvent.setup();

        render(
            <MemoryRouter>
                <MainPage />
            </MemoryRouter>
        );

        const tiles = screen.getAllByRole("button", { name: /course$/i });
        await user.click(tiles[0]);

        expect(mockNavigate).toHaveBeenCalledWith(
            expect.stringContaining("/component/")
        );
    });

    it("displays all course progress bars", () => {
        render(
            <MemoryRouter>
                <MainPage />
            </MemoryRouter>
        );

        expect(
            screen.getByRole("progressbar", { name: /course progress: 45%/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("progressbar", { name: /course progress: 70%/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("progressbar", { name: /course progress: 30%/i })
        ).toBeInTheDocument();
    });
});
