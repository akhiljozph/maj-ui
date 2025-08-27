import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

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

    describe("Interaction between props", () => {
        it("allows multiple default open items when allowMultipleOpen is true", () => {
            renderAccordion({ defaultOpenItems: [0, 1], allowMultipleOpen: true });
            expect(screen.getByText("Content 1")).toBeVisible();
            expect(screen.getByText("Content 2")).toBeVisible();
        });

        it("only opens the first default open item when allowMultipleOpen is false", () => {
            renderAccordion({ defaultOpenItems: [0, 1], allowMultipleOpen: false });
            expect(screen.getByText("Content 1")).toBeVisible();
            expect(screen.getByText("Content 2")).not.toBeVisible();
        });

        it("closes one of multiple open items when allowMultipleOpen is true", () => {
            renderAccordion({ allowMultipleOpen: true, defaultOpenItems: [0, 1] });
            expect(screen.getByText("Content 1")).toBeVisible();
            expect(screen.getByText("Content 2")).toBeVisible();

            const title1 = screen.getByText("Item 1");
            fireEvent.click(title1);

            expect(screen.getByText("Content 1")).not.toBeVisible();
            expect(screen.getByText("Content 2")).toBeVisible();
        });

        it("calls onChange correctly when allowMultipleOpen is true", () => {
            const handleChange = vi.fn();
            renderAccordion({
                allowMultipleOpen: true,
                onChange: handleChange,
                defaultOpenItems: [0],
            });

            const title2 = screen.getByText("Item 2");
            fireEvent.click(title2);
            expect(handleChange).toHaveBeenCalledWith([0, 1]);

            const title1 = screen.getByText("Item 1");
            fireEvent.click(title1);
            expect(handleChange).toHaveBeenCalledWith([1]);
        });
    });

    describe("Edge Cases and Accessibility", () => {
        it("renders an empty div when items array is empty", () => {
            const { container } = renderAccordion({ items: [] });
            const accordionElement = container.querySelector(".maj-accordion");
            expect(accordionElement).toBeInTheDocument();
            expect(accordionElement?.childElementCount).toBe(0);
        });

        it("handles items without an id property gracefully", () => {
            const itemsWithoutId = [
                { title: "No ID 1", content: "Content No ID 1" },
                { title: "No ID 2", content: "Content No ID 2" },
            ];
            render(<MajAccordion items={itemsWithoutId} />);
            const title1 = screen.getByText("No ID 1");
            expect(title1).toBeInTheDocument();
            fireEvent.click(title1);
            expect(screen.getByText("Content No ID 1")).toBeVisible();
        });

        it("correctly sets aria-expanded attribute on toggle", () => {
            renderAccordion();
            const title1 = screen.getByText("Item 1");
            expect(title1).toHaveAttribute("aria-expanded", "false");

            fireEvent.click(title1);
            expect(title1).toHaveAttribute("aria-expanded", "true");

            fireEvent.click(title1);
            expect(title1).toHaveAttribute("aria-expanded", "false");
        });

        it("correctly applies the 'open' class to content", () => {
            renderAccordion();
            const content1 = screen.getByText("Content 1");
            expect(content1).not.toHaveClass("open");

            const title1 = screen.getByText("Item 1");
            fireEvent.click(title1);
            expect(content1).toHaveClass("open");
        });
    });
});
