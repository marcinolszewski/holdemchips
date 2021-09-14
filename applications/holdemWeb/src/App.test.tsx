import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/You can check the holdem down below/i);
  expect(linkElement).toBeInTheDocument();
});
