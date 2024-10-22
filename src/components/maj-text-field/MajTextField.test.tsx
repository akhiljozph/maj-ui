import React from "react";
import { describe, it, expect } from "vitest";

import MajTextField from "./MajTextField";
import { render } from "@testing-library/react";

describe("A truthy statement", () => {
    it("should be equal to 2", () => {
        expect(1 + 1).toEqual(2);
    });
});

describe("Should have rows and colums specified", () => {
    it("should greater than 0", () => {
        const rows = 1;
        const cols = 2;

        const majTextFieldElement = (
            <MajTextField
                cols={cols}
                rows={rows}
            />
        );

        render(majTextFieldElement);
    });
});
