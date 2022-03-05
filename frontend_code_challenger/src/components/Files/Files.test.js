import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import TableFiles from "./files";

test("Render Loading", () => {
  const component = render(<TableFiles />);
  component.getByText("Loading...");
});
