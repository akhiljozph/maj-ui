import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MajButton from "./MajButton";

describe("Button component", () => {
  it("Button should render correctly", () => {
    render(<MajButton />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
