import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
    it("renders with placeholder text", () => {
        const mockOnChange = vi.fn();
        const mockOnSearch = vi.fn();

        render(
            <SearchBar
                value=''
                placeholder='Search courses...'
                onChange={mockOnChange}
                onSearch={mockOnSearch}
            />
        );

        expect(
            screen.getByPlaceholderText("Search courses...")
        ).toBeInTheDocument();
    });

    it("calls onChange when user types", async () => {
        const user = userEvent.setup();
        const mockOnChange = vi.fn();
        const mockOnSearch = vi.fn();

        render(
            <SearchBar
                value=''
                onChange={mockOnChange}
                onSearch={mockOnSearch}
            />
        );

        await user.type(screen.getByRole("searchbox"), "React");
        expect(mockOnChange).toHaveBeenCalled();
    });

    it("calls onSearch when form is submitted", async () => {
        const user = userEvent.setup();
        const mockOnChange = vi.fn();
        const mockOnSearch = vi.fn();

        render(
            <SearchBar
                value='React'
                onChange={mockOnChange}
                onSearch={mockOnSearch}
            />
        );

        await user.click(screen.getByText("Search"));
        expect(mockOnSearch).toHaveBeenCalledWith("React");
    });

    it("shows clear button when there is text", () => {
        const mockOnChange = vi.fn();
        const mockOnSearch = vi.fn();

        render(
            <SearchBar
                value='some text'
                onChange={mockOnChange}
                onSearch={mockOnSearch}
            />
        );

        expect(screen.getByLabelText("Clear search")).toBeInTheDocument();
    });

    it("clears input when clear button is clicked", async () => {
        const user = userEvent.setup();
        const mockOnChange = vi.fn();
        const mockOnSearch = vi.fn();
        const mockOnClear = vi.fn();

        render(
            <SearchBar
                value='test'
                onChange={mockOnChange}
                onSearch={mockOnSearch}
                onClear={mockOnClear}
            />
        );

        await user.click(screen.getByLabelText("Clear search"));
        expect(mockOnChange).toHaveBeenCalledWith("");
        expect(mockOnClear).toHaveBeenCalled();
    });
});
