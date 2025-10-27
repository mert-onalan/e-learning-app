import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import DescriptionPage from "./DescriptionPage";

const mockNavigate = vi.fn();
const mockCopyToClipboard = vi.fn();
const mockShareViaEmail = vi.fn();

vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

vi.mock("../../hooks/useShareCourse", () => ({
    useShareCourse: () => ({
        copyToClipboard: mockCopyToClipboard,
        shareViaEmail: mockShareViaEmail,
    }),
}));

vi.mock("../../data/mockData", () => ({
    componentDetailsMockData: {
        1: {
            id: 1,
            name: "Advanced React Patterns",
            image: "/images/react-course.jpg",
            startDate: "2024-01-15",
            endDate: "2024-03-20",
            learningForm: "Online",
            description_data: [
                { name: "Instructor", content: "John Doe" },
                { name: "Duration", content: "8 weeks" },
            ],
        },
    },
}));

describe("DescriptionPage", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("renders course details with correct information", () => {
        render(
            <MemoryRouter initialEntries={["/component/1"]}>
                <Routes>
                    <Route
                        path='/component/:id'
                        element={<DescriptionPage />}
                    />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText("Advanced React Patterns")).toBeInTheDocument();
        expect(screen.getByText("Instructor")).toBeInTheDocument();
        expect(screen.getByText("John Doe")).toBeInTheDocument();
        expect(screen.getAllByText("Learning mode")).toHaveLength(2);
        expect(screen.getAllByText("Online")).toHaveLength(2);
    });

    it("navigates back to main page when back button is clicked", async () => {
        const user = userEvent.setup();

        render(
            <MemoryRouter initialEntries={["/component/1"]}>
                <Routes>
                    <Route
                        path='/component/:id'
                        element={<DescriptionPage />}
                    />
                </Routes>
            </MemoryRouter>
        );

        const backButton = screen.getByRole("button", { name: /all courses/i });
        await user.click(backButton);

        expect(mockNavigate).toHaveBeenCalledWith("/");
    });

    it("copies course link when copy button is clicked", async () => {
        const user = userEvent.setup();

        render(
            <MemoryRouter initialEntries={["/component/1"]}>
                <Routes>
                    <Route
                        path='/component/:id'
                        element={<DescriptionPage />}
                    />
                </Routes>
            </MemoryRouter>
        );

        const copyButton = screen.getByRole("button", {
            name: /copy course link/i,
        });
        await user.click(copyButton);

        expect(mockCopyToClipboard).toHaveBeenCalled();
    });

    it("opens email share when email button is clicked", async () => {
        const user = userEvent.setup();

        render(
            <MemoryRouter initialEntries={["/component/1"]}>
                <Routes>
                    <Route
                        path='/component/:id'
                        element={<DescriptionPage />}
                    />
                </Routes>
            </MemoryRouter>
        );

        const emailButton = screen.getByRole("button", {
            name: /share course by email/i,
        });
        await user.click(emailButton);

        expect(mockShareViaEmail).toHaveBeenCalled();
    });

    it("renders not found page for invalid course id", () => {
        render(
            <MemoryRouter initialEntries={["/component/999"]}>
                <Routes>
                    <Route
                        path='/component/:id'
                        element={<DescriptionPage />}
                    />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText(/oops!/i)).toBeInTheDocument();
        expect(
            screen.getByText(/we couldn.t find the page you were looking for/i)
        ).toBeInTheDocument();
    });
});
