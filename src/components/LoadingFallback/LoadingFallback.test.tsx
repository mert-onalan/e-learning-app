import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import LoadingFallback from "./LoadingFallback";

describe("LoadingFallback", () => {
    it("renders loading text", () => {
        render(<LoadingFallback />);

        expect(screen.getByText(/loading content/i)).toBeInTheDocument();
    });

    it("has correct accessibility attributes", () => {
        render(<LoadingFallback />);

        const container = screen.getByRole("status");
        expect(container).toHaveAttribute("aria-live", "polite");
        expect(container).toHaveAttribute("aria-busy", "true");
    });

    it("renders spinner element", () => {
        const { container } = render(<LoadingFallback />);

        const spinner = container.querySelector(".loading-spinner");
        expect(spinner).toBeInTheDocument();
    });
});
