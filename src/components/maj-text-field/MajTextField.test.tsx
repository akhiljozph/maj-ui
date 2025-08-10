import React from "react";
import { describe, it, expect } from "vitest";

import MajTextField from "./MajTextField";
import { render } from "@testing-library/react";

describe("<MajTextField />", () => {
    it("Should have rows and columns specified", () => {
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
