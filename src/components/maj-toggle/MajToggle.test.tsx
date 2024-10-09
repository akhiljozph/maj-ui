import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen  } from "@testing-library/react";

import MajToggle from "./MajToggle";

describe("MAJ Toggle component", () => {
    it("should render toggles texts", () => {
        const toggleOneLabel = "Yearly";
        const toggleTwoLabel = "Monthly";

        const majToggleElement = (
            <MajToggle toggleOneLabel={toggleOneLabel} toggleTwoLabel={toggleTwoLabel} />
        );

        render(majToggleElement);

        const majToggleLabelOne = screen.getByText(new RegExp(toggleOneLabel, "i"));
        expect(majToggleLabelOne).toBeDefined();

        const majToggleLabelTwo = screen.getByText(new RegExp(toggleTwoLabel, "i"));
        expect(majToggleLabelTwo).toBeDefined();
    });
});
