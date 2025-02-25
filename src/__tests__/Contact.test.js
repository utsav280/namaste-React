import { render, screen } from "@testing-library/react";
import Contact from "../component/Contact";
import React from "react";

test("should load the contact us component", () => {
  render(<Contact />);

  const heading = screen.getAllByRole("heading");
  heading.forEach((h) => {
    expect(h).toBeInTheDocument();
  });
});
