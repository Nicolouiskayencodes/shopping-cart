import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Cart from "../components/cart";

describe("Cart component", () => {
  it("renders correct heading", () => {
    render(<Cart items={[]}/>);
    expect(screen.getAllByRole("heading")[0].textContent).toMatch(/Shopping Cart/i);
  });
  it("renders cart", ()=>{
    const { container } = render(<Cart items={[]}/>);
    expect(container).toMatchSnapshot();
  })
});