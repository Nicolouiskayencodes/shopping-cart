import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../components/home";

describe("Home component", () => {
  it("renders correct heading", () => {
    render(<Home />);
    expect(screen.getAllByRole("heading")[0].textContent).toMatch(/InterPorium/i);
  });
  it("renders cart", ()=>{
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  })
});