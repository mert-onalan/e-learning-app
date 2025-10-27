import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import PageHeader from "./PageHeader";

describe("PageHeader", () => {
    it("renders title and status", () => {
        render(<PageHeader title='React Basics' status='In Progress' />);

        expect(screen.getByText("React Basics")).toBeInTheDocument();
        expect(screen.getByText("In Progress")).toBeInTheDocument();
    });

    it("shows subtitle when provided", () => {
        render(
            <PageHeader
                title='Advanced TypeScript'
                status='Completed'
                subTitle='Learn advanced patterns'
            />
        );

        expect(screen.getByText("Learn advanced patterns")).toBeInTheDocument();
    });

    it("renders subtitle icon when provided", () => {
        const testIcon = <span data-testid='test-icon'>📚</span>;

        render(
            <PageHeader
                title='Web Development'
                status='Active'
                subTitle='Full Stack Course'
                subTitleIcon={testIcon}
            />
        );

        expect(screen.getByTestId("test-icon")).toBeInTheDocument();
    });

    it("displays course image when provided", () => {
        render(
            <PageHeader
                title='JavaScript Fundamentals'
                status='Active'
                image='/test-image.jpg'
            />
        );

        const image = screen.getByAltText(
            "JavaScript Fundamentals course thumbnail"
        );
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", "/test-image.jpg");
    });

    it("does not show image when not provided", () => {
        render(<PageHeader title='CSS Mastery' status='Upcoming' />);

        const image = screen.queryByRole("img");
        expect(image).not.toBeInTheDocument();
    });
});
