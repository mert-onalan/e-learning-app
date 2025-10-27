import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Tile from "./Tile";
import type { IComponentItem } from "../../types/types";

const mockTileData: IComponentItem = {
    id: 1,
    name: "React Fundamentals",
    subtitle: "Learn the basics of React",
    type: "COURSE",
    image: "/test-image.jpg",
    progress: 65,
};

describe("Tile", () => {
    it("renders course information correctly", () => {
        const mockOnClick = vi.fn();

        render(<Tile tileData={mockTileData} onClick={mockOnClick} />);

        expect(screen.getByText("React Fundamentals")).toBeInTheDocument();
        expect(screen.getByText("Learn the basics of React")).toBeInTheDocument();
    });

    it("displays course image with correct alt text", () => {
        const mockOnClick = vi.fn();

        render(<Tile tileData={mockTileData} onClick={mockOnClick} />);

        const image = screen.getByAltText("React Fundamentals course thumbnail");
        expect(image).toHaveAttribute("src", "/test-image.jpg");
    });

    it("calls onClick with correct id when clicked", async () => {
        const user = userEvent.setup();
        const mockOnClick = vi.fn();

        render(<Tile tileData={mockTileData} onClick={mockOnClick} />);

        await user.click(screen.getByRole("button"));
        expect(mockOnClick).toHaveBeenCalledWith(1);
    });

    it("renders progress bar", () => {
        const mockOnClick = vi.fn();

        const { container } = render(
            <Tile tileData={mockTileData} onClick={mockOnClick} />
        );

        const progressBar = container.querySelector(".progress-bar");
        expect(progressBar).toBeInTheDocument();
    });

    it("shows course type label", () => {
        const mockOnClick = vi.fn();

        const { container } = render(
            <Tile tileData={mockTileData} onClick={mockOnClick} />
        );

        const typeSection = container.querySelector(".tile-type");
        expect(typeSection).toBeInTheDocument();
    });
});
