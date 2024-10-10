import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import MajToggle from "./MajToggle";

describe("MAJ Toggle component", () => {
    it("should render toggle texts", () => {
        const toggleOneLabel = "Yearly";
        const toggleTwoLabel = "Monthly";

        const majToggleElement = (
            <MajToggle
                toggleOneLabel={toggleOneLabel}
                toggleTwoLabel={toggleTwoLabel}
            />
        );

        render(majToggleElement);

        const majToggleLabelOne = screen.getByText(new RegExp(toggleOneLabel, "i"));
        expect(majToggleLabelOne).toBeDefined();

        const majToggleLabelTwo = screen.getByText(new RegExp(toggleTwoLabel, "i"));
        expect(majToggleLabelTwo).toBeDefined();
    });
});

// Test fails - need to review with someone.
describe("MAJ Toggle component", () => {
    it("should not render toggle texts", () => {
        const toggleOneLabel = "Yearly";
        const toggleTwoLabel = "Monthly";

        const majToggleElement = <MajToggle />;

        render(majToggleElement);

        const majToggleLabelOne = screen.getByText(new RegExp(toggleOneLabel, "i"));
        expect(majToggleLabelOne).toBeUndefined();

        const majToggleLabelTwo = screen.getByText(new RegExp(toggleTwoLabel, "i"));
        expect(majToggleLabelTwo).toBeUndefined();
    });
});
