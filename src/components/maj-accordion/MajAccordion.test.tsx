import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import React from "react";
import MajAccordion from "./MajAccordion";
import MajAccordionProps from "./MajAccordion.types";

const mockItems = [
    { id: 1, title: "Item 1", content: "Content 1" },
    { id: 2, title: "Item 2", content: "Content 2" },
    { id: 3, title: "Item 3", content: "Content 3", disabled: true },
];

const renderAccordion = (props: Partial<MajAccordionProps> = {}) => {
    const defaultProps: MajAccordionProps = {
        items: mockItems,
    };
    return render(
        <MajAccordion
            {...defaultProps}
            {...props}
        />,
    );
};

describe("MajAccordion", () => {
    it("renders all accordion items", () => {
        renderAccordion();
        expect(screen.getByText("Item 1")).toBeInTheDocument();
        expect(screen.getByText("Item 2")).toBeInTheDocument();
        expect(screen.getByText("Item 3")).toBeInTheDocument();
    });

    it("applies custom className", () => {
        const { container } = renderAccordion({ className: "custom-class" });
        expect(container.firstChild).toHaveClass("maj-accordion custom-class");
    });

    it("initially renders all items as closed", () => {
        renderAccordion();
        expect(screen.getByText("Content 1")).not.toBeVisible();
        expect(screen.getByText("Content 2")).not.toBeVisible();
        expect(screen.getByText("Content 3")).not.toBeVisible();
    });

    describe("Uncontrolled Mode", () => {
        it("opens an item on click", async () => {
            renderAccordion();
            const title1 = screen.getByText("Item 1");
            fireEvent.click(title1);
            expect(screen.getByText("Content 1")).toBeVisible();
            expect(screen.getByText("Content 2")).not.toBeVisible();
        });

        it("closes an already open item on click", () => {
            renderAccordion();
            const title1 = screen.getByText("Item 1");
            fireEvent.click(title1);
            expect(screen.getByText("Content 1")).toBeVisible();
            fireEvent.click(title1);
            expect(screen.getByText("Content 1")).not.toBeVisible();
        });

        it("respects defaultOpenItems", () => {
            renderAccordion({ defaultOpenItems: [1] });
            expect(screen.getByText("Content 1")).not.toBeVisible();
            expect(screen.getByText("Content 2")).toBeVisible();
        });

        it("only allows one item to be open when allowMultipleOpen is false", () => {
            renderAccordion({ allowMultipleOpen: false });
            const title1 = screen.getByText("Item 1");
            const title2 = screen.getByText("Item 2");

            fireEvent.click(title1);
            expect(screen.getByText("Content 1")).toBeVisible();
            expect(screen.getByText("Content 2")).not.toBeVisible();

            fireEvent.click(title2);
            expect(screen.getByText("Content 1")).not.toBeVisible();
            expect(screen.getByText("Content 2")).toBeVisible();
        });

        it("allows multiple items to be open when allowMultipleOpen is true", () => {
            renderAccordion({ allowMultipleOpen: true });
            const title1 = screen.getByText("Item 1");
            const title2 = screen.getByText("Item 2");

            fireEvent.click(title1);
            fireEvent.click(title2);

            expect(screen.getByText("Content 1")).toBeVisible();
            expect(screen.getByText("Content 2")).toBeVisible();
        });

        it("calls onChange with the new open items array", () => {
            const handleChange = vi.fn();
            renderAccordion({ onChange: handleChange });

            const title1 = screen.getByText("Item 1");
            fireEvent.click(title1);
            expect(handleChange).toHaveBeenCalledWith([0]);

            fireEvent.click(title1);
            expect(handleChange).toHaveBeenCalledWith([]);
        });
    });

    describe("Controlled Mode", () => {
        it("renders with open items based on openItems prop", () => {
            renderAccordion({ openItems: [0] });
            expect(screen.getByText("Content 1")).toBeVisible();
            expect(screen.getByText("Content 2")).not.toBeVisible();
        });

        it("does not change open state internally on click", () => {
            renderAccordion({ openItems: [0] });
            const title2 = screen.getByText("Item 2");
            fireEvent.click(title2);
            // State should not change because it's controlled
            expect(screen.getByText("Content 1")).toBeVisible();
            expect(screen.getByText("Content 2")).not.toBeVisible();
        });

        it("calls onChange with the new potential open items on click", () => {
            const handleChange = vi.fn();
            renderAccordion({ openItems: [0], onChange: handleChange });

            const title2 = screen.getByText("Item 2");
            fireEvent.click(title2);
            expect(handleChange).toHaveBeenCalledWith([1]); // Proposes new state
        });

        it("updates when openItems prop changes", () => {
            const { rerender } = renderAccordion({ openItems: [0] });
            expect(screen.getByText("Content 1")).toBeVisible();

            rerender(
                <MajAccordion
                    items={mockItems}
                    openItems={[1]}
                />,
            );
            expect(screen.getByText("Content 1")).not.toBeVisible();
            expect(screen.getByText("Content 2")).toBeVisible();
        });
    });

    describe("Disabled Items", () => {
        it("disables the button and does not toggle on click", () => {
            const handleChange = vi.fn();
            renderAccordion({ onChange: handleChange });

            const disabledTitle = screen.getByText("Item 3");
            expect(disabledTitle).toBeDisabled();

            fireEvent.click(disabledTitle);
            expect(screen.getByText("Content 3")).not.toBeVisible();
            expect(handleChange).not.toHaveBeenCalled();
        });

        it("applies the disabled class to the item", () => {
            renderAccordion();
            const disabledTitle = screen.getByText("Item 3");
            // The parent div of the button and content has the 'disabled' class
            expect(disabledTitle.closest(".accordion-item")).toHaveClass("disabled");
        });
    });
});
